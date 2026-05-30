import React from 'react';
import Hero from '../components/Hero';
import AudiencePaths from '../components/AudiencePaths';
import Features from '../components/Features';
import Architecture from '../components/Architecture';
import OperationsConsole from '../components/OperationsConsole';
import { HOME_CONTENT, type LanguageCode } from '../content';

type HomeProps = {
  language: LanguageCode;
};

const Home: React.FC<HomeProps> = ({ language }) => {
  const content = HOME_CONTENT[language];

  return (
    <main>
      <Hero content={content.hero} />
      <AudiencePaths content={content.audiences} />
      
      {/* Pixel divider */}
      <div className="pixel-divider"></div>

      <Features content={content.features} />

      {/* Pixel divider */}
      <div className="pixel-divider"></div>

      <Architecture content={content.protectionModes} />
      <OperationsConsole content={content.operationsConsole} />
    </main>
  );
};

export default Home;
