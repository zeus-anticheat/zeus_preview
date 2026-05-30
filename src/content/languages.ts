export type LanguageCode = "en" | "vi";

export type LanguageDefinition = {
  code: LanguageCode;
  label: string;
  accessibleLabel: string;
  nativeLabel: string;
};

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export const LANGUAGE_STORAGE_KEY = "zeus_preview_language";

export const LANGUAGES: LanguageDefinition[] = [
  {
    code: "en",
    label: "EN",
    accessibleLabel: "English",
    nativeLabel: "English",
  },
  {
    code: "vi",
    label: "VI",
    accessibleLabel: "Vietnamese",
    nativeLabel: "Tieng Viet",
  },
];

export const isLanguageCode = (value: string | null): value is LanguageCode =>
  value === "en" || value === "vi";
