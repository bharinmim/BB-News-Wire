import React from 'react';
import { 
  Radio, 
  RotateCw, 
  Pause, 
  Play, 
  Sparkles, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Filter
} from 'lucide-react';
import { DivisionId, NewsArticle } from '../types/news';

interface LiveNewsWireProps {
  lang: 'en' | 'bn';
  articles: NewsArticle[];
  isAutoRefreshActive: boolean;
  onToggleAutoRefresh: () => void;
  secondsUntilNextRefresh: number;
  onManualRefresh: () => void;
  onSimulateIncomingWire: () => void;
  onOpenArticle: (article: NewsArticle) => void;
}

export const LiveNewsWire: React.FC<LiveNewsWireProps> = ({
  lang,
  articles,
  isAutoRefreshActive,
  onToggleAutoRefresh,
  secondsUntilNextRefresh,
  onManualRefresh,
  onSimulateIncomingWire,
  onOpenArticle
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedDivisionFilter, setSelectedDivisionFilter] = React.useState<string>('all');

  const filteredArticles = React.useMemo(() => {
    return articles.filter((art) => {
      if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
      if (selectedDivisionFilter !== 'all' && art.division !== selectedDivisionFilter) return false;
      return true;
    });
  }, [articles, selectedCategory, selectedDivisionFilter]);

  return (
    <section id="live-news-wire" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Live Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-800 font-mono font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
              </span>
              <span>{lang === 'bn' ? 'সরাসরি সংবাদ প্রবাহ' : 'REAL-TIME WIRE · LIVE SYNC'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
              {lang === 'bn' ? 'তাৎক্ষণিক বুলেটিন ও সংবাদ আপডেট' : 'Live Bangladesh Wire Feed'}
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-2xl">
              {lang === 'bn'
                ? 'জাতীয়, অর্থনৈতিক, খেলাধুলা ও ৮ বিভাগের সকল আঞ্চলিক প্রতিবেদকের সরাসরি সংবাদ আপডেট স্বয়ংক্রিয়ভাবে সিঙ্ক হচ্ছে।'
                : 'Automated real-time wire monitoring continuous news dispatches across national dailies, business desks, and regional correspondents.'}
            </p>
          </div>

          {/* Interactive Live Controls Bar */}
          <div className="flex flex-wrap items-center gap-3 bg-stone-100 p-2 rounded-lg border border-stone-200 shrink-0">
            {/* Auto-refresh timer status */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded border border-stone-200 text-xs text-stone-700 font-mono tabular-nums">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>
                {isAutoRefreshActive 
                  ? `${lang === 'bn' ? 'পরবর্তী আপডেট' : 'Sync in'}: ${secondsUntilNextRefresh}s`
                  : (lang === 'bn' ? 'বিরতিপ্রাপ্ত' : 'Paused')}
              </span>
            </div>

            {/* Toggle Pause / Resume */}
            <button
              onClick={onToggleAutoRefresh}
              className="p-2 text-stone-600 hover:text-stone-900 bg-white rounded border border-stone-200 hover:bg-stone-50 transition-colors cursor-pointer"
              title={isAutoRefreshActive ? 'Pause auto-sync' : 'Resume auto-sync'}
              aria-label="Pause or resume auto sync"
            >
              {isAutoRefreshActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-green-600" />}
            </button>

            {/* Manual Refresh Button */}
            <button
              onClick={onManualRefresh}
              className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-white rounded border border-stone-200 hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Fetch latest updates now"
            >
              <RotateCw className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'bn' ? 'রিফ্রেশ' : 'Refresh'}</span>
            </button>

            {/* Simulate Incoming Wire Bulletin Button */}
            <button
              onClick={onSimulateIncomingWire}
              className="px-3 py-1.5 text-xs font-medium text-white bg-red-800 hover:bg-red-900 rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Test real-time alert trigger"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'bn' ? 'নতুন বুলেটিন যোগ করুন' : 'Simulate Wire Alert'}</span>
            </button>
          </div>
        </div>

        {/* Filters Rail: Topic Categories & Divisions */}
        <div className="pt-6 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: lang === 'bn' ? 'সকল বিভাগ' : 'All Topics' },
              { id: 'national', label: lang === 'bn' ? 'জাতীয়' : 'National' },
              { id: 'regional', label: lang === 'bn' ? 'আঞ্চলিক' : 'Regional' },
              { id: 'business', label: lang === 'bn' ? 'বাণিজ্য ও অর্থনীতি' : 'Business' },
              { id: 'sports', label: lang === 'bn' ? 'খেলাধুলা' : 'Sports' },
              { id: 'weather', label: lang === 'bn' ? 'আবহাওয়া' : 'Weather' },
              { id: 'technology', label: lang === 'bn' ? 'প্রযুক্তি' : 'Technology' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Division Filter Dropdown */}
          <div className="flex items-center gap-2 text-xs text-stone-600 self-start md:self-auto shrink-0">
            <Filter className="w-3.5 h-3.5 text-stone-400" />
            <span>{lang === 'bn' ? 'বিভাগ ফিল্টার:' : 'Filter by Division:'}</span>
            <select
              value={selectedDivisionFilter}
              onChange={(e) => setSelectedDivisionFilter(e.target.value)}
              className="bg-stone-100 border border-stone-200 rounded px-2.5 py-1 text-xs text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer"
            >
              <option value="all">{lang === 'bn' ? 'সকল ৮ বিভাগ' : 'All 8 Divisions'}</option>
              <option value="dhaka">{lang === 'bn' ? 'ঢাকা' : 'Dhaka'}</option>
              <option value="chittagong">{lang === 'bn' ? 'চট্টগ্রাম' : 'Chittagong'}</option>
              <option value="sylhet">{lang === 'bn' ? 'সিলেট' : 'Sylhet'}</option>
              <option value="rajshahi">{lang === 'bn' ? 'রাজশাহী' : 'Rajshahi'}</option>
              <option value="khulna">{lang === 'bn' ? 'খুলনা' : 'Khulna'}</option>
              <option value="barisal">{lang === 'bn' ? 'বরিশাল' : 'Barisal'}</option>
              <option value="rangpur">{lang === 'bn' ? 'রংপুর' : 'Rangpur'}</option>
              <option value="mymensingh">{lang === 'bn' ? 'ময়মনসিংহ' : 'Mymensingh'}</option>
            </select>
          </div>
        </div>

        {/* Live Wire Dispatches Timeline List */}
        <div className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-stone-500 text-sm">
              {lang === 'bn' ? 'নির্বাচিত ফিল্টারে কোনো সংবাদ পাওয়া যায়নি।' : 'No dispatches match the selected filter criteria.'}
            </div>
          ) : (
            filteredArticles.map((art) => {
              const isBreaking = art.isBreaking;

              return (
                <article
                  key={art.id}
                  onClick={() => onOpenArticle(art)}
                  className="py-5 flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:bg-stone-50/80 -mx-4 px-4 transition-colors rounded group cursor-pointer"
                >
                  {/* Left Column: Metadata & Source */}
                  <div className="md:w-56 shrink-0 flex flex-row md:flex-col items-center md:items-start justify-between gap-1 text-xs text-stone-500">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-stone-900 font-bold tabular-nums">
                        {art.publishedAt}
                      </span>
                      {isBreaking && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold text-red-700 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-600 mt-0.5">
                      <span className="font-semibold text-stone-800">{art.outletName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{art.division}</span>
                    </div>
                  </div>

                  {/* Center Column: Headline & Summary */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-red-800 transition-colors leading-snug">
                      {lang === 'bn' ? art.titleBn : art.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                      {lang === 'bn' ? art.summaryBn : art.summary}
                    </p>
                  </div>

                  {/* Right Column: Read Trigger */}
                  <div className="shrink-0 flex items-center md:justify-end gap-3 text-xs text-stone-500">
                    <span className="hidden sm:inline font-mono tabular-nums">{art.readTime}</span>
                    <span className="font-medium text-stone-800 group-hover:text-red-800 transition-colors flex items-center gap-1">
                      <span>{lang === 'bn' ? 'পড়ুন' : 'Read'}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
