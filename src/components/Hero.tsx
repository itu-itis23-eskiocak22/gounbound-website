"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="A hiker standing on a mountain ridge overlooking a vast lake at sunrise"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-sand/95 via-sand/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl">
          <div className="reveal">
            <p className="text-meta text-sage mb-6">
              OUTDOOR ADVENTURE COMMUNITY
            </p>
          </div>

          <h1 className="reveal reveal-delay-1 heading-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-8">
            Go beyond
            <br />
            your bounds.
          </h1>

          <p className="reveal reveal-delay-2 text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            UNBOUND is the outdoor community that helps you discover new
            experiences, learn how to start, connect with people and keep your
            adventures alive.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4">
            <a href="#waitlist" className="btn-primary text-base px-8 py-4">
              Join Waitlist
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#features" className="btn-secondary text-base px-8 py-4">
              Explore the App
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-text-tertiary/30 relative overflow-hidden">
          <div
            className="w-full h-3 bg-forest absolute top-0"
            style={{ animation: "scrollDown 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(300%);
          }
        }
      `}</style>
    </section>
  );
}
