import React from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface EditorialLeadSectionProps {
  lang: 'en' | 'bn';
  articles: NewsArticle[];
  onOpenArticle: (article: NewsArticle) => void;
  onExploreDivisions: () => void;
}

export const EditorialLeadSection: React.FC<EditorialLeadSectionProps> = ({
  lang,
  articles,
  onOpenArticle,
  onExploreDivisions
}) => {
  if (articles.length === 0) return null;

  const leadStory = articles[0];
  const secondaryStories = articles.slice(1, 3);
  const sideFeedStories = articles.slice(3, 7);

  return (
    <section className="py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-300">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              {lang === 'bn' ? 'জাতীয় সংবাদ পরিক্রমা ও প্রধান প্রতিবেদন' : 'CURATED EDITORIAL LEAD · DESK DISPATCHES'}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-stone-900 mt-1">
              {lang === 'bn' ? 'বাংলাদেশ সংবাদ ও আঞ্চলিক বার্তা' : 'The Bangladesh Media Wire'}
            </h1>
          </div>
          <button
            onClick={onExploreDivisions}
            className="text-xs font-semibold text-stone-900 hover:text-red-800 transition-colors flex items-center gap-1 group self-start sm:self-auto cursor-pointer"
          >
            <span>{lang === 'bn' ? 'আঞ্চলিক ও বিভাগীয় সংবাদপত্র দেখুন' : 'Explore All 8 Regional Divisions'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3-Tier Salience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* TIER 1: Dominant Lead Story (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <article 
              onClick={() => onOpenArticle(leadStory)}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-stone-200 rounded-lg">
                <img
                  src={leadStory.imageUrl || '/src/assets/images/hero_dhaka_news_1791862232140.jpg'}
                  alt={leadStory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback container
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-stone-200">
                    <span className="font-semibold text-red-300 uppercase tracking-wider">{leadStory.outletName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {leadStory.division.toUpperCase()}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums font-mono">{leadStory.publishedAt}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 group-hover:text-red-800 transition-colors leading-tight">
                    {lang === 'bn' ? leadStory.titleBn : leadStory.title}
                  </h2>
                  <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {lang === 'bn' ? leadStory.summaryBn : leadStory.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-700">{leadStory.outletName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {leadStory.readTime}</span>
                  </div>
                  <span className="font-semibold text-stone-900 group-hover:text-red-800 transition-colors flex items-center gap-0.5">
                    {lang === 'bn' ? 'সম্পূর্ণ প্রতিবেদন' : 'Full Dispatch'}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* TIER 2 & TIER 3: Secondary Features & Side Dispatch Stream (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* TIER 2: Secondary Visual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {secondaryStories.map((story) => (
                <article
                  key={story.id}
                  onClick={() => onOpenArticle(story)}
                  className="group cursor-pointer flex gap-4 items-start pb-5 border-b border-stone-200 last:border-b-0"
                >
                  <div className="relative w-28 sm:w-32 aspect-[4/3] shrink-0 overflow-hidden bg-stone-200 rounded-md">
                    <img
                      src={story.imageUrl || '/src/assets/images/chittagong_maritime_hub_1791862233217.jpg'}
                      alt={story.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="font-medium text-red-800">{story.outletName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{story.publishedAt}</span>
                    </div>
                    <h3 className="mt-1 text-sm sm:text-base font-serif font-bold text-stone-900 group-hover:text-red-800 transition-colors leading-snug line-clamp-2">
                      {lang === 'bn' ? story.titleBn : story.title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {lang === 'bn' ? story.summaryBn : story.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* TIER 3: Department Fast Dispatch List */}
            <div className="bg-stone-100/70 p-4 rounded-lg border border-stone-200">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider">
                <span>{lang === 'bn' ? 'সাম্প্রতিক বুলেটিন' : 'FAST WIRE DISPATCHES'}</span>
                <span className="text-stone-400">· LIVE ·</span>
              </div>
              <div className="divide-y divide-stone-200">
                {sideFeedStories.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => onOpenArticle(story)}
                    className="w-full py-2.5 text-left group cursor-pointer flex flex-col gap-1 focus:outline-none"
                  >
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span className="font-medium text-stone-700">{story.outletName}</span>
                      <span className="font-mono tabular-nums">{story.publishedAt}</span>
                    </div>
                    <p className="text-xs font-serif font-semibold text-stone-900 group-hover:text-red-800 transition-colors leading-snug line-clamp-2">
                      {lang === 'bn' ? story.titleBn : story.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
