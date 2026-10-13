import React from 'react';
import { Newspaper, Globe, ShieldCheck, Heart } from 'lucide-react';
import { BANGLADESH_DIVISIONS } from '../data/bangladeshOutlets';
import { DivisionId } from '../types/news';

interface FooterProps {
  lang: 'en' | 'bn';
  onSelectDivision: (divId: DivisionId) => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onSelectDivision,
  onSelectCategory
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Editorial Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                {lang === 'bn' ? 'বাংলাদেশ সংবাদ পরিক্রমা' : 'BD NewsWire'}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {lang === 'bn'
                ? 'w3newspapers আদলে বাংলাদেশের সর্ববৃহৎ জাতীয় ও বিভাগীয় সংবাদপত্র ডিরেক্টরি। ৮টি প্রশাসনিক বিভাগ ও তৃণমূল সাংবাদিকদের সরাসরি সংবাদ প্রবাহ।'
                : 'A dedicated directory and real-time newsportal inspired by w3newspapers.com/bangladesh/, indexing newspapers, TV broadcasters, and provincial newsrooms across all 8 administrative divisions.'}
            </p>
            <div className="pt-2 text-[11px] font-mono text-stone-500">
              <span>DHAKA · CHATTAGRAM · SYLHET · RAJSHAHI · KHULNA · BARISHAL · RANGPUR · MYMENSINGH</span>
            </div>
          </div>

          {/* Divisions Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-200">
              {lang === 'bn' ? 'আঞ্চলিক বিভাগসমূহ' : 'REGIONAL DIVISIONS'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {BANGLADESH_DIVISIONS.map((div) => (
                <button
                  key={div.id}
                  onClick={() => onSelectDivision(div.id)}
                  className="text-left text-stone-400 hover:text-white transition-colors cursor-pointer py-1 truncate"
                >
                  {lang === 'bn' ? div.nameBn : div.name}
                </button>
              ))}
            </div>
          </div>

          {/* Media Categories Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-200">
              {lang === 'bn' ? 'সংবাদ বিভাগসমূহ' : 'MEDIA CATEGORIES'}
            </h4>
            <div className="space-y-1.5 text-xs">
              {[
                { id: 'national-daily', label: lang === 'bn' ? 'জাতীয় বাংলা দৈনিক' : 'National Bengali Dailies' },
                { id: 'english-daily', label: lang === 'bn' ? 'ইংরেজি দৈনিক সংবাদপত্র' : 'English Daily Broadsheets' },
                { id: 'regional', label: lang === 'bn' ? 'বিভাগীয় ও জেলা সংবাদপত্র' : 'Regional & Provincial Press' },
                { id: 'tv-channel', label: lang === 'bn' ? '২৪ ঘণ্টার সংবাদ টিভি চ্যানেল' : '24/7 TV News Channels' },
                { id: 'business', label: lang === 'bn' ? 'বাণিজ্য ও অর্থনীতি পত্রিকা' : 'Financial & Business Press' },
                { id: 'online-portal', label: lang === 'bn' ? 'অনলাইন নিউজ পোর্টাল ও এজেন্সি' : 'Digital Portals & Wire Agencies' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className="block text-left text-stone-400 hover:text-white transition-colors cursor-pointer py-0.5"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & Credit Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            © {new Date().getFullYear()} Bangladesh News Directory & Live Portal. All external media logos and article copyrights belong to their respective publishers.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>w3newspapers Format</span>
            <span aria-hidden="true">·</span>
            <span>Unbiased Index</span>
            <span aria-hidden="true">·</span>
            <span>Real-Time Sync</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
