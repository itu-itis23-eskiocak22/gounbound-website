"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stories = [
  {
    title: "Weekend escape to Kaçkarlar",
    location: "Kaçkarlar, Rize",
    date: "July 2026",
    author: "Deniz K.",
    excerpt:
      "Three days traversing the highland meadows above Ayder. We camped by glacial lakes and watched the clouds roll through the valleys below. The trail from Elevit was steeper than expected but the views made every step worth it.",
    image: "/images/camping.jpg",
    likes: 24,
    comments: 8,
  },
  {
    title: "First ascent at Geyikbayırı",
    location: "Geyikbayırı, Antalya",
    date: "June 2026",
    author: "Can M.",
    excerpt:
      "Finally made it to the legendary climbing walls of Geyikbayırı. Started on some 5a routes and worked up to a challenging 6a by the third day. The community at the campsite was incredibly welcoming.",
    image: "/images/climbing.jpg",
    likes: 31,
    comments: 12,
  },
];

const articles = [
  {
    title: "How to choose your first climbing shoes",
    category: "Gear Guide",
    readTime: "5 min read",
  },
  {
    title: "My first solo mountain trek",
    category: "Personal Story",
    readTime: "8 min read",
  },
  {
    title: "Cold weather camping: what you need to know",
    category: "Tips & Advice",
    readTime: "6 min read",
  },
];

const clubs = [
  { name: "İstanbul Outdoor Collective", members: "Climbing, Hiking", icon: "⛰" },
  { name: "Aegean Surf Community", members: "Surfing, Kayaking", icon: "🌊" },
  { name: "Kaçkar Mountaineering Club", members: "Mountaineering, Trekking", icon: "🏔" },
];

export function CommunitySection() {
  const ref = useScrollReveal();

  return (
    <section id="community" className="bg-paper py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="text-meta text-sage mb-4">COMMUNITY</p>
          <h2 className="heading-section text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            Real stories.
            <br />
            Real adventures.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            From first hikes to big milestones, our community shares experiences
            that inspire and push us all forward.
          </p>
        </div>

        {/* Activity Reports */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {stories.map((story, i) => (
            <div
              key={story.title}
              className={`reveal reveal-delay-${i + 1} group bg-surface-elevated rounded-2xl border border-text-primary/6 overflow-hidden card-hover`}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-xs font-bold text-forest">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {story.author}
                    </p>
                    <p className="text-xs text-text-tertiary">{story.date}</p>
                  </div>
                </div>

                <h3 className="font-semibold text-text-primary text-lg mb-1">
                  {story.title}
                </h3>
                <p className="text-sm text-text-secondary mb-1">
                  {story.location}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mt-3 line-clamp-3">
                  {story.excerpt}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-6 mt-5 pt-4 border-t border-text-primary/6">
                  <button className="flex items-center gap-1.5 text-text-secondary hover:text-forest transition-colors text-sm">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {story.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-text-secondary hover:text-forest transition-colors text-sm">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    {story.comments}
                  </button>
                  <button className="flex items-center gap-1.5 text-text-secondary hover:text-forest transition-colors text-sm ml-auto">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial / Blog Section */}
        <div className="reveal mb-20">
          <h3 className="heading-section text-2xl mb-8">Beyond the feed</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <div
                key={article.title}
                className={`reveal reveal-delay-${i + 1} group bg-surface-elevated rounded-2xl border border-text-primary/6 p-6 card-hover cursor-pointer`}
              >
                <p className="text-meta text-sage mb-3">{article.category}</p>
                <h4 className="font-semibold text-text-primary text-base mb-4 group-hover:text-forest transition-colors leading-snug">
                  {article.title}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-tertiary">
                    {article.readTime}
                  </span>
                  <svg className="w-4 h-4 text-text-tertiary group-hover:text-forest group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs & Groups */}
        <div className="reveal">
          <h3 className="heading-section text-2xl mb-8">Clubs & Groups</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {clubs.map((club, i) => (
              <div
                key={club.name}
                className={`reveal reveal-delay-${i + 1} flex items-center gap-4 bg-surface-elevated rounded-2xl border border-text-primary/6 p-5 card-hover cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-xl bg-forest/8 flex items-center justify-center text-xl flex-shrink-0">
                  {club.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">
                    {club.name}
                  </h4>
                  <p className="text-xs text-text-tertiary mt-0.5">
                    {club.members}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
