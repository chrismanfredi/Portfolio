"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-16 pt-24">
      <section
        id="about"
        className="scroll-mt-32 flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:text-left"
      >
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-2xl shadow-black/40 sm:mx-0">
          <Image
            src="/4.jpg"
            alt="Portrait of Chris Manfredi"
            fill
            priority
            sizes="(max-width: 640px) 192px, 192px"
            className="object-cover"
          />
        </div>
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-[var(--color-text-primary)]">
              About Me
            </h1>
          </div>
          <p className="text-base leading-8 text-[var(--color-text-secondary)]">
            I&apos;m Chris Manfredi, a passionate and detail-oriented Front-End Web Developer with a Bachelor’s Degree in Web Development from Full Sail University (Class of 2016). Skilled in creating responsive, user-focused websites and web applications using modern technologies such as HTML5, CSS3, JavaScript, and frameworks like React and Next.js.
          </p>
        </div>
      </section>
    </div>
  );
}
