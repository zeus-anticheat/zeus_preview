import React from 'react';
import { NavLink } from 'react-router-dom';
import { DOCS_ENTRIES, DOCS_UI_COPY, type LanguageCode } from '../content';

type DocsSidebarProps = {
  language: LanguageCode;
};

const DocsSidebar: React.FC<DocsSidebarProps> = ({ language }) => {
  return (
    <aside className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-card-border h-auto md:h-[calc(100vh-80px)] md:sticky top-[80px] overflow-y-auto p-6 bg-bg-color">
      <h2 className="text-xs font-bold uppercase tracking-widest text-text-sec mb-6 break-words">{DOCS_UI_COPY[language].sidebarHeading}</h2>
      <nav className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-2 md:gap-0 md:space-y-1">
        {DOCS_ENTRIES.map((entry) => (
          <NavLink
            key={entry.path}
            to={entry.path}
            end={entry.path === '/docs'}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg text-sm font-medium transition-all break-words ${
                isActive
                  ? 'bg-accent/10 text-accent border-l-2 border-accent'
                  : 'text-text-sec hover:bg-white/5 hover:text-text-main'
              }`
            }
          >
            {entry.label[language]}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DocsSidebar;
