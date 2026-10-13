import React from 'react';
import { 
  Search, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Filter, 
  Radio, 
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { DivisionId, Outlet, OutletCategory } from '../types/news';
import { BANGLADESH_DIVISIONS } from '../data/bangladeshOutlets';

interface OutletDirectoryProps {
  lang: 'en' | 'bn';
  outlets: Outlet[];
  savedOutletIds: string[];
  onToggleSaveOutlet: (outletId: string) => void;
  initialCategory?: string;
  showOnlySaved?: boolean;
  onClearSavedFilter?: () => void;
}

export const OutletDirectory: React.FC<OutletDirectoryProps> = ({
  lang,
  outlets,
  savedOutletIds,
  onToggleSaveOutlet,
  initialCategory = 'all',
  showOnlySaved = false,
  onClearSavedFilter
}) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory);
  const [selectedDivision, setSelectedDivision] = React.useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('all');

  // Update selectedCategory if prop changes
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: lang === 'bn' ? 'সকল মাধ্যম' : 'All Media' },
    { id: 'national-daily', label: lang === 'bn' ? 'জাতীয় বাংলা দৈনিক' : 'National Bengali' },
    { id: 'english-daily', label: lang === 'bn' ? 'ইংরেজি দৈনিক' : 'English Dailies' },
    { id: 'regional', label: lang === 'bn' ? 'বিভাগীয় ও আঞ্চলিক' : 'Regional Press' },
    { id: 'tv-channel', label: lang === 'bn' ? 'টেলিভিশন চ্যানেল' : 'TV & Broadcast' },
    { id: 'business', label: lang === 'bn' ? 'বাণিজ্য ও অর্থনীতি' : 'Business Press' },
    { id: 'online-portal', label: lang === 'bn' ? 'অনলাইন ও সংবাদ সংস্থা' : 'Digital Portals' },
    { id: 'magazine', label: lang === 'bn' ? 'ম্যাগাজিন ও খেলাধুলা' : 'Magazines & Sports' },
  ];

  const filteredOutlets = React.useMemo(() => {
    return outlets.filter((outlet) => {
      // Saved filter
      if (showOnlySaved && !savedOutletIds.includes(outlet.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && outlet.category !== selectedCategory) {
        return false;
      }

      // Division filter
      if (selectedDivision !== 'all' && outlet.division !== selectedDivision) {
        return false;
      }

      // Language filter
      if (selectedLanguage !== 'all' && outlet.language !== selectedLanguage) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = outlet.name.toLowerCase().includes(q);
        const matchesBnName = outlet.nameBn.includes(q);
        const matchesDistrict = outlet.district.toLowerCase().includes(q) || outlet.districtBn.includes(q);
        const matchesDesc = outlet.description.toLowerCase().includes(q) || outlet.descriptionBn.includes(q);
        if (!matchesName && !matchesBnName && !matchesDistrict && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [outlets, showOnlySaved, savedOutletIds, selectedCategory, selectedDivision, selectedLanguage, searchQuery]);

  return (
    <section id="directory-section" className="py-12 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-mono">
              {lang === 'bn' ? 'বাংলাদেশ সংবাদপত্র ও গণমাধ্যম তালিকা' : 'W3NEWSPAPERS BANGLADESH EDITION · ARCHIVE'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
              {showOnlySaved 
                ? (lang === 'bn' ? 'আপনার সংরক্ষিত সংবাদপত্র' : 'Your Bookmarked Newspapers')
                : (lang === 'bn' ? 'জাতীয় ও আঞ্চলিক সংবাদপত্র ডিরেক্টরি' : 'Comprehensive Newspapers Directory')}
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-2xl">
              {lang === 'bn'
                ? 'মুদ্রিত জাতীয় দৈনিক, বিভাগীয় স্থানীয় কাগজ, টিভি চ্যানেল এবং অনলাইন পোর্টালের পূর্ণাঙ্গ তালিকা ও সরাসরি লিংক।'
                : 'Complete catalog of Bangladesh print broadsheets, provincial newspapers across 8 divisions, broadcast channels, and verified digital portals.'}
            </p>
          </div>

          {showOnlySaved && onClearSavedFilter && (
            <button
              onClick={onClearSavedFilter}
              className="text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded px-3 py-1.5 hover:bg-stone-100 transition-colors cursor-pointer self-start md:self-auto"
            >
              {lang === 'bn' ? 'সব সংবাদপত্র দেখুন' : 'Show All Media Outlets'}
            </button>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 bg-white p-4 rounded-xl border border-stone-200 shadow-xs space-y-4">
          {/* Row 1: Search & Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'bn' ? 'পত্রিকা, জেলা বা শহরের নাম দিয়ে খুঁজুন...' : 'Search by outlet name, district, or keywords...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:bg-white transition-all"
              />
            </div>

            {/* Division Filter */}
            <div className="lg:col-span-4 flex items-center gap-2">
              <label htmlFor="outlet-division-select" className="text-xs text-stone-500 shrink-0 hidden sm:inline">
                {lang === 'bn' ? 'বিভাগ:' : 'Division:'}
              </label>
              <select
                id="outlet-division-select"
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer"
              >
                <option value="all">{lang === 'bn' ? 'সকল ৮টি বিভাগ' : 'All 8 Divisions'}</option>
                {BANGLADESH_DIVISIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {lang === 'bn' ? d.nameBn : d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Filter */}
            <div className="lg:col-span-3 flex items-center gap-2">
              <label htmlFor="outlet-language-select" className="text-xs text-stone-500 shrink-0 hidden sm:inline">
                {lang === 'bn' ? 'ভাষা:' : 'Language:'}
              </label>
              <select
                id="outlet-language-select"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400 cursor-pointer"
              >
                <option value="all">{lang === 'bn' ? 'সকল ভাষা' : 'All Languages'}</option>
                <option value="bn">{lang === 'bn' ? 'বাংলা (Bengali)' : 'Bengali (বাংলা)'}</option>
                <option value="en">{lang === 'bn' ? 'ইংরেজি (English)' : 'English'}</option>
                <option value="bilingual">{lang === 'bn' ? 'দ্বিভাষিক (Bilingual)' : 'Bilingual'}</option>
              </select>
            </div>
          </div>

          {/* Row 2: Category Segmented Tabs */}
          {!showOnlySaved && (
            <div className="pt-2 border-t border-stone-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Directory Results Header */}
        <div className="mt-6 flex items-center justify-between text-xs text-stone-500 font-mono">
          <span>
            {lang === 'bn' 
              ? `${filteredOutlets.length}টি গণমাধ্যম পাওয়া গেছে` 
              : `Showing ${filteredOutlets.length} media outlets`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-stone-700 hover:text-stone-900 underline cursor-pointer"
            >
              {lang === 'bn' ? 'অনুসন্ধান মুছুন' : 'Clear search'}
            </button>
          )}
        </div>

        {/* Outlets Grid */}
        <div className="mt-4">
          {filteredOutlets.length === 0 ? (
            <div className="bg-white p-12 rounded-xl border border-stone-200 text-center">
              <Layers className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="text-stone-600 font-medium text-sm">
                {lang === 'bn' ? 'কোনো সংবাদপত্র খুঁজে পাওয়া যায়নি।' : 'No media outlets match your search or filter parameters.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDivision('all');
                  setSelectedLanguage('all');
                }}
                className="mt-3 text-xs text-red-800 font-semibold hover:underline cursor-pointer"
              >
                {lang === 'bn' ? 'সকল ফিল্টার রিসেট করুন' : 'Reset all filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredOutlets.map((outlet) => {
                const isSaved = savedOutletIds.includes(outlet.id);

                return (
                  <div
                    key={outlet.id}
                    className="bg-white border border-stone-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-sm transition-shadow group relative"
                  >
                    <div>
                      {/* Top Bar on Card: Format & Bookmark */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="text-[11px] text-stone-500 font-mono">
                          <span className="font-semibold text-stone-700">{outlet.format}</span>
                          <span aria-hidden="true" className="mx-1">·</span>
                          <span className="capitalize">{outlet.division}</span>
                        </div>
                        <button
                          onClick={() => onToggleSaveOutlet(outlet.id)}
                          className="text-stone-400 hover:text-red-700 transition-colors p-0.5 cursor-pointer"
                          title={isSaved ? 'Remove from saved' : 'Save to my rack'}
                          aria-label="Bookmark outlet"
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-4 h-4 text-red-700" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Title Lockup */}
                      <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-red-800 transition-colors leading-snug">
                        {outlet.name}
                      </h4>
                      <div className="text-xs text-stone-500 font-medium mt-0.5">
                        {outlet.nameBn}
                      </div>

                      {/* Description */}
                      <p className="mt-2.5 text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {lang === 'bn' ? outlet.descriptionBn : outlet.description}
                      </p>
                    </div>

                    {/* Card Footer: Metadata & Direct Link */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <div className="text-[11px] font-mono text-stone-500">
                        <span>Est. {outlet.foundedYear}</span>
                        <span aria-hidden="true" className="mx-1">·</span>
                        <span>{outlet.language.toUpperCase()}</span>
                      </div>

                      <a
                        href={outlet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-red-800 transition-colors group/link"
                      >
                        <span>{lang === 'bn' ? 'ভিজিট' : 'Visit'}</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
