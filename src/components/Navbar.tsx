"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#education", label: "Education" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact Me" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--color-secondary)]/95 backdrop-blur transition-colors duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-[var(--color-highlight)]"
          onClick={closeMobileMenu}
        >
          Chris Manfredi
        </Link>
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          className="inline-flex flex-col items-center justify-center rounded-full border border-[var(--color-highlight)]/40 bg-[var(--color-secondary)]/60 p-2 text-[var(--color-highlight)] transition hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)] md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              mobileOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`mt-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`mt-1 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
        <ul className="hidden flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-secondary)] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[var(--color-secondary)]/60 px-3 py-1.5 transition-colors duration-300 hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        id="primary-navigation"
        className={`md:hidden transition-[max-height,opacity] duration-300 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-[var(--color-secondary)]/60 bg-[var(--color-secondary)]/80 backdrop-blur`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text-secondary)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl border border-transparent bg-[var(--color-primary)]/80 px-4 py-3 transition-colors duration-200 hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
