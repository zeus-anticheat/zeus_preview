import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DocsSidebar from '../components/DocsSidebar';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { DOCS_UI_COPY, findDocsEntry, type LanguageCode } from '../content';

type DocsProps = {
  language: LanguageCode;
};

const Docs: React.FC<DocsProps> = ({ language }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const copy = DOCS_UI_COPY[language];
      const entry = findDocsEntry(location.pathname);

      if (!entry) {
        setContent(copy.notFoundMarkdown);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(entry.source[language]);
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
  }, [language, location.pathname]);

  return (
    <div className="flex-grow flex flex-col md:flex-row">
      <DocsSidebar language={language} />
      <main className="flex-grow p-6 md:p-10 max-w-4xl w-full">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-social-bg rounded w-1/2"></div>
            <div className="h-4 bg-social-bg rounded w-full"></div>
            <div className="h-4 bg-social-bg rounded w-3/4"></div>
          </div>
        ) : (
          <MarkdownRenderer content={content} />
        )}
      </main>
    </div>
  );
};

export default Docs;
