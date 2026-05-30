import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';
import { PUBLIC_CONTENT_GUARDRAILS } from '../content/disclosure';
import { HOME_CONTENT } from '../content/home';

// Forbidden terms matching the specific concepts in Phase 3 Context
const FORBIDDEN_TERMS = [
  ...PUBLIC_CONTENT_GUARDRAILS.internalOnlyTopics,
  'EWC',
  'RRFS',
  'Isolation Forest',
  'Thinking Steps',
  '/api/public/violations',
  '67+',
  '100% accurate',
  'no bypasses possible',
  'perfect detection',
  'unbeatable',
  'flawless'
];

describe('Content Guardrails', () => {
  const docsDir = path.join(__dirname, '../../public/docs');

  const getAllMarkdownFiles = (dir: string): string[] => {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getAllMarkdownFiles(fullPath));
      } else if (file.endsWith('.md')) {
        results.push(fullPath);
      }
    });
    return results;
  };

  const files = getAllMarkdownFiles(docsDir);

  it('scans all documentation files', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  files.forEach(filePath => {
    const relativePath = path.relative(docsDir, filePath);
    it(`should not contain forbidden terms in ${relativePath}`, () => {
      const content = fs.readFileSync(filePath, 'utf-8').toLowerCase();

      FORBIDDEN_TERMS.forEach(term => {
        const lowerTerm = term.toLowerCase();
        const containsForbidden = content.includes(lowerTerm);
        expect(containsForbidden, `File ${relativePath} contains forbidden term: ${term}`).toBe(false);
      });
    });
  });

  it('should not contain forbidden terms in home content (en)', () => {
    const content = JSON.stringify(HOME_CONTENT.en).toLowerCase();

    FORBIDDEN_TERMS.forEach(term => {
      const lowerTerm = term.toLowerCase();
      const containsForbidden = content.includes(lowerTerm);
      expect(containsForbidden, `Home content (en) contains forbidden term: ${term}`).toBe(false);
    });
  });

  it('should not contain forbidden terms in home content (vi)', () => {
    const content = JSON.stringify(HOME_CONTENT.vi).toLowerCase();

    FORBIDDEN_TERMS.forEach(term => {
      const lowerTerm = term.toLowerCase();
      const containsForbidden = content.includes(lowerTerm);
      expect(containsForbidden, `Home content (vi) contains forbidden term: ${term}`).toBe(false);
    });
  });
});
