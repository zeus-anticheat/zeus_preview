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
      en: 'Adaptive Review',
      vi: 'Adaptive Review',
    },
  },
];

export const DOCS_UI_COPY: Record<
  LanguageCode,
  {
    sidebarHeading: string;
    notFoundMarkdown: string;
    errorMarkdown: string;
    previous: string;
    next: string;
    copyCode: string;
    copied: string;
    ecosystemTags: {
      rust: string;
      paper: string;
      fabric: string;
      folia: string;
    };
  }
> = {
  en: {
    sidebarHeading: 'Documentation',
    notFoundMarkdown: '# 404 - Page Not Found\nThe requested documentation page could not be found.',
    errorMarkdown: '# Error\nFailed to load documentation content.',
    previous: 'Previous',
    next: 'Next',
    copyCode: 'Copy',
    copied: 'Copied!',
    ecosystemTags: {
      rust: 'Rust Engine',
      paper: 'Paper / Spigot',
      fabric: 'Fabric Mod',
      folia: 'Folia Supported',
    },
  },
  vi: {
    sidebarHeading: 'Tài liệu',
    notFoundMarkdown: '# 404 - Không tìm thấy trang\nKhông tìm thấy trang tài liệu đã yêu cầu.',
    errorMarkdown: '# Lỗi\nKhông tải được nội dung tài liệu.',
    previous: 'Bài trước',
    next: 'Bài tiếp theo',
    copyCode: 'Sao chép',
    copied: 'Đã chép!',
    ecosystemTags: {
      rust: 'Rust Engine',
      paper: 'Paper / Spigot',
      fabric: 'Fabric Mod',
      folia: 'Hỗ trợ Folia',
    },
  },
};

export const findDocsEntry = (pathname: string): DocsEntry | undefined => {
  const normalizedPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  return DOCS_ENTRIES.find((entry) => entry.path === normalizedPath);
};
