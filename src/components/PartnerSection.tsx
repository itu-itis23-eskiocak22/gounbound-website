"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const partnerFeatures = [
  {
    title: "CREATE",
    description: "Publish your experiences.",
  },
  {
    title: "TEACH",
    description: "Create Extreme 101 lessons.",
  },
  {
    title: "REACH",
    description: "Connect with people interested in what you do.",
  },
];

export function PartnerSection() {
  const ref = useScrollReveal();

  return (
    <section id="partners" className="bg-forest py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute -right-40 -top-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                Coming Soon
              </span>
            </div>

            <h2 className="heading-section text-white text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
              Bring your experience
              <br />
              to the people
              <br />
              looking for it.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              For outdoor businesses, instructors, clubs and experience providers.
            </p>
            
            <div className="flex flex-col gap-6 mb-10">
              {partnerFeatures.map((feature, i) => (
                <div key={feature.title} className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}>
                  <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white text-sm tracking-wider uppercase mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-semibold rounded-2xl hover:bg-paper transition-all hover:shadow-lg"
            >
              Become a partner
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Photography */}
          <div className="reveal reveal-delay-2 h-[400px] md:h-[600px] w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
             <img src="/images/climbing.jpg" alt="Climbing instructor" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
