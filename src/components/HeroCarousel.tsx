import Image from "next/image";
import Link from "next/link";

export function HeroCarousel() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[var(--color-primary)] shadow-xl shadow-slate-300/70">
      <div className="relative h-[40vh] min-h-[520px]">
        <Image
          src="/2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="pointer-events-none relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center pointer-events-auto mb-30">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-highlight)]">
              Designer & Developer
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[var(--color-text-primary)] sm:text-5xl">
              Hello, I&apos;m Chris Manfredi
            </h1>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#portfolio"
                className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
