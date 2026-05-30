import type { LanguageCode } from './languages';

export type DocsEntry = {
  id: string;
  path: string;
  source: Record<LanguageCode, string>;
  label: Record<LanguageCode, string>;
};

export const DOCS_ENTRIES: DocsEntry[] = [
  {
    id: 'introduction',
    path: '/docs',
    source: {
      en: '/docs/introduction.md',
      vi: '/docs/vi/introduction.md',
    },
    label: {
      en: 'Introduction',
      vi: 'Giới thiệu',
    },
  },
  {
    id: 'uiInteraction',
    path: '/docs/ui-interaction',
    source: {
      en: '/docs/ui-interaction.md',
      vi: '/docs/vi/ui-interaction.md',
    },
    label: {
      en: 'UI Interaction',
      vi: 'Tương tác giao diện',
    },
  },
  {
    id: 'customFeatures',
    path: '/docs/custom-features',
    source: {
      en: '/docs/custom-features.md',
      vi: '/docs/vi/custom-features.md',
    },
    label: {
      en: 'Custom Features',
      vi: 'Tính năng tùy chỉnh',
    },
  },
  {
    id: 'configuration',
    path: '/docs/configuration',
    source: {
      en: '/docs/configuration.md',
      vi: '/docs/vi/configuration.md',
    },
    label: {
      en: 'Configuration',
      vi: 'Cấu hình',
    },
  },
  {
    id: 'modelManagement',
    path: '/docs/model-management',
    source: {
      en: '/docs/model-management.md',
      vi: '/docs/vi/model-management.md',
    },
    label: {
      en: 'Model Tuning',
      vi: 'Tinh chỉnh mô hình',
    },
  },
  {
    id: 'aiModelTypes',
    path: '/docs/ai-model-types',
    source: {
      en: '/docs/ai-model-types.md',
      vi: '/docs/vi/ai-model-types.md',
    },
    label: {
      en: 'AI Model Types',
      vi: 'Loại mô hình AI',
    },
  },
];

export const DOCS_UI_COPY: Record<
  LanguageCode,
  {
    sidebarHeading: string;
    notFoundMarkdown: string;
    errorMarkdown: string;
  }
> = {
  en: {
    sidebarHeading: 'Documentation',
    notFoundMarkdown: '# 404 - Page Not Found\nThe requested documentation page could not be found.',
    errorMarkdown: '# Error\nFailed to load documentation content.',
  },
  vi: {
    sidebarHeading: 'Tài liệu',
    notFoundMarkdown: '# 404 - Không tìm thấy trang\nKhông tìm thấy trang tài liệu đã yêu cầu.',
    errorMarkdown: '# Lỗi\nKhông tải được nội dung tài liệu.',
  },
};

export const findDocsEntry = (pathname: string): DocsEntry | undefined => {
  const normalizedPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  return DOCS_ENTRIES.find((entry) => entry.path === normalizedPath);
};
