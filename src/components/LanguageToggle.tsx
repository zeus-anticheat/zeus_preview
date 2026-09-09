import type { FC } from 'react';
import type { LanguageCode } from '../content/languages';
import { LANGUAGES } from '../content/languages';

type LanguageToggleProps = {
  language: LanguageCode;
  onChange: (language: LanguageCode) => void;
};

const LanguageToggle: FC<LanguageToggleProps> = ({ language, onChange }) => {
  return (
    <div
      aria-label="Change site language"
      className="inline-flex h-8 items-center rounded-full border border-card-border bg-white/[0.03] p-0.5 backdrop-blur-sm shadow-inner"
      role="group"
    >
      <div className="pl-2 pr-1 text-text-sec/60 text-xs select-none">
        <i className="fa-solid fa-globe"></i>
      </div>
      {LANGUAGES.map((entry) => {
        const active = entry.code === language;

        return (
          <button
            key={entry.code}
            type="button"
            aria-label={entry.accessibleLabel}
            aria-pressed={active}
            className={`h-6 px-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer select-none focus:outline-none ${
              active
                ? 'bg-accent/20 text-accent shadow-xs border border-accent/40'
                : 'text-text-sec hover:text-text-main hover:bg-white/5'
            }`}
            onClick={() => onChange(entry.code)}
          >
            {entry.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
