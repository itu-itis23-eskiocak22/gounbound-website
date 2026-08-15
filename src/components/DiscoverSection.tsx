"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const categories = [
  { label: "All", icon: "◆" },
  { label: "Water", icon: "〰" },
  { label: "Air", icon: "↗" },
  { label: "Mountain", icon: "△" },
  { label: "Land", icon: "◇" },
  { label: "Winter", icon: "❄" },
];

const experiences = [
  {
    title: "Rock Climbing",
    location: "Geyikbayırı, Antalya",
    image: "/images/climbing.jpg",
    difficulty: "Intermediate",
    category: "Mountain",
  },
  {
    title: "Paragliding",
    location: "Babadağ, Fethiye",
    image: "/images/paragliding.jpg",
    difficulty: "Beginner Friendly",
    category: "Air",
  },
  {
    title: "Surfing",
    location: "Alaçatı, İzmir",
    image: "/images/surfing.jpg",
    difficulty: "Beginner Friendly",
    category: "Water",
  },
  {
    title: "Camping",
    location: "Kaçkarlar, Rize",
    image: "/images/camping.jpg",
    difficulty: "All Levels",
    category: "Land",
  },
];

const mapPins = [
  { x: 72, y: 58, label: "Rock Climbing", icon: "⛰" },
  { x: 55, y: 72, label: "Paragliding", icon: "🪂" },
  { x: 35, y: 65, label: "Surfing", icon: "🏄" },
  { x: 82, y: 35, label: "Camping", icon: "⛺" },
  { x: 45, y: 40, label: "Kayaking", icon: "🛶" },
  { x: 65, y: 45, label: "Diving", icon: "🤿" },
];

export function DiscoverSection() {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <section id="features" className="bg-paper py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="text-meta text-sage mb-4">DISCOVER</p>
          <h2 className="heading-section text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            Find experiences
            <br />
            that move you.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            From mountains to oceans, discover places, lessons and experiences
            that inspire your next adventure.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="reveal reveal-delay-1 mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search activities, places or keywords"
                className="w-full pl-12 pr-5 py-4 bg-surface-elevated rounded-2xl border border-text-primary/8 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10 transition-all"
                aria-label="Search activities, places or keywords"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.label
                    ? "bg-forest text-white"
                    : "bg-surface-elevated text-text-secondary hover:text-forest border border-text-primary/8"
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map + Cards Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="reveal reveal-delay-2 lg:col-span-3 bg-surface-elevated rounded-3xl border border-text-primary/8 overflow-hidden relative min-h-[400px] md:min-h-[500px]">
            {/* Topographic SVG Map */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full absolute inset-0"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Terrain background */}
              <rect width="100" height="100" fill="#E8E4D8" />

              {/* Topographic contour lines */}
              <g stroke="#C5C0B3" strokeWidth="0.3" fill="none" opacity="0.5">
                <ellipse cx="50" cy="50" rx="40" ry="35" />
                <ellipse cx="50" cy="50" rx="35" ry="30" />
                <ellipse cx="50" cy="50" rx="28" ry="24" />
                <ellipse cx="50" cy="50" rx="20" ry="17" />
                <ellipse cx="30" cy="30" rx="15" ry="12" />
                <ellipse cx="30" cy="30" rx="10" ry="8" />
                <ellipse cx="70" cy="65" rx="18" ry="14" />
                <ellipse cx="70" cy="65" rx="12" ry="9" />
                <ellipse cx="70" cy="65" rx="6" ry="4" />
              </g>

              {/* Water features */}
              <g fill="#B8C9A8" opacity="0.3">
                <path d="M 10 70 Q 20 68 30 72 Q 40 76 50 73 Q 55 71 50 75 Q 40 80 30 78 Q 20 76 10 75 Z" />
                <path d="M 60 20 Q 65 18 70 22 Q 75 25 72 28 Q 68 25 62 24 Z" />
              </g>

              {/* Grid lines */}
              <g stroke="#C5C0B3" strokeWidth="0.15" opacity="0.3">
                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v) => (
                  <g key={v}>
                    <line x1={v} y1="0" x2={v} y2="100" />
                    <line x1="0" y1={v} x2="100" y2={v} />
                  </g>
                ))}
              </g>
            </svg>

            {/* Interactive Pins */}
            {mapPins.map((pin) => (
              <div
                key={pin.label}
                className="absolute transition-all duration-300 cursor-pointer group"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                onMouseEnter={() => setHoveredPin(pin.label)}
                onMouseLeave={() => setHoveredPin(null)}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-md transition-all duration-300 ${
                    hoveredPin === pin.label
                      ? "bg-forest text-white scale-125 shadow-lg"
                      : "bg-surface-elevated text-forest border border-forest/20"
                  }`}
                >
                  {pin.icon}
                </div>
                {/* Tooltip */}
                <div
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-forest text-white text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                    hoveredPin === pin.label
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1 pointer-events-none"
                  }`}
                >
                  {pin.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-forest" />
                </div>
              </div>
            ))}

            {/* View Full Map CTA */}
            <div className="absolute bottom-5 right-5">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-forest text-white text-sm font-medium rounded-xl hover:bg-forest-light transition-all shadow-md">
                View full map
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="lg:col-span-2 space-y-5">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`reveal reveal-delay-${i + 1} group bg-surface-elevated rounded-2xl border border-text-primary/6 overflow-hidden card-hover cursor-pointer`}
              >
                <div className="flex gap-4 p-3">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="120px"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <h4 className="font-semibold text-text-primary text-base mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-text-secondary text-sm mb-2">
                      {exp.location}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-sage/10 text-sage font-medium">
                        {exp.difficulty}
                      </span>
                    </div>
                  </div>
                  {/* Bookmark */}
                  <button
                    className="ml-auto self-start mt-2 text-text-tertiary hover:text-forest transition-colors"
                    aria-label={`Save ${exp.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
