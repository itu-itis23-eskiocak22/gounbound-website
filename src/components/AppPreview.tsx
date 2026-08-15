"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const screens = [
  {
    title: "Discover",
    content: (
      <div className="p-4 space-y-3">
        <div className="h-5 bg-forest/10 rounded-full w-3/4" />
        <div className="grid grid-cols-2 gap-2">
          {["⛰", "🏄", "🪂", "🏕"].map((e) => (
            <div key={e} className="aspect-square bg-sage/10 rounded-xl flex items-center justify-center text-2xl">
              {e}
            </div>
          ))}
        </div>
        <div className="h-3 bg-text-primary/5 rounded-full w-full" />
        <div className="h-3 bg-text-primary/5 rounded-full w-2/3" />
      </div>
    ),
  },
  {
    title: "Feed",
    content: (
      <div className="p-4 space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="bg-paper rounded-xl p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-forest/15" />
              <div className="h-2.5 bg-text-primary/10 rounded-full w-16" />
            </div>
            <div className="aspect-[16/9] bg-sage/10 rounded-lg" />
            <div className="h-2.5 bg-text-primary/5 rounded-full w-full" />
            <div className="h-2.5 bg-text-primary/5 rounded-full w-1/2" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Profile",
    content: (
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-forest to-sage" />
          <div className="space-y-1.5">
            <div className="h-3 bg-text-primary/10 rounded-full w-20" />
            <div className="h-2 bg-text-primary/5 rounded-full w-14" />
          </div>
        </div>
        <div className="flex gap-1.5 mb-4">
          {["⛰", "🏄", "🪂"].map((e) => (
            <div key={e} className="w-7 h-7 rounded-md bg-forest/8 flex items-center justify-center text-xs">
              {e}
            </div>
          ))}
        </div>
        <div className="text-[10px] text-text-tertiary font-medium tracking-wider uppercase mb-2">Bucket List</div>
        <div className="space-y-1.5">
          {[true, false, false].map((done, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span className={done ? "text-forest" : "text-text-tertiary"}>{done ? "✓" : "□"}</span>
              <div className={`h-2 rounded-full ${done ? "bg-forest/15 w-24" : "bg-text-primary/5 w-28"}`} />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function AppPreview() {
  const ref = useScrollReveal();

  return (
    <section className="bg-paper py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-meta text-sage mb-4">THE APP</p>
          <h2 className="heading-section text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            Everything in
            <br />
            your pocket.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            UNBOUND is designed as a mobile-first experience. Discover, learn,
            connect and share — all from one app.
          </p>
        </div>

        {/* Phone Mockups */}
        <div className="reveal reveal-delay-1 flex justify-center items-end gap-6 md:gap-10">
          {screens.map((screen, i) => (
            <div
              key={screen.title}
              className={`flex-shrink-0 transition-all duration-700 ${
                i === 1
                  ? "scale-100 z-10"
                  : "scale-90 opacity-80 hidden md:block"
              }`}
            >
              {/* Phone frame */}
              <div className="w-[220px] md:w-[260px] bg-text-primary rounded-[2.5rem] p-2.5 shadow-2xl">
                <div className="bg-surface-elevated rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-3 pb-1">
                    <span className="text-[9px] text-text-tertiary font-medium">
                      9:41
                    </span>
                    <div className="w-20 h-5 bg-text-primary rounded-full mx-auto" />
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 bg-text-tertiary/30 rounded-sm" />
                    </div>
                  </div>

                  {/* Screen Title */}
                  <div className="px-4 pt-2 pb-1">
                    <h4 className="font-bold text-text-primary text-sm">
                      {screen.title}
                    </h4>
                  </div>

                  {/* Screen Content */}
                  <div className="min-h-[340px]">{screen.content}</div>

                  {/* Bottom Nav */}
                  <div className="flex items-center justify-around px-4 py-3 border-t border-text-primary/6">
                    {["◆", "◇", "+", "♡", "●"].map((icon, j) => (
                      <div
                        key={j}
                        className={`w-6 h-6 flex items-center justify-center text-xs ${
                          (i === 0 && j === 0) ||
                          (i === 1 && j === 1) ||
                          (i === 2 && j === 4)
                            ? "text-forest"
                            : "text-text-tertiary"
                        }`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Label */}
              <p className="text-center text-text-tertiary text-xs mt-4 font-medium">
                {screen.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
