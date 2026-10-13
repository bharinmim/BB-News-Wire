import React from 'react';
import { 
  X, 
  ExternalLink, 
  Share2, 
  Clock, 
  MapPin, 
  Check, 
  Type, 
  Building2,
  Globe2
} from 'lucide-react';
import { NewsArticle } from '../types/news';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  lang: 'en' | 'bn';
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  lang: globalLang
}) => {
  const [localLang, setLocalLang] = React.useState<'en' | 'bn'>(globalLang);
  const [textSize, setTextSize] = React.useState<'sm' | 'base' | 'lg'>('base');
  const [copied, setCopied] = React.useState(false);

  // Sync localLang when modal opens
  React.useEffect(() => {
    if (article) {
      setLocalLang(globalLang);
      setCopied(false);
    }
  }, [article, globalLang]);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(article.sourceUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentTitle = localLang === 'bn' ? article.titleBn : article.title;
  const currentSummary = localLang === 'bn' ? article.summaryBn : article.summary;
  const currentContent = localLang === 'bn' ? article.contentBn : article.content;

  // Split content into paragraphs
  const paragraphs = currentContent.split('\n\n').filter((p) => p.trim().length > 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-[#faf9f6] w-full max-w-3xl rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Utility Bar */}
        <div className="sticky top-0 z-10 bg-[#faf9f6]/95 backdrop-blur-md px-6 py-3.5 border-b border-stone-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-600 truncate">
            <span className="font-semibold text-red-900">{article.outletName}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{article.division} Dispatch</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.publishedAt}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Dual Language Toggle for this Article */}
            <button
              onClick={() => setLocalLang((prev) => (prev === 'en' ? 'bn' : 'en'))}
              className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded border border-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Toggle article language"
            >
              <Globe2 className="w-3 h-3 text-stone-500" />
              <span>{localLang === 'en' ? 'বাংলা সংস্করণ' : 'English'}</span>
            </button>

            {/* Font size control */}
            <div className="flex items-center border border-stone-300 rounded bg-stone-100 p-0.5 text-xs text-stone-700">
              <button
                onClick={() => setTextSize('sm')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${textSize === 'sm' ? 'bg-white shadow-xs font-bold text-stone-900' : 'hover:text-stone-900'}`}
                title="Smaller text"
              >
                A-
              </button>
              <button
                onClick={() => setTextSize('base')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${textSize === 'base' ? 'bg-white shadow-xs font-bold text-stone-900' : 'hover:text-stone-900'}`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => setTextSize('lg')}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${textSize === 'lg' ? 'bg-white shadow-xs font-bold text-stone-900' : 'hover:text-stone-900'}`}
                title="Larger text"
              >
                A+
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-2">
              <span className="uppercase text-red-800 font-semibold">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {article.district ? `${article.district}, ` : ''}{article.division.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {currentTitle}
            </h2>

            <p className="mt-4 text-base sm:text-lg font-serif italic text-stone-700 leading-relaxed border-l-2 border-stone-300 pl-4 py-1">
              {currentSummary}
            </p>
          </div>

          {/* Visual Asset (if provided) */}
          {article.imageUrl && (
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-stone-200 border border-stone-200">
              <img
                src={article.imageUrl}
                alt={currentTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="p-2 text-[11px] font-mono text-stone-500 bg-stone-100 border-t border-stone-200 text-right">
                Editorial Dispatch Archive · Bangladesh NewsWire
              </div>
            </div>
          )}

          {/* Story Narrative Text */}
          <div className={`space-y-4 text-stone-800 leading-relaxed ${
            textSize === 'sm' ? 'text-sm' : textSize === 'lg' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
          }`}>
            {paragraphs.map((para, i) => (
              <p 
                key={i}
                className={i === 0 ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-stone-900' : ''}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Source Attribution & Trust Box */}
          <div className="mt-8 pt-6 border-t border-stone-200 bg-stone-100/80 p-5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white rounded-md border border-stone-200 text-stone-800">
                <Building2 className="w-5 h-5 text-red-800" />
              </div>
              <div>
                <div className="text-xs text-stone-500 font-mono">ORIGINAL PUBLISHER SOURCE</div>
                <div className="text-sm font-serif font-bold text-stone-900">{article.outletName}</div>
                <div className="text-[11px] text-stone-500">{article.sourceUrl}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-stone-500" />}
                <span>{copied ? (localLang === 'bn' ? 'কপি হয়েছে' : 'Copied Link') : (localLang === 'bn' ? 'শেয়ার' : 'Share Link')}</span>
              </button>

              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-medium text-white bg-red-800 hover:bg-red-900 rounded transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>{localLang === 'bn' ? 'মূল ওয়েবসাইটে যান' : 'Open Source'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
