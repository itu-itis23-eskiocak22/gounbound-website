"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const lessons = [
  {
    title: "Intro to Rock Climbing",
    activity: "Rock Climbing",
    level: "Beginner",
    duration: "4 weeks",
    lessonCount: 8,
    instructor: "With certified climbing instructors",
    icon: "⛰",
  },
  {
    title: "Surfing 101",
    activity: "Surfing",
    level: "Beginner",
    duration: "3 weeks",
    lessonCount: 6,
    instructor: "With local surf schools",
    icon: "🏄",
  },
  {
    title: "Kayak Basics",
    activity: "Kayaking",
    level: "Beginner",
    duration: "2 weeks",
    lessonCount: 5,
    instructor: "With kayaking professionals",
    icon: "🛶",
  },
  {
    title: "Beginner Mountaineering",
    activity: "Mountaineering",
    level: "Beginner",
    duration: "6 weeks",
    lessonCount: 12,
    instructor: "With mountain guides",
    icon: "🏔",
  },
  {
    title: "First Paragliding Experience",
    activity: "Paragliding",
    level: "Beginner",
    duration: "1 week",
    lessonCount: 3,
    instructor: "With certified pilots",
    icon: "🪂",
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

        {/* Lesson Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, i) => (
            <div
              key={lesson.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group bg-surface-elevated rounded-2xl border border-text-primary/6 p-6 card-hover cursor-pointer`}
            >
              {/* Icon + Activity */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-forest/8 flex items-center justify-center text-lg">
                  {lesson.icon}
                </div>
                <div>
                  <p className="text-xs text-text-tertiary font-medium tracking-wide uppercase">
                    {lesson.activity}
                  </p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-sage/10 text-sage font-medium">
                    {lesson.level}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-text-primary text-lg mb-4 group-hover:text-forest transition-colors">
                {lesson.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {lesson.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                  {lesson.lessonCount} lessons
                </span>
              </div>

              {/* Instructor */}
              <p className="text-xs text-text-tertiary">
                {lesson.instructor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
