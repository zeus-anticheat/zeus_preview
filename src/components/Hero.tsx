import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import MinecraftWarrior from './MinecraftWarrior';
import type { HomeContent } from '../content/home';

type HeroProps = {
  content: HomeContent['hero'];
  freeTrialBanner?: HomeContent['freeTrialBanner'];
};

const Hero: React.FC<HeroProps> = ({ content, freeTrialBanner }) => {
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#features';
    }
  };

  return (
    <section className="relative pt-32 pb-24 text-center overflow-hidden mc-pixel-bg">
      {/* Background radial gradient */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[500px] bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_60%)] -z-10 pointer-events-none"></div>

      {/* Floating Minecraft particles */}
      <div className="mc-particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
      <div className="mc-particle" style={{ top: '40%', left: '85%', animationDelay: '1.5s' }}></div>
      <div className="mc-particle" style={{ top: '60%', left: '25%', animationDelay: '3s' }}></div>
      <div className="mc-particle" style={{ top: '30%', left: '70%', animationDelay: '4.5s' }}></div>
      <div className="mc-particle" style={{ top: '70%', left: '50%', animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="relative max-w-4xl mx-auto">
          {/* Procedural 3D Vector Minecraft Warrior illustration */}
          <div className="hidden xl:block absolute -right-36 -bottom-16 w-80 pointer-events-none select-none opacity-90 z-0 transition-transform duration-700 hover:scale-105">
            <MinecraftWarrior size={320} className="w-full h-auto drop-shadow-[0_20px_40px_rgba(34,211,238,0.2)]" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(34,211,238,0.1)] text-accent px-5 py-2 rounded-[20px] text-[0.85rem] font-semibold mb-6 border border-[rgba(34,211,238,0.2)] backdrop-blur-sm break-words relative z-10">
            <MinecraftIcon type="shield" size={16} color="#22d3ee" />
            {content.badge}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white relative z-10">
            {content.titlePrefix} <span className="accent-gradient">{content.titleAccent}</span> <br />{content.titleSuffix}
          </h1>

          <p className="text-text-sec text-[1.1rem] md:text-[1.2rem] max-w-[650px] mx-auto mb-10 relative z-10">
            {content.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 relative z-10">
            <a
              href="#features"
              onClick={scrollToFeatures}
              className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-accent text-bg-color font-bold text-[0.95rem] hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(34,211,238,0.25)] hover:shadow-[0_6px_25px_rgba(34,211,238,0.35)] mc-btn-tactile"
            >
              <MinecraftIcon type="shield" size={16} color="#07090e" /> {content.primaryCta}
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-white/5 text-text-main border border-card-border backdrop-blur-sm font-semibold text-[0.95rem] hover:bg-white/10 hover:border-text-sec transition-all mc-btn-tactile"
            >
              <MinecraftIcon type="sword" size={16} color="#94a3b8" />
              {content.secondaryCta}
            </a>
          </div>

          {/* Free Trial Announcement Banner (Below CTAs) */}
          {freeTrialBanner && (
            <div className="max-w-xl mx-auto pt-2 relative z-10">
              <a
                href="https://discord.gg/4RR9Tuunuk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-card-border/80 hover:border-text-sec/40 transition-all text-xs text-text-sec hover:text-text-main group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70"></span>
                <span className="font-medium text-text-main">{freeTrialBanner.highlight}</span>
                <span className="text-text-sec hidden sm:inline">{freeTrialBanner.text}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-accent/90 group-hover:text-accent group-hover:underline">
                  {freeTrialBanner.cta} <i className="fa-solid fa-arrow-right text-[9px] group-hover:translate-x-0.5 transition-transform"></i>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
