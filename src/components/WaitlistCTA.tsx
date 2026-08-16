"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

export function WaitlistCTA() {
  const ref = useScrollReveal();

  return (
    <section id="waitlist" className="bg-forest py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Outdoor landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest to-forest/50" />
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center">
        <div className="reveal">
          <h2 className="heading-section text-white text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            Your adventure
            <br />
            starts here.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Be among the first to explore UNBOUND.
          </p>
        </div>

        {/* Email Form */}
        <div className="reveal reveal-delay-1 max-w-lg mx-auto">
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/15 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all text-[0.9375rem]"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-forest font-semibold rounded-2xl hover:bg-paper transition-all hover:shadow-lg whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
