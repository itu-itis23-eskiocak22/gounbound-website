"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const hobbyContent = [
  { icon: "❓", label: "What is it?" },
  { icon: "🎯", label: "Is it beginner friendly?" },
  { icon: "📍", label: "Where can I start?" },
  { icon: "📖", label: "Beginner guide" },
  { icon: "🎓", label: "Extreme 101 lessons" },
  { icon: "🗺", label: "Places" },
  { icon: "👥", label: "Community experiences" },
  { icon: "📋", label: "Reports" },
  { icon: "🔗", label: "Related activities" },
];

const activities = [
  "Surfing",
  "Climbing",
  "Diving",
  "Paragliding",
  "Hiking",
  "Kayaking",
  "Camping",
  "Skiing",
];

export function HobbyScreen() {
  const ref = useScrollReveal();

  return (
    <section className="bg-sand py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="reveal">
            <p className="text-meta text-sage mb-4">HOBBY ECOSYSTEM</p>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem] mb-6">
              Every activity has
              <br />
              its own world.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              When you tap into an activity like Rock Climbing, UNBOUND takes you
              into a dedicated content ecosystem — everything you need to
              understand, learn, and experience it.
            </p>

            {/* Activity tags */}
            <div className="flex flex-wrap gap-2">
              {activities.map((activity) => (
                <span
                  key={activity}
                  className="px-4 py-2 rounded-full border border-text-primary/10 text-sm text-text-secondary hover:border-forest hover:text-forest hover:bg-forest/5 transition-all cursor-pointer"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>

          {/* App screen mockup */}
          <div className="reveal reveal-delay-2">
            <div className="bg-surface-elevated rounded-3xl border border-text-primary/8 shadow-xl overflow-hidden max-w-md mx-auto">
              {/* Screen header */}
              <div className="bg-forest p-6 pb-8">
                <p className="text-white/60 text-xs font-medium tracking-wider uppercase mb-2">
                  Activity
                </p>
                <h3 className="text-white text-2xl font-bold font-serif">
                  Rock Climbing
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  Outdoor · Sport · Adventure
                </p>
              </div>

              {/* Content list */}
              <div className="p-5 -mt-3">
                <div className="bg-paper rounded-2xl divide-y divide-text-primary/6">
                  {hobbyContent.map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 px-5 py-4 hover:bg-sand/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-text-primary text-sm font-medium flex-1">
                        {item.label}
                      </span>
                      <svg
                        className="w-4 h-4 text-text-tertiary group-hover:text-forest group-hover:translate-x-0.5 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
