"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WaitlistCTA() {
  const ref = useScrollReveal();

  return (
    <section id="waitlist" className="bg-forest py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute -right-60 -top-60 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -left-40 bottom-0 w-80 h-80 bg-forest-dark rounded-full blur-3xl" />

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

        {/* Reassurance */}
        <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: "✦", text: "Early access" },
            { icon: "✦", text: "Updates & news" },
            { icon: "✦", text: "No spam" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-white/40 text-sm"
            >
              <span className="text-sage text-xs">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
