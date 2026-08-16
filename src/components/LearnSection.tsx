"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const lessons = [
  {
    title: "Your first climbing session",
    image: "/images/climbing.jpg",
    metadata: "Beginner · 8 lessons · 45 min",
    description: "Everything you need to know before your first climb.",
  },
  {
    title: "Introduction to Surfing",
    image: "/images/surfing.jpg",
    metadata: "Beginner · 6 lessons · 60 min",
    description: "Paddling, popping up and catching your first wave.",
  },
  {
    title: "Paragliding Basics",
    image: "/images/paragliding.jpg",
    metadata: "Beginner · 4 lessons · 30 min",
    description: "Safety protocols, wing control and your first flight.",
  },
];

export function LearnSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-sand py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="text-meta text-sage mb-4">EXTREME 101</p>
          <h2 className="heading-section text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            Start with the basics.
            <br />
            Go further.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            UNBOUND contains beginner lessons created with instructors and
            businesses. You don&apos;t need to already be an expert to belong here.
          </p>
        </div>

        {/* Editorial Lesson Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {lessons.map((lesson, i) => (
            <div
              key={lesson.title}
              className={`reveal reveal-delay-${i + 1} group flex flex-col cursor-pointer`}
            >
              {/* Large Image */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Label */}
              <p className="text-[10px] text-sage font-bold tracking-[0.2em] uppercase mb-3">
                EXTREME 101
              </p>

              {/* Title */}
              <h3 className="font-semibold text-text-primary text-xl mb-3 group-hover:text-forest transition-colors">
                {lesson.title}
              </h3>

              {/* Metadata */}
              <p className="text-xs text-text-secondary font-medium tracking-wide mb-3">
                {lesson.metadata}
              </p>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                {lesson.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-sm font-semibold text-forest group-hover:text-sage transition-colors">
                Explore lesson <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
