import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  MapPin, 
  Calendar,
  Radio,
  FileText
} from 'lucide-react';
import { DivisionId, NewsArticle, Outlet } from '../types/news';
import { BANGLADESH_DIVISIONS } from '../data/bangladeshOutlets';

interface RegionalSectionProps {
  lang: 'en' | 'bn';
  outlets: Outlet[];
  articles: NewsArticle[];
  selectedDivision: DivisionId;
  onSelectDivision: (divId: DivisionId) => void;
  savedOutletIds: string[];
  onToggleSaveOutlet: (outletId: string) => void;
  onOpenArticle: (article: NewsArticle) => void;
}

export const RegionalSection: React.FC<RegionalSectionProps> = ({
  lang,
  outlets,
  articles,
  selectedDivision,
  onSelectDivision,
  savedOutletIds,
  onToggleSaveOutlet,
  onOpenArticle
}) => {
  const [selectedDistrict, setSelectedDistrict] = React.useState<string>('all');

  const currentDivisionInfo = BANGLADESH_DIVISIONS.find((d) => d.id === selectedDivision) || BANGLADESH_DIVISIONS[0];

  // Reset district filter when division changes
  React.useEffect(() => {
    setSelectedDistrict('all');
  }, [selectedDivision]);

  // Outlets in this division
  const divisionOutlets = React.useMemo(() => {
    return outlets.filter((o) => {
      if (o.division !== selectedDivision) return false;
      if (selectedDistrict !== 'all' && o.district !== selectedDistrict) return false;
      return true;
    });
  }, [outlets, selectedDivision, selectedDistrict]);

  // Articles from this division
  const divisionArticles = React.useMemo(() => {
    return articles.filter((a) => a.division === selectedDivision);
  }, [articles, selectedDivision]);

  return (
    <section id="regional-section" className="py-12 bg-stone-50/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-mono">
            {lang === 'bn' ? 'বিভাগভিত্তিক সংবাদ মাধ্যম পরিক্রমা' : 'REGIONAL PRESS DIRECTORY · 8 ADMINISTRATIVE DIVISIONS'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            {lang === 'bn' ? 'আঞ্চলিক ও বিভাগীয় সংবাদপত্র' : 'Regional & Divisional Media Portals'}
          </h2>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            {lang === 'bn'
              ? 'চট্টগ্রামের প্রাচীন আজাদী থেকে শুরু করে সিলেটের ডাক ও খুলনার পূর্বাঞ্চল—সারাদেশের স্থানীয় সংবাদ সংস্থা ও বিভাগীয় সংবাদপত্রের সর্ববৃহৎ তথ্যকোষ।'
              : 'From Chattogram’s historic Dainik Azadi to Sylhet’s Dak and Khulna’s Purbanchal—explore local news outlets, provincial press, and grassroots dispatches.'}
          </p>
        </div>

        {/* Division Selector Tab Rail */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {BANGLADESH_DIVISIONS.map((division) => {
            const isActive = division.id === selectedDivision;
            const outletCountInDiv = outlets.filter((o) => o.division === division.id).length;

            return (
              <button
                key={division.id}
                onClick={() => onSelectDivision(division.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100 hover:text-stone-950'
                }`}
              >
                <span>{lang === 'bn' ? division.nameBn : division.name}</span>
                <span
                  className={`text-[11px] font-mono tabular-nums px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {outletCountInDiv}
                </span>
              </button>
            );
          })}
        </div>

        {/* Division Spotlight Card */}
        <div className="mt-6 bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Header / Banner */}
            <div className="lg:col-span-5 relative h-56 sm:h-64 lg:h-auto min-h-[220px] bg-stone-200">
              <img
                src={currentDivisionInfo.imageUrl || '/src/assets/images/hero_dhaka_news_1791862232140.jpg'}
                alt={currentDivisionInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-stone-300 font-mono">
                  {lang === 'bn' ? 'বিভাগীয় সদর দপ্তর' : 'DIVISIONAL HEADQUARTERS'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                  {lang === 'bn' ? currentDivisionInfo.nameBn : currentDivisionInfo.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-stone-200 mt-2 font-mono">
                  <span>HQ: {lang === 'bn' ? currentDivisionInfo.headquartersBn : currentDivisionInfo.headquarters}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentDivisionInfo.districtsCount} {lang === 'bn' ? 'টি জেলা' : 'Districts'}</span>
                </div>
              </div>
            </div>

            {/* Division Metadata & Focus Summary */}
            <div className="lg:col-span-7 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-stone-500 mb-1">
                  {lang === 'bn' ? 'আঞ্চলিক প্রেক্ষাপট ও অর্থনৈতিক প্রভাব' : 'REGIONAL PROFILE & STRATEGIC FOCUS'}
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {lang === 'bn' ? currentDivisionInfo.regionalFocusBn : currentDivisionInfo.regionalFocus}
                </p>

                {/* District Filter Selector */}
                <div className="mt-5 pt-4 border-t border-stone-200">
                  <div className="text-xs font-medium text-stone-600 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{lang === 'bn' ? 'জেলা অনুযায়ী ফিল্টার করুন:' : 'Filter by District:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setSelectedDistrict('all')}
                      className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                        selectedDistrict === 'all'
                          ? 'bg-red-800 text-white font-medium'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {lang === 'bn' ? 'সকল জেলা' : 'All Districts'}
                    </button>
                    {currentDivisionInfo.prominentDistricts.map((dist, idx) => {
                      const isDistActive = selectedDistrict === dist;
                      const distBn = currentDivisionInfo.prominentDistrictsBn[idx] || dist;
                      return (
                        <button
                          key={dist}
                          onClick={() => setSelectedDistrict(dist)}
                          className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                            isDistActive
                              ? 'bg-red-800 text-white font-medium'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          {lang === 'bn' ? distBn : dist}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Regional Live Dispatch Highlights (if available) */}
              {divisionArticles.length > 0 && (
                <div className="mt-5 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-800 uppercase tracking-wider mb-2">
                    <Radio className="w-3 h-3 text-red-600" />
                    <span>{lang === 'bn' ? 'এই বিভাগের সর্বশেষ বুলেটিন:' : 'LATEST WIRE DISPATCHES FROM THIS DIVISION:'}</span>
                  </div>
                  <div className="space-y-1.5">
                    {divisionArticles.slice(0, 2).map((art) => (
                      <button
                        key={art.id}
                        onClick={() => onOpenArticle(art)}
                        className="w-full text-left text-xs text-stone-800 hover:text-red-800 transition-colors flex items-center justify-between gap-2 py-1 px-2 rounded hover:bg-stone-100 cursor-pointer"
                      >
                        <span className="truncate font-medium">
                          {lang === 'bn' ? art.titleBn : art.title}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400 shrink-0 tabular-nums">
                          {art.publishedAt}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Division Outlets Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-stone-600" />
              <span>
                {lang === 'bn' 
                  ? `${currentDivisionInfo.nameBn}র সংবাদপত্র ও পোর্টাল (${divisionOutlets.length})` 
                  : `${currentDivisionInfo.name} News Outlets (${divisionOutlets.length})`}
              </span>
            </h4>
          </div>

          {divisionOutlets.length === 0 ? (
            <div className="bg-white p-8 rounded-lg border border-stone-200 text-center text-stone-500 text-sm">
              {lang === 'bn' 
                ? 'এই জেলায় বর্তমানে কোনো নথিভুক্ত পত্রিকা নেই।' 
                : 'No registered outlets found for this specific district filter.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {divisionOutlets.map((outlet) => {
                const isSaved = savedOutletIds.includes(outlet.id);

                return (
                  <div
                    key={outlet.id}
                    className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition-shadow group relative"
                  >
                    <div>
                      {/* Top Bar on Card: Format & Save button */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="text-xs text-stone-500 font-mono">
                          <span>{outlet.format}</span>
                          <span aria-hidden="true" className="mx-1.5">·</span>
                          <span className="text-stone-700 font-semibold">{outlet.district}</span>
                        </div>
                        <button
                          onClick={() => onToggleSaveOutlet(outlet.id)}
                          className="text-stone-400 hover:text-red-700 transition-colors p-1 cursor-pointer"
                          title={isSaved ? 'Remove from saved' : 'Save outlet to personal rack'}
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
                      <h5 className="text-lg font-serif font-bold text-stone-900 group-hover:text-red-800 transition-colors leading-snug">
                        {outlet.name}
                      </h5>
                      <div className="text-xs text-stone-500 font-medium mt-0.5">
                        {outlet.nameBn}
                      </div>

                      {/* Editorial Description */}
                      <p className="mt-3 text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {lang === 'bn' ? outlet.descriptionBn : outlet.description}
                      </p>
                    </div>

                    {/* Metadata & Actions */}
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-stone-500 text-[11px] font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-stone-400" />
                          <span>Est. {outlet.foundedYear}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{outlet.circulationTier}</span>
                      </div>

                      <a
                        href={outlet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-stone-900 hover:text-red-800 transition-colors group/link"
                      >
                        <span>{lang === 'bn' ? 'ওয়েবসাইটে যান' : 'Visit Portal'}</span>
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
