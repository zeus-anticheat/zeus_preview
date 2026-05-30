import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DocsSidebar from './DocsSidebar';
import MarkdownRenderer from './MarkdownRenderer';
import { DOCS_ENTRIES } from '../content/docs';

describe('Documentation Components', () => {
  describe('DocsSidebar', () => {
    it('renders English navigation links from the manifest', () => {
      render(
        <MemoryRouter>
          <DocsSidebar language="en" />
        </MemoryRouter>
      );
      expect(screen.getByText(DOCS_ENTRIES[1].label.en)).toBeInTheDocument();
      expect(screen.getByText(DOCS_ENTRIES[2].label.en)).toBeInTheDocument();
    });

    it('renders Vietnamese navigation labels from the manifest', () => {
      render(
        <MemoryRouter>
          <DocsSidebar language="vi" />
        </MemoryRouter>
      );
      expect(screen.getByText(DOCS_ENTRIES[1].label.vi)).toBeInTheDocument();
    });
  });

  describe('MarkdownRenderer', () => {
    it('renders markdown content', () => {
      const content = '# Test Heading\nThis is a **test**.';
      render(<MarkdownRenderer content={content} />);
      expect(screen.getByText('Test Heading')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
