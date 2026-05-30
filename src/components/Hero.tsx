import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type HeroProps = {
  content: HomeContent['hero'];
};

const Hero: React.FC<HeroProps> = ({ content }) => {
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
        {/* Minecraft-style badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(34,211,238,0.1)] text-accent px-5 py-2 rounded-[20px] text-[0.85rem] font-semibold mb-8 border border-[rgba(34,211,238,0.2)] backdrop-blur-sm break-words">
          <MinecraftIcon type="diamond" size={16} color="#22d3ee" />
          {content.badge}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
          {content.titlePrefix} <span className="accent-gradient">{content.titleAccent}</span> <br />{content.titleSuffix}
        </h1>

        <p className="text-text-sec text-[1.1rem] md:text-[1.2rem] max-w-[650px] mx-auto mb-12">
          {content.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#features" className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-accent text-bg-color font-bold text-[0.95rem] hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(34,211,238,0.25)] hover:shadow-[0_6px_25px_rgba(34,211,238,0.35)]">
            <MinecraftIcon type="shield" size={16} color="#07090e" /> {content.primaryCta}
          </a>
          <a href="/docs" className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-white/5 text-text-main border border-card-border backdrop-blur-sm font-semibold text-[0.95rem] hover:bg-white/10 hover:border-text-sec transition-all">
            <MinecraftIcon type="sword" size={16} color="#94a3b8" />
            {content.secondaryCta}
          </a>
        </div>

        {/* Small decorative Minecraft icons row */}
        <div className="flex justify-center gap-6 opacity-30">
          <MinecraftIcon type="creeper" size={20} color="#4ADE80" />
          <MinecraftIcon type="heart" size={20} color="#EF4444" />
          <MinecraftIcon type="shield" size={20} color="#22d3ee" />
          <MinecraftIcon type="potion" size={20} color="#A78BFA" />
          <MinecraftIcon type="diamond" size={20} color="#22d3ee" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
