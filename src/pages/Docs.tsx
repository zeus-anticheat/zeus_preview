import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import DocsSidebar from '../components/DocsSidebar';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { DOCS_ENTRIES, DOCS_UI_COPY, findDocsEntry, type LanguageCode } from '../content';

type DocsProps = {
  language: LanguageCode;
};

const Docs: React.FC<DocsProps> = ({ language }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  const copy = DOCS_UI_COPY[language];
  const currentEntry = findDocsEntry(location.pathname);
  const currentIndex = currentEntry ? DOCS_ENTRIES.findIndex((e) => e.id === currentEntry.id) : -1;
  const prevEntry = currentIndex > 0 ? DOCS_ENTRIES[currentIndex - 1] : null;
  const nextEntry = currentIndex >= 0 && currentIndex < DOCS_ENTRIES.length - 1 ? DOCS_ENTRIES[currentIndex + 1] : null;

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

      if (!currentEntry) {
        setContent(copy.notFoundMarkdown);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(currentEntry.source[language]);
        const text = await response.text();
        
        // Prevent rendering the SPA index.html fallback as markdown
        if (response.ok && !text.trim().toLowerCase().startsWith('<!doctype html>')) {
          setContent(text);
        } else {
          setContent(copy.notFoundMarkdown);
        }
      } catch (error) {
        setContent(copy.errorMarkdown);
      }
      setLoading(false);
    };

    fetchContent();
  }, [language, location.pathname, currentEntry, copy.notFoundMarkdown, copy.errorMarkdown]);

  return (
    <div className="flex-grow flex flex-col md:flex-row">
      <DocsSidebar language={language} />
      <main className="flex-grow p-6 md:p-10 max-w-4xl w-full">
        {/* Breadcrumb & Ecosystem badges */}
        {currentEntry && (
          <header className="mb-8 pb-4 border-b border-card-border/60">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-text-sec">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-mono">
                <Link to="/docs" className="hover:text-accent transition-colors">
                  {copy.sidebarHeading}
                </Link>
                <span>/</span>
                <span className="text-text-main font-semibold">
                  {currentEntry.label[language]}
                </span>
              </nav>

              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent/10 text-accent border border-accent/20">
                  {copy.ecosystemTags.rust}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-text-sec border border-white/10">
                  {copy.ecosystemTags.paper}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-text-sec border border-white/10">
                  {copy.ecosystemTags.fabric}
                </span>
              </div>
            </div>
          </header>
        )}

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-social-bg rounded w-1/2"></div>
            <div className="h-4 bg-social-bg rounded w-full"></div>
            <div className="h-4 bg-social-bg rounded w-3/4"></div>
          </div>
        ) : (
          <>
            <MarkdownRenderer
              content={content}
              copyLabel={copy.copyCode}
              copiedLabel={copy.copied}
            />

            {/* Next / Previous article pagination */}
            {currentEntry && (prevEntry || nextEntry) && (
              <nav
                aria-label="Documentation Pagination"
                className="mt-12 pt-8 border-t border-card-border grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {prevEntry ? (
                  <Link
                    to={prevEntry.path}
                    className="p-4 rounded-lg border border-card-border bg-card-bg/40 hover:border-accent/40 hover:bg-card-bg transition-all group flex flex-col"
                  >
                    <span className="text-xs text-text-sec mb-1 font-mono flex items-center gap-1">
                      <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                      {copy.previous}
                    </span>
                    <span className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors">
                      {prevEntry.label[language]}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextEntry ? (
                  <Link
                    to={nextEntry.path}
                    className="p-4 rounded-lg border border-card-border bg-card-bg/40 hover:border-accent/40 hover:bg-card-bg transition-all group flex flex-col sm:items-end text-left sm:text-right"
                  >
                    <span className="text-xs text-text-sec mb-1 font-mono flex items-center gap-1 sm:justify-end">
                      {copy.next}
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </span>
                    <span className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors">
                      {nextEntry.label[language]}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Docs;
