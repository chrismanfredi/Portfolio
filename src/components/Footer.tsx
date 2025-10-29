const socialLinks = [
  {
    href: "https://github.com/chrismanfredi",
    label: "GitHub",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.76 0 0 .85-.28 2.8 1.05a9.41 9.41 0 0 1 2.55-.35c.87 0 1.75.12 2.55.35 1.95-1.33 2.8-1.05 2.8-1.05.55 1.44.2 2.5.1 2.76.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .28.18.6.69.5A10.04 10.04 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/christopher-manfredi-3a381b205/",
    label: "LinkedIn",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.06H6.16V9.75h2.18v8.31ZM7.26 8.76a1.26 1.26 0 1 1 1.26-1.26 1.26 1.26 0 0 1-1.26 1.26Zm11.72 9.3h-2.18v-4.11c0-.98-.02-2.25-1.37-2.25-1.37 0-1.58 1.07-1.58 2.18v4.18h-2.18V9.75h2.09v1.14h.03a2.29 2.29 0 0 1 2.05-1.13c2.19 0 2.6 1.44 2.6 3.31v4.99Z" />
      </svg>
    ),
  },
  {
    href: "mailto:hello@cmanfredi.dev",
    label: "Email",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25 10-6.25V6a2 2 0 0 0-2-2Zm2 5-10 6.25L2 9v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-secondary)]/60 bg-[var(--color-primary)]/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:chrismanfredi11@gmail.com"
            className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[var(--color-highlight)]"
          >
            Say hello
          </a>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-center rounded-full border border-transparent bg-[var(--color-secondary)]/60 p-2 text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-secondary)]/60 py-4">
        <p className="mx-auto max-w-6xl px-6 text-xs uppercase tracking-[0.22em] text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Chris Manfredi
        </p>
      </div>
    </footer>
  );
}
