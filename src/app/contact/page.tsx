"use client";

import { useState } from "react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@cmanfredi.dev",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cmanfredi",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/cmanfredi",
  },
  {
    label: "GitHub",
    href: "https://github.com/cmanfredi",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (submitted) {
      setSubmitted(false);
    }
    if (error) {
      setError(null);
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Unable to send message right now.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (submissionError) {
      console.error("Failed to send contact email:", submissionError);
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send message right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] pt-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] sm:text-5xl">
            Let&apos;s collaborate.
          </h1>
          <p className="text-base leading-7 text-[var(--color-text-secondary)]">
            Share a quick brief or idea. I typically respond within two business
            days with next steps, questions, or a link to schedule time.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--color-secondary)]/30 bg-[var(--color-primary)]/60 p-6">
          <h2 className="text-lg font-semibold text-[var(--color-highlight)]">
            Availability
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
            Engaging with product teams on design systems, marketing web
            experiences, and front-of-stack engineering. Open to fractional,
            contract, or select full time roles.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] transition-all duration-300 hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <form
        className="space-y-6 rounded-3xl bg-[var(--color-secondary)]/30 p-8 shadow-xl shadow-black/20"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label
            className="text-base font-medium uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            value={formState.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-transparent bg-[var(--color-primary)]/80 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition-all duration-300 focus:border-[var(--color-highlight)] focus:ring-2 focus:ring-[var(--color-highlight)]/40"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-base font-medium uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-transparent bg-[var(--color-primary)]/80 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition-all duration-300 focus:border-[var(--color-highlight)] focus:ring-2 focus:ring-[var(--color-highlight)]/40"
            placeholder="name@company.com"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-base font-medium uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formState.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-transparent bg-[var(--color-primary)]/80 px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition-all duration-300 focus:border-[var(--color-highlight)] focus:ring-2 focus:ring-[var(--color-highlight)]/40"
            placeholder="Tell me about the project, timeline, and goals."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[var(--color-accent)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-[var(--color-highlight)] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitted ? (
          <p className="text-center text-sm uppercase tracking-[0.28em] text-[var(--color-highlight)]">
            Message sent. Talk soon!
          </p>
        ) : null}
        {error ? (
          <p className="text-center text-sm uppercase tracking-[0.28em] text-red-400">
            {error}
          </p>
        ) : null}
      </form>
    </div>
  );
}
