"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stories = [
  {
    title: "Weekend escape to Kaçkarlar",
    location: "Kaçkarlar, Rize",
    date: "12 Aug 2026",
    author: "Deniz K.",
    excerpt:
      "Three days traversing the highland meadows above Ayder. We camped by glacial lakes and watched the clouds roll through the valleys below. The trail from Elevit was steeper than expected but the views made every step worth it.",
    learnings: "Pack lighter for the steep inclines. The glacial lakes are freezing, but a quick dip is worth the shock.",
    changes: "I'd bring better rain gear. The weather turns quickly at 3000m.",
    recommend: "Absolutely. One of the most untouched landscapes I've seen.",
    image: "/images/camping.jpg",
    likes: 24,
    comments: 8,
  },
  {
    title: "First ascent at Geyikbayırı",
    location: "Geyikbayırı, Antalya",
    date: "5 Jun 2026",
    author: "Can M.",
    excerpt:
      "Finally made it to the legendary climbing walls of Geyikbayırı. Started on some 5a routes and worked up to a challenging 6a by the third day.",
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
        <div className="mb-20">
          {/* Featured Report */}
          <div className="reveal group bg-surface-elevated rounded-3xl border border-text-primary/6 overflow-hidden mb-8">
            <div className="relative aspect-[21/9] md:aspect-[24/9] w-full overflow-hidden">
              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            <div className="p-8 md:p-12 md:max-w-4xl mx-auto">
              <h3 className="heading-display text-3xl md:text-4xl mb-2">{stories[0].title}</h3>
              <p className="text-text-secondary text-sm mb-8 font-medium tracking-wide uppercase">
                {stories[0].location} <span className="mx-2">·</span> {stories[0].date}
              </p>
              
              <div className="prose prose-lg text-text-secondary max-w-none">
                <p className="mb-8 text-lg">{stories[0].excerpt}</p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                  <div>
                    <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-3">What I learned</h4>
                    <p className="text-sm">{stories[0].learnings}</p>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-3">What I'd change</h4>
                    <p className="text-sm">{stories[0].changes}</p>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-3">Recommend it?</h4>
                    <p className="text-sm">{stories[0].recommend}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 mt-10 pt-6 border-t border-text-primary/6">
                <div className="flex items-center gap-3 mr-auto">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center font-bold text-forest">
                    {stories[0].author.charAt(0)}
                  </div>
                  <span className="font-medium text-text-primary text-sm">{stories[0].author}</span>
                </div>
                <button className="flex items-center gap-1.5 text-text-secondary hover:text-forest transition-colors text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                  {stories[0].likes}
                </button>
                <button className="flex items-center gap-1.5 text-text-secondary hover:text-forest transition-colors text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" /></svg>
                  {stories[0].comments}
                </button>
                <button className="flex items-center gap-1.5 text-text-secondary hover:text-forest transition-colors text-sm ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
                  Save
                </button>
              </div>
            </div>
          </div>
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
