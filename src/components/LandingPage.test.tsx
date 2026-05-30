import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';
import AudiencePaths from './AudiencePaths';
import Features from './Features';
import Architecture from './Architecture';
import OperationsConsole from './OperationsConsole';
import LanguageToggle from './LanguageToggle';
import { HOME_CONTENT } from '../content/home';

describe('Landing Page Components', () => {
  describe('English Content', () => {
    it('renders the Hero section', () => {
      render(<Hero content={HOME_CONTENT.en.hero} />);
      expect(screen.getByText(HOME_CONTENT.en.hero.badge)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.en.hero.body)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: HOME_CONTENT.en.hero.primaryCta })).toHaveAttribute('href', '#features');
      expect(screen.getByRole('link', { name: HOME_CONTENT.en.hero.secondaryCta })).toHaveAttribute('href', '/docs');
    });

    it('renders the Features section', () => {
      render(<Features content={HOME_CONTENT.en.features} />);
      expect(screen.getByText(HOME_CONTENT.en.features.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.en.features.cards[0].title)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.en.features.workflow.steps[0].title)).toBeInTheDocument();
    });

    it('renders the Audience Paths section', () => {
      render(<AudiencePaths content={HOME_CONTENT.en.audiences} />);
      expect(screen.getByText(HOME_CONTENT.en.audiences.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.en.audiences.cards[0].title)).toBeInTheDocument();
    });

    it('renders the Architecture section', () => {
      render(<Architecture content={HOME_CONTENT.en.protectionModes} />);
      expect(screen.getByText(HOME_CONTENT.en.protectionModes.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.en.protectionModes.modes[0].title)).toBeInTheDocument();
    });

    it('renders the Operations Console section', () => {
      render(<OperationsConsole content={HOME_CONTENT.en.operationsConsole} />);
      expect(screen.getByText(HOME_CONTENT.en.operationsConsole.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.en.operationsConsole.panels[0].title)).toBeInTheDocument();
    });
  });

  describe('Vietnamese Content', () => {
    it('renders the Hero section', () => {
      render(<Hero content={HOME_CONTENT.vi.hero} />);
      expect(screen.getByText(HOME_CONTENT.vi.hero.badge)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.vi.hero.body)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: HOME_CONTENT.vi.hero.primaryCta })).toHaveAttribute('href', '#features');
      expect(screen.getByRole('link', { name: HOME_CONTENT.vi.hero.secondaryCta })).toHaveAttribute('href', '/docs');
    });

    it('renders the Features section', () => {
      render(<Features content={HOME_CONTENT.vi.features} />);
      expect(screen.getByText(HOME_CONTENT.vi.features.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.vi.features.cards[0].title)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.vi.features.workflow.steps[0].title)).toBeInTheDocument();
    });

    it('renders the Audience Paths section', () => {
      render(<AudiencePaths content={HOME_CONTENT.vi.audiences} />);
      expect(screen.getByText(HOME_CONTENT.vi.audiences.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.vi.audiences.cards[0].title)).toBeInTheDocument();
    });

    it('renders the Architecture section', () => {
      render(<Architecture content={HOME_CONTENT.vi.protectionModes} />);
      expect(screen.getByText(HOME_CONTENT.vi.protectionModes.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.vi.protectionModes.modes[0].title)).toBeInTheDocument();
    });

    it('renders the Operations Console section', () => {
      render(<OperationsConsole content={HOME_CONTENT.vi.operationsConsole} />);
      expect(screen.getByText(HOME_CONTENT.vi.operationsConsole.heading)).toBeInTheDocument();
      expect(screen.getByText(HOME_CONTENT.vi.operationsConsole.panels[0].title)).toBeInTheDocument();
    });
  });

  it('renders the language toggle', () => {
    render(<LanguageToggle language="en" onChange={() => undefined} />);
    expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Vietnamese' })).toBeInTheDocument();
  });
});
