"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Find something that makes you curious.",
    image: "/images/discover-step.jpg",
    alt: "Person studying a topographic trail map on a wooden table with compass and notebook",
  },
  {
    number: "02",
    title: "Learn",
    description: "Start with the basics and build confidence.",
    image: "/images/learn-step.jpg",
    alt: "Climbing instructor teaching a beginner student on outdoor bouldering wall",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Find people, clubs and instructors.",
    image: "/images/connect-step.jpg",
    alt: "Group of friends gathered around campfire at dusk in the mountains",
  },
  {
    number: "04",
    title: "Share",
    description:
      "Document what you experienced.",
    image: "/images/share-step.jpg",
    alt: "Person journaling on a cliff edge at sunset overlooking mountain valley",
  },
];

export function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-paper py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-20">
          <p className="text-meta text-sage mb-4">HOW IT WORKS</p>
          <h2 className="heading-section text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            From curiosity
            <br />
            to adventure.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[45%] left-[12%] right-[12%] h-px bg-forest/15">
            <div
              className="absolute inset-0 bg-gradient-to-r from-forest/0 via-forest/30 to-forest/0"
              style={{
                maskImage:
                  "repeating-linear-gradient(90deg, black 0px, black 8px, transparent 8px, transparent 16px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(90deg, black 0px, black 8px, transparent 8px, transparent 16px)",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} group relative`}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Step number */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              <h3 className="heading-section text-xl mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
