import React from 'react';
import { TrendingUp, Clock, CloudSun, Radio } from 'lucide-react';

interface OperationalRibbonProps {
  lang: 'en' | 'bn';
  outletCount: number;
  liveUpdatesCount: number;
}

export const OperationalRibbon: React.FC<OperationalRibbonProps> = ({
  lang,
  outletCount,
  liveUpdatesCount
}) => {
  const [currentTime, setCurrentTime] = React.useState<string>('');

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Bangladesh Time (UTC+6)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US', options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <div className="bg-stone-100/90 border-b border-stone-200 text-stone-700 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        {/* Left: Live Clock & Date */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="flex items-center gap-1.5 font-medium text-stone-800">
            <Clock className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-mono tabular-nums">{currentTime || 'Dhaka Time (BST)'}</span>
          </span>
          <span className="text-stone-300" aria-hidden="true">|</span>
          <span className="text-stone-500 hidden sm:inline">
            {lang === 'bn' ? 'ঢাকা সময় (ইউটিসি+৬)' : 'Dhaka (UTC+6)'}
          </span>
        </div>

        {/* Center: Financial & Market Indicators */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 font-mono text-[11px] tabular-nums">
          <div className="flex items-center gap-1.5 text-stone-800">
            <TrendingUp className="w-3 h-3 text-emerald-600" />
            <span className="text-stone-500">DSEX:</span>
            <span className="font-semibold">5,420.30</span>
            <span className="text-emerald-700 font-semibold">+24.6 (0.45%)</span>
          </div>
          <span className="text-stone-300" aria-hidden="true">|</span>
          <div className="flex items-center gap-3 text-stone-600">
            <span>USD: <strong className="text-stone-900">৳121.50</strong></span>
            <span>EUR: <strong className="text-stone-900">৳131.80</strong></span>
            <span>GBP: <strong className="text-stone-900">৳156.40</strong></span>
            <span>SAR: <strong className="text-stone-900">৳32.40</strong></span>
          </div>
        </div>

        {/* Right: Regional Weather Snapshot & Media Index count */}
        <div className="flex items-center gap-3 shrink-0 text-stone-600">
          <div className="hidden md:flex items-center gap-1.5">
            <CloudSun className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'bn' ? 'ঢাকা ২৮°সে' : 'Dhaka 28°C'}</span>
            <span className="text-stone-300">·</span>
            <span>{lang === 'bn' ? 'চট্টগ্রাম ২৭°সে' : 'Ctg 27°C'}</span>
            <span className="text-stone-300">·</span>
            <span>{lang === 'bn' ? 'সিলেট ২৪°সে' : 'Sylhet 24°C'}</span>
          </div>

          <span className="text-stone-300 hidden md:inline" aria-hidden="true">|</span>

          <div className="flex items-center gap-1.5 font-medium text-stone-800">
            <Radio className="w-3 h-3 text-stone-500" />
            <span>
              {lang === 'bn' 
                ? `${outletCount}টি পত্রিকা ও পোর্টাল নিবন্ধিত`
                : `${outletCount} Indexed Outlets`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
