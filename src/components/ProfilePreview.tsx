"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const activityIcons = [
  { icon: "⛰", label: "Climbing" },
  { icon: "🏄", label: "Surfing" },
  { icon: "🪂", label: "Paragliding" },
  { icon: "🏕", label: "Camping" },
];

const bucketList = [
  { text: "First dive in Kaş", completed: true, linked: true },
  { text: "Summit Hasan Dağı", completed: false },
  { text: "Paraglide in Fethiye", completed: false },
  { text: "Kayak the Dalyan river", completed: false },
  { text: "Camp under the stars in Cappadocia", completed: false },
];

const timelineEntry = {
  title: "Weekend escape to Kaçkarlar",
  location: "Kaçkarlar, Rize",
  date: "July 2026",
  excerpt:
    "Three days traversing the highland meadows above Ayder. We camped by glacial lakes and watched the clouds roll through the valleys below.",
};

export function ProfilePreview() {
  const ref = useScrollReveal();

  return (
    <section className="bg-sand py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text side */}
          <div className="reveal">
            <p className="text-meta text-sage mb-4">YOUR PROFILE</p>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem] mb-6">
              Your outdoor life,
              <br />
              your journal.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Your profile is your personal outdoor journal — not a conventional
              social media page. It reflects who you are, what you&apos;ve experienced,
              and what you dream of doing next.
            </p>

            <div className="space-y-4">
              {[
                "Activity icons link to hobby pages",
                "Bucket list with up to 10 goals",
                "Chronological timeline of experiences",
                "Saved content — reports, guides, and activities",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-forest mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-text-secondary text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile mockup */}
          <div className="reveal reveal-delay-2">
            <div className="bg-surface-elevated rounded-3xl border border-text-primary/8 shadow-xl overflow-hidden max-w-md mx-auto">
              {/* Profile Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest to-sage flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    DK
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-text-primary text-lg">
                      Deniz Kaya
                    </h3>
                    <p className="text-text-tertiary text-sm">@denizkaya</p>
                    <p className="text-text-secondary text-sm mt-1">
                      Mountains are my therapy. Always looking for the next summit.
                    </p>
                    <p className="text-text-tertiary text-xs mt-1">
                      📍 Istanbul, Turkey
                    </p>
                  </div>
                </div>

                {/* Activity Icons */}
                <div className="flex gap-2 mt-4">
                  {activityIcons.map((a) => (
                    <div
                      key={a.label}
                      className="w-9 h-9 rounded-lg bg-forest/8 flex items-center justify-center text-sm cursor-pointer hover:bg-forest/15 transition-colors"
                      title={a.label}
                    >
                      {a.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-6 my-5 h-px bg-text-primary/6" />

              {/* Bucket List */}
              <div className="px-6">
                <h4 className="text-meta text-text-tertiary mb-3">BUCKET LIST</h4>
                <div className="space-y-2.5">
                  {bucketList.map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 ${
                          item.completed ? "text-forest" : "text-text-tertiary"
                        }`}
                      >
                        {item.completed ? "✓" : "□"}
                      </span>
                      <div className="flex-1">
                        <span
                          className={`text-sm ${
                            item.completed
                              ? "text-text-primary"
                              : "text-text-secondary"
                          }`}
                        >
                          {item.text}
                        </span>
                        {item.completed && item.linked && (
                          <span className="text-xs text-forest ml-2 cursor-pointer hover:underline">
                            View experience →
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-6 my-5 h-px bg-text-primary/6" />

              {/* Timeline preview */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-meta text-text-tertiary">TIMELINE</h4>
                  <span className="text-xs text-forest cursor-pointer hover:underline">
                    🔖 Saved
                  </span>
                </div>
                <div className="bg-paper rounded-xl p-4">
                  <div className="aspect-[16/9] rounded-lg bg-sage/20 mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-sage/50 text-3xl">
                      🏕
                    </div>
                  </div>
                  <h5 className="font-semibold text-text-primary text-sm">
                    {timelineEntry.title}
                  </h5>
                  <p className="text-xs text-text-tertiary mt-0.5">
                    {timelineEntry.location} · {timelineEntry.date}
                  </p>
                  <p className="text-xs text-text-secondary mt-2 line-clamp-2">
                    {timelineEntry.excerpt}
                  </p>
                  <span className="text-xs text-forest mt-2 inline-block cursor-pointer hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
