'use client';

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Card } from "@/components/Card";

type TimelineItem = {
  title: string;
  subtitle: string;
  description: string;
  period: string;
  imageSrc: string;
  caption?: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "Stonington High School",
    subtitle: "Pawcatuck, CT",
    description:
      "Stonington High School is a public high school that serves the town of Stonington and surrounding communities.",
    period: "2009 - 2012",
    imageSrc: "/shs1.jpeg",
  },
  {
    title: "Full Sail University",
    subtitle: "Winter Park, FL",
    description:
      "The Bachelors of Science program at Full Sail University gives students the knowledge and skills needed to build, deploy and maintain modern websites and web applications.",
    period: "2012 - 2016",
    imageSrc: "/fullsail.jpg",
  },
];

const portfolioItems = [
  {
    title: "Track My Time",
    caption: "",
    subtitle: "Work PTO App",
    description:
      "PTO scheduling app simplifies time-off management for modern teams. Employees can easily submit vacation, sick, or personal day requests, while managers approve and track them in real time.",
    href: "http://track-my-time-v2.vercel.app",
    category: "Next.JS",
    tags: ["Next.js"],
    imageSrc: "/trackmytime.png",
    imageStyle: {
      backgroundSize: "135%",
    },
  },
];

const portfolioCategories = [
  "All",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

export default function EducationPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleContactChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (contactSubmitted) {
      setContactSubmitted(false);
    }
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSubmitting(true);
    console.log("Contact form submission:", contactForm);
    window.setTimeout(() => {
      setContactSubmitting(false);
      setContactSubmitted(true);
      setContactForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <div className="space-y-40 pt-24">
      <section id="education" className="scroll-mt-32 space-y-6">
        <div className="grid gap-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] sm:text-4xl">
                Education
              </h2>
            </div>
            <div className="relative border-l border-[var(--color-secondary)] pl-12">
              {timelineItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[11px] top-4 h-4 w-4 rounded-full border-2 border-[var(--color-background)] bg-[var(--color-highlight)]" />
                  <div className="pl-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
                    <div className="md:flex-1">
                      <Card
                        title={item.title}
                        caption={item.caption}
                        subtitle={`${item.subtitle} — ${item.period}`}
                        description={item.description}
                        variant="compact"
                        className="h-full"
                      />
                    </div>
                    {item.imageSrc ? (
                      <div className="relative hidden w-full overflow-hidden rounded-2xl border border-[var(--color-secondary)]/60 bg-[var(--color-primary)]/70 md:h-auto md:min-h-[220px] md:w-72 md:block">
                        <Image
                          src={item.imageSrc}
                          alt={`${item.title} campus`}
                          fill
                          sizes="(max-width: 768px) 100vw, 288px"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                  </div>
                  {item.imageSrc ? (
                    <div className="relative mt-3 h-56 overflow-hidden rounded-2xl border border-[var(--color-secondary)]/60 bg-[var(--color-primary)]/70 md:hidden">
                      <Image
                        src={item.imageSrc}
                        alt={`${item.title} campus`}
                        fill
                        sizes="(max-width: 768px) 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-32 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
          </div>
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((category) => {
              const isActive = category === activeFilter;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] transition ${
                    isActive
                      ? "border-[var(--color-highlight)] bg-[var(--color-highlight)] text-[var(--color-background)]"
                      : "border-transparent bg-[var(--color-secondary)]/60 text-[var(--color-text-secondary)] hover:border-[var(--color-highlight)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <aside
            id="contact"
            className="order-2 scroll-mt-32 rounded-3xl border border-[var(--color-secondary)]/40 bg-[var(--color-primary)]/50 p-8 shadow-lg shadow-black/15 lg:order-1 lg:mr-8"
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                Contact Me
              </h3>
              <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                Share a quick note and I&apos;ll follow up within two business
                days with next steps or a time to connect.
              </p>
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
              <div className="space-y-1.5">
                <label
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
                  htmlFor="contact-name"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-transparent bg-[var(--color-secondary)]/40 px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none transition-all duration-300 focus:border-[var(--color-highlight)] focus:ring-2 focus:ring-[var(--color-highlight)]/30"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
                  htmlFor="contact-email"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-transparent bg-[var(--color-secondary)]/40 px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none transition-all duration-300 focus:border-[var(--color-highlight)] focus:ring-2 focus:ring-[var(--color-highlight)]/30"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-transparent bg-[var(--color-secondary)]/40 px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none transition-all duration-300 focus:border-[var(--color-highlight)] focus:ring-2 focus:ring-[var(--color-highlight)]/30"
                  placeholder="Share the project details and timeline."
                />
              </div>
              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full rounded-full bg-[var(--color-accent)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-[var(--color-highlight)] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {contactSubmitting ? "Sending..." : "Send Message"}
              </button>
              {contactSubmitted ? (
                <p className="text-center text-xs uppercase tracking-[0.28em] text-[var(--color-highlight)]">
                  Message sent. Talk soon!
                </p>
              ) : null}
            </form>
          </aside>
          <div className="order-1 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(0,1fr))] xl:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:order-2">
            {filteredPortfolio.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.subtitle}
                    </p>
                  ) : null}
                </div>
                <Card
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  className="w-full min-h-[240px]"
                  imageSrc={item.imageSrc}
                  imageAlt={item.title}
                  imageStyle={item.imageStyle}
                  hideHeader
                />
                {item.description ? (
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-secondary)]/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-highlight)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
