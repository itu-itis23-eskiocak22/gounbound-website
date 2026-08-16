"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const screens = [
  {
    title: "Discover",
    content: (
      <div className="p-4 space-y-4 h-[400px] bg-sand">
        <div className="h-10 bg-white rounded-xl shadow-sm w-full flex items-center px-4 text-xs text-text-tertiary">
          Search activities...
        </div>
        
        {/* Categories */}
        <div className="flex gap-3 overflow-hidden">
          {["⛰", "🏄", "🪂", "🏕"].map((e) => (
            <div key={e} className="w-14 h-14 bg-white rounded-2xl flex flex-col items-center justify-center text-xl shadow-sm flex-shrink-0">
              {e}
            </div>
          ))}
        </div>

        {/* Explore Cards */}
        <div className="space-y-3 mt-4">
          <div className="h-4 w-24 bg-forest/20 rounded-md" />
          <div className="aspect-[16/9] bg-white rounded-xl shadow-sm overflow-hidden relative">
            <img src="/images/climbing.jpg" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <div className="h-3 w-20 bg-white/30 rounded-sm mb-1.5" />
              <div className="h-2 w-16 bg-white/20 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Activity",
    content: (
      <div className="p-4 space-y-4 h-[400px] bg-sand">
        <div className="aspect-square bg-white rounded-2xl shadow-sm p-4">
           <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center text-2xl mb-3 text-forest">⛰</div>
           <div className="h-4 w-28 bg-forest/20 rounded-md mb-2" />
           <div className="h-3 w-20 bg-text-tertiary/20 rounded-md mb-4" />
           <div className="flex gap-2">
             <div className="h-6 w-16 bg-sage/30 rounded-full" />
             <div className="h-6 w-16 bg-sage/30 rounded-full" />
           </div>
        </div>
        
        {/* Extreme 101 hint */}
        <div className="h-24 bg-white rounded-xl shadow-sm p-3 flex gap-3">
          <div className="w-16 h-16 bg-sage/10 rounded-lg flex-shrink-0" />
          <div className="space-y-2 flex-1 pt-1">
            <div className="h-2 w-10 bg-forest/30 rounded-sm" />
            <div className="h-3 w-full bg-text-tertiary/20 rounded-sm" />
            <div className="h-3 w-2/3 bg-text-tertiary/20 rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Report",
    content: (
      <div className="p-4 space-y-3 h-[400px] bg-sand relative">
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-forest/15" />
            <div>
              <div className="h-2.5 bg-forest/20 rounded-full w-20 mb-1" />
              <div className="h-2 bg-text-tertiary/20 rounded-full w-12" />
            </div>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden relative mb-3">
             <img src="/images/camping.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="h-3 bg-text-primary/10 rounded-full w-full mb-2" />
          <div className="h-3 bg-text-primary/10 rounded-full w-4/5" />
        </div>

        {/* Notification popup */}
        <div className="absolute top-6 left-2 right-2 bg-text-primary/95 text-white p-3 rounded-xl shadow-lg flex gap-3 items-center backdrop-blur-md animate-bounce-slow">
           <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center text-xs">SK</div>
           <div>
             <p className="text-[10px] font-bold">Sarah K. posted a new report</p>
             <p className="text-[9px] text-white/70 mt-0.5">Weekend in Kaçkarlar</p>
           </div>
        </div>
      </div>
    ),
  },
  {
    title: "Profile",
    content: (
      <div className="p-4 h-[400px] bg-sand">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest to-sage flex items-center justify-center text-white font-bold text-lg">DK</div>
          <div className="space-y-1.5">
            <div className="h-4 bg-forest/20 rounded-md w-24" />
            <div className="h-2.5 bg-text-tertiary/20 rounded-md w-16" />
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          {["⛰", "🏄", "🪂"].map((e) => (
            <div key={e} className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
              {e}
            </div>
          ))}
        </div>
        <div className="text-[10px] text-forest font-bold tracking-wider uppercase mb-3">Bucket List</div>
        <div className="space-y-2 bg-white p-3 rounded-xl shadow-sm">
          {[true, false, false].map((done, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span className={done ? "text-forest font-bold" : "text-text-tertiary"}>{done ? "✓" : "□"}</span>
              <div className={`h-2.5 rounded-full ${done ? "bg-forest/20 w-3/4" : "bg-text-tertiary/10 w-full"}`} />
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
        <div className="reveal reveal-delay-1 flex justify-center items-center h-[500px] md:h-[600px] relative mt-10 w-full overflow-hidden">
          {screens.map((screen, i) => {
            const isCenter = i === 0; // Discover is center
            // Positions: 0 = Center, 1 = Left, 2 = Right, 3 = Far Right
            
            let transformClass = "";
            let zIndexClass = "";
            
            if (i === 0) {
               // Discover (Center)
               transformClass = "scale-100 z-40 relative";
               zIndexClass = "z-40";
            } else if (i === 1) {
               // Activity (Left)
               transformClass = "scale-[0.85] -translate-x-[60%] md:-translate-x-[90%] rotate-[-4deg] opacity-70 z-30 absolute";
               zIndexClass = "z-30";
            } else if (i === 2) {
               // Report (Right)
               transformClass = "scale-[0.85] translate-x-[60%] md:translate-x-[90%] rotate-[4deg] opacity-90 z-20 absolute";
               zIndexClass = "z-20";
            } else if (i === 3) {
               // Profile (Far Right/Left hidden on mobile)
               transformClass = "hidden md:block scale-[0.75] translate-x-[160%] rotate-[8deg] opacity-40 z-10 absolute";
               zIndexClass = "z-10";
            }

            return (
            <div
              key={screen.title}
              className={`flex-shrink-0 transition-all duration-1000 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:z-50 hover:opacity-100 ${transformClass}`}
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
                  <div className="min-h-[380px] p-0">{screen.content}</div>

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

              <p className={`text-center text-text-tertiary text-xs mt-4 font-medium transition-opacity ${i === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                {screen.title}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
