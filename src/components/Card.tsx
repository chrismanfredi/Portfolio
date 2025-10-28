import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  caption?: string;
  description?: string;
  href?: string;
  variant?: "default" | "compact";
  className?: string;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageStyle?: CSSProperties;
  hideHeader?: boolean;
};

export function Card({
  title,
  subtitle,
  caption,
  description,
  href,
  variant = "default",
  className,
  children,
  imageSrc,
  imageAlt,
  imageStyle,
  hideHeader = false,
}: CardProps) {
  const isCompact = variant === "compact";
  const articleClassName = [
    "flex h-full flex-col rounded-2xl border border-transparent bg-[var(--color-secondary)]/40 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-highlight)] hover:shadow-black/30",
    isCompact ? "gap-2 p-3" : "gap-4 p-6",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const articleStyle: CSSProperties | undefined = imageSrc
    ? {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...imageStyle,
      }
    : imageStyle;

  const ariaLabel = imageAlt ?? title;
  const showHeader = !hideHeader && (caption || title || subtitle);

  const content = (
    <article className={articleClassName} style={articleStyle} aria-label={ariaLabel}>
      {showHeader ? (
        <header className="space-y-1">
          {caption ? (
            <p
              className={`uppercase tracking-[0.3em] text-[var(--color-text-secondary)] ${
                isCompact ? "text-sm" : "text-base"
              }`}
            >
              {caption}
            </p>
          ) : null}
          <h3
            className={`font-semibold text-[var(--color-text-primary)] ${
              isCompact ? "text-lg" : "text-xl"
            }`}
          >
            {title}
          </h3>
          {subtitle ? (
            <p
              className={`text-[var(--color-text-secondary)] ${
                isCompact ? "text-sm" : "text-base"
              }`}
            >
              {subtitle}
            </p>
          ) : null}
        </header>
      ) : null}
      {!hideHeader && description ? (
        <p
          className={`text-[var(--color-text-secondary)] ${
            isCompact ? "text-sm leading-6" : "text-base leading-7"
          }`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
}
