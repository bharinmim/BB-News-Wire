import React from 'react';
import { Header } from './components/Header';
import { OperationalRibbon } from './components/OperationalRibbon';
import { EditorialLeadSection } from './components/EditorialLeadSection';
import { RegionalSection } from './components/RegionalSection';
import { LiveNewsWire } from './components/LiveNewsWire';
import { OutletDirectory } from './components/OutletDirectory';
import { ArticleModal } from './components/ArticleModal';
import { Footer } from './components/Footer';
import { OUTLETS } from './data/bangladeshOutlets';
import { INITIAL_NEWS_ARTICLES, WIRE_UPDATES_POOL } from './data/liveNewsFeed';
import { DivisionId, NewsArticle } from './types/news';
import { playChime } from './utils/audioAlert';
import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

const STORAGE_SAVED_KEY = 'bd_newswire_saved_outlets';
const STORAGE_LANG_KEY = 'bd_newswire_pref_lang';

export default function App() {
  // Language preference
  const [lang, setLang] = React.useState<'en' | 'bn'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      return saved === 'bn' ? 'bn' : 'en';
    } catch {
      return 'en';
    }
  });

  // Active navigation section
  const [activeNavSection, setActiveNavSection] = React.useState<string>('lead');

  // Selected Division for Regional Section
  const [selectedDivision, setSelectedDivision] = React.useState<DivisionId>('dhaka');

  // Category selection for directory
  const [directoryCategory, setDirectoryCategory] = React.useState<string>('all');

  // Saved/Bookmarked outlets
  const [savedOutletIds, setSavedOutletIds] = React.useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SAVED_KEY);
      return saved ? JSON.parse(saved) : ['prothom-alo', 'the-daily-star', 'dainik-azadi', 'the-business-standard'];
    } catch {
      return ['prothom-alo', 'the-daily-star', 'dainik-azadi'];
    }
  });

  // Sound chime toggle
  const [soundEnabled, setSoundEnabled] = React.useState<boolean>(true);

  // Live Wire Articles State
  const [articles, setArticles] = React.useState<NewsArticle[]>(INITIAL_NEWS_ARTICLES);
  const [wirePoolIndex, setWirePoolIndex] = React.useState<number>(0);

  // Auto-refresh countdown
  const [isAutoRefreshActive, setIsAutoRefreshActive] = React.useState<boolean>(true);
  const [secondsUntilNextRefresh, setSecondsUntilNextRefresh] = React.useState<number>(25);

  // Active Article in Reader Modal
  const [activeModalArticle, setActiveModalArticle] = React.useState<NewsArticle | null>(null);

  // Toast notification for new alert
  const [latestAlertToast, setLatestAlertToast] = React.useState<NewsArticle | null>(null);

  // Initial Firebase Analytics pageview
  React.useEffect(() => {
    if (analytics) {
      try {
        logEvent(analytics, 'page_view', {
          page_title: 'BD NewsWire Portal',
          page_location: window.location.href
        });
      } catch {
        // Safe fallback
      }
    }
  }, []);

  // Save language to localStorage
  const handleToggleLang = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'bn' : 'en';
      try {
        localStorage.setItem(STORAGE_LANG_KEY, next);
        if (analytics) {
          logEvent(analytics, 'select_content', {
            content_type: 'language',
            item_id: next
          });
        }
      } catch {
        // Safe fallback
      }
      return next;
    });
  };

  // Toggle bookmark for outlet
  const handleToggleSaveOutlet = (outletId: string) => {
    setSavedOutletIds((prev) => {
      const next = prev.includes(outletId)
        ? prev.filter((id) => id !== outletId)
        : [...prev, outletId];
      try {
        localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(next));
        if (analytics) {
          logEvent(analytics, 'select_content', {
            content_type: 'outlet_bookmark',
            item_id: outletId
          });
        }
      } catch {
        // Safe fallback
      }
      return next;
    });
  };

  const handleOpenArticle = (article: NewsArticle) => {
    setActiveModalArticle(article);
    if (analytics) {
      try {
        logEvent(analytics, 'select_content', {
          content_type: 'news_article',
          item_id: article.id
        });
      } catch {
        // Safe fallback
      }
    }
  };

  // Wire new story injection
  const injectNewWireStory = React.useCallback(() => {
    const poolStory = WIRE_UPDATES_POOL[wirePoolIndex % WIRE_UPDATES_POOL.length];
    const newStory: NewsArticle = {
      ...poolStory,
      id: `live-wire-${Date.now()}`,
      publishedAt: 'Just now'
    };

    setArticles((prev) => [newStory, ...prev]);
    setWirePoolIndex((prev) => prev + 1);

    if (soundEnabled) {
      playChime();
    }

    setLatestAlertToast(newStory);
    setTimeout(() => {
      setLatestAlertToast(null);
    }, 6000);
  }, [wirePoolIndex, soundEnabled]);

  // Countdown timer effect
  React.useEffect(() => {
    if (!isAutoRefreshActive) return;

    const interval = setInterval(() => {
      setSecondsUntilNextRefresh((prev) => {
        if (prev <= 1) {
          injectNewWireStory();
          return 28; // Reset countdown
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAutoRefreshActive, injectNewWireStory]);

  // Breaking news items for header ticker
  const breakingNews = React.useMemo(() => {
    return articles.filter((a) => a.isBreaking || a.category === 'national' || a.category === 'regional');
  }, [articles]);

  // Navigation click handler
  const handleSelectSection = (section: string) => {
    setActiveNavSection(section);
    if (section === 'lead') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'regional') {
      const el = document.getElementById('regional-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'live') {
      const el = document.getElementById('live-news-wire');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'directory' || section === 'saved') {
      const el = document.getElementById('directory-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col selection:bg-red-800 selection:text-white">
      {/* Top Header with 3-Zone Contract and Ticker */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        activeSection={activeNavSection}
        onSelectSection={handleSelectSection}
        savedCount={savedOutletIds.length}
        breakingNews={breakingNews}
        onOpenArticle={handleOpenArticle}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
      />

      {/* Operational Ribbon: Dhaka Time, Currency BDT Rates, DSE Index, Weather */}
      <OperationalRibbon
        lang={lang}
        outletCount={OUTLETS.length}
        liveUpdatesCount={articles.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Editorial Front Page Lead Stories (3-Tier Salience) */}
        <EditorialLeadSection
          lang={lang}
          articles={articles}
          onOpenArticle={handleOpenArticle}
          onExploreDivisions={() => handleSelectSection('regional')}
        />

        {/* Live News Wire: Real-Time Updates & Controls */}
        <LiveNewsWire
          lang={lang}
          articles={articles}
          isAutoRefreshActive={isAutoRefreshActive}
          onToggleAutoRefresh={() => setIsAutoRefreshActive((prev) => !prev)}
          secondsUntilNextRefresh={secondsUntilNextRefresh}
          onManualRefresh={() => {
            setSecondsUntilNextRefresh(28);
            injectNewWireStory();
          }}
          onSimulateIncomingWire={injectNewWireStory}
          onOpenArticle={handleOpenArticle}
        />

        {/* Regional Press Section: Categorized by All 8 Administrative Divisions */}
        <RegionalSection
          lang={lang}
          outlets={OUTLETS}
          articles={articles}
          selectedDivision={selectedDivision}
          onSelectDivision={setSelectedDivision}
          savedOutletIds={savedOutletIds}
          onToggleSaveOutlet={handleToggleSaveOutlet}
          onOpenArticle={handleOpenArticle}
        />

        {/* Full Media Outlet Directory (w3newspapers style) */}
        <OutletDirectory
          lang={lang}
          outlets={OUTLETS}
          savedOutletIds={savedOutletIds}
          onToggleSaveOutlet={handleToggleSaveOutlet}
          initialCategory={directoryCategory}
          showOnlySaved={activeNavSection === 'saved'}
          onClearSavedFilter={() => setActiveNavSection('directory')}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onSelectDivision={(divId) => {
          setSelectedDivision(divId);
          handleSelectSection('regional');
        }}
        onSelectCategory={(catId) => {
          setDirectoryCategory(catId);
          handleSelectSection('directory');
        }}
      />

      {/* Article Reading View Modal */}
      <ArticleModal
        article={activeModalArticle}
        onClose={() => setActiveModalArticle(null)}
        lang={lang}
      />

      {/* Floating Incoming Wire Toast Alert */}
      {latestAlertToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-40 bg-stone-900 text-white p-4 rounded-xl shadow-2xl border border-stone-700 max-w-sm flex items-start gap-3 animate-slide-up"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5 shrink-0 animate-ping" />
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase font-mono tracking-wider text-red-400 font-bold flex items-center justify-between">
              <span>{lang === 'bn' ? 'সরাসরি নতুন বুলেটিন' : 'NEW WIRE INCOMING'}</span>
              <span className="text-stone-400">{latestAlertToast.outletName}</span>
            </div>
            <p className="text-xs font-serif font-semibold mt-1 line-clamp-2 text-stone-100">
              {lang === 'bn' ? latestAlertToast.titleBn : latestAlertToast.title}
            </p>
            <button
              onClick={() => {
                setActiveModalArticle(latestAlertToast);
                setLatestAlertToast(null);
              }}
              className="mt-2 text-[11px] font-semibold text-red-300 hover:text-white underline cursor-pointer"
            >
              {lang === 'bn' ? 'বুলেটিনটি পড়ুন' : 'Read Dispatch'}
            </button>
          </div>
          <button
            onClick={() => setLatestAlertToast(null)}
            className="text-stone-400 hover:text-white text-xs p-1 cursor-pointer"
            aria-label="Dismiss toast"
          >
            ×
          </button>
        </aside>
      )}
    </div>
  );
}
