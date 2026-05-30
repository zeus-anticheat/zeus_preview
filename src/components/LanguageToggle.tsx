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
      className="inline-flex h-10 shrink-0 items-center rounded-lg border border-card-border bg-white/5 p-1"
      role="group"
    >
      {LANGUAGES.map((entry) => {
        const active = entry.code === language;

        return (
          <button
            key={entry.code}
            type="button"
            aria-label={entry.accessibleLabel}
            aria-pressed={active}
            className={`h-8 w-10 rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-color ${
              active
                ? 'border border-accent/50 bg-accent/15 text-accent'
                : 'border border-transparent text-text-sec hover:text-text-main'
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
