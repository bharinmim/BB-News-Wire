import React from 'react';
import { Radio, Bookmark, Globe2, Volume2, VolumeX } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface HeaderProps {
  lang: 'en' | 'bn';
  onToggleLang: () => void;
  activeSection: string;
  onSelectSection: (section: string) => void;
  savedCount: number;
  breakingNews: NewsArticle[];
  onOpenArticle: (article: NewsArticle) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  activeSection,
  onSelectSection,
  savedCount,
  breakingNews,
  onOpenArticle,
  soundEnabled,
  onToggleSound
}) => {
  const [currentBreakingIdx, setCurrentBreakingIdx] = React.useState(0);
  const [isTickerPaused, setIsTickerPaused] = React.useState(false);

  // Rotate breaking ticker every 6 seconds if not paused
  React.useEffect(() => {
    if (breakingNews.length === 0 || isTickerPaused) return;
    const interval = setInterval(() => {
      setCurrentBreakingIdx((prev) => (prev + 1) % breakingNews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [breakingNews.length, isTickerPaused]);

  const currentBreaking = breakingNews[currentBreakingIdx] || breakingNews[0];

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 single-line text links) — Zone 3 (1 primary action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => onSelectSection('lead')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-red-800 transition-colors whitespace-nowrap shrink-0">
              {lang === 'bn' ? 'সংবাদ পরিক্রমা' : 'BD NewsWire'}
            </span>
          </button>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700">
            <button
              onClick={() => onSelectSection('lead')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeSection === 'lead' ? 'text-red-800 font-semibold border-b-2 border-red-800 pb-0.5' : ''
              }`}
            >
              {lang === 'bn' ? 'প্রধান সংবাদ' : 'Editorial Lead'}
            </button>
            <button
              onClick={() => onSelectSection('regional')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeSection === 'regional' ? 'text-red-800 font-semibold border-b-2 border-red-800 pb-0.5' : ''
              }`}
            >
              {lang === 'bn' ? 'আঞ্চলিক ও বিভাগীয়' : 'Regional Divisions'}
            </button>
            <button
              onClick={() => onSelectSection('live')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'live' ? 'text-red-800 font-semibold border-b-2 border-red-800 pb-0.5' : ''
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-red-600" />
              <span>{lang === 'bn' ? 'লাইভ ওয়্যার' : 'Live Wire'}</span>
            </button>
            <button
              onClick={() => onSelectSection('directory')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeSection === 'directory' ? 'text-red-800 font-semibold border-b-2 border-red-800 pb-0.5' : ''
              }`}
            >
              {lang === 'bn' ? 'পত্রিকা ডিরেক্টরি' : 'All Media Outlets'}
            </button>
            <button
              onClick={() => onSelectSection('saved')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'saved' ? 'text-red-800 font-semibold border-b-2 border-red-800 pb-0.5' : ''
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'bn' ? 'সংরক্ষিত' : 'Saved'}</span>
              {savedCount > 0 && (
                <span className="text-xs font-mono font-semibold text-stone-600 tabular-nums">
                  ({savedCount})
                </span>
              )}
            </button>
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onToggleSound}
              title={soundEnabled ? 'Mute alert sounds' : 'Enable alert sounds'}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-md hover:bg-stone-200/60 transition-colors cursor-pointer"
              aria-label="Toggle sound alerts"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-stone-700" />
              ) : (
                <VolumeX className="w-4 h-4 text-stone-400" />
              )}
            </button>

            <button
              onClick={onToggleLang}
              className="px-3.5 py-1.5 text-xs font-medium text-stone-900 bg-stone-100 border border-stone-300 rounded-md hover:bg-stone-200 hover:border-stone-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <Globe2 className="w-3.5 h-3.5 text-stone-600" />
              <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Breaking News Wire Ticker Ribbon */}
      {currentBreaking && (
        <div 
          className="bg-stone-900 text-stone-100 text-xs py-2 px-4 border-t border-stone-800"
          onMouseEnter={() => setIsTickerPaused(true)}
          onMouseLeave={() => setIsTickerPaused(false)}
        >
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <span className="font-mono text-red-400 font-bold tracking-wider shrink-0 uppercase flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              {lang === 'bn' ? 'ব্রেকিং' : 'WIRE ALERT'}
            </span>
            <span className="text-stone-500 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-stone-400 font-serif hidden md:inline shrink-0">
              {currentBreaking.outletName}
            </span>
            <span className="text-stone-500 hidden md:inline" aria-hidden="true">·</span>
            
            <button
              onClick={() => onOpenArticle(currentBreaking)}
              className="truncate text-left hover:text-white transition-colors cursor-pointer text-stone-200 underline-offset-2 hover:underline flex-1"
            >
              {lang === 'bn' ? currentBreaking.titleBn : currentBreaking.title}
            </button>

            <span className="text-stone-400 font-mono text-[11px] shrink-0 tabular-nums">
              {currentBreaking.publishedAt}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
