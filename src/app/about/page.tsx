"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-16 pt-24">
      <section
        id="about"
        className="scroll-mt-32 flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:text-left"
      >
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-2xl shadow-black/40 block sm:hidden lg:block lg:mx-0 lg:h-64 lg:w-64 lg:rounded-3xl xl:h-72 xl:w-72">
          <Image
            src="/4.jpg"
            alt="Portrait of Chris Manfredi"
            fill
            priority
            sizes="(max-width: 639px) 192px, (max-width: 1023px) 0px, 288px"
            className="object-cover lg:object-contain"
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
