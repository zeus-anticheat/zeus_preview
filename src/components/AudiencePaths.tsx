import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type AudiencePathsProps = {
  content: HomeContent['audiences'];
};

const AudiencePaths: React.FC<AudiencePathsProps> = ({ content }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#07090e] via-[#0b0e17] to-[#07090e] border-t border-card-border/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container-custom">
        <div className="max-w-[760px] mx-auto text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <MinecraftIcon type="shield" size={13} color="#22d3ee" />
            Roles & Value Paths
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{content.heading}</h2>
          <p className="text-text-sec text-[1rem] md:text-[1.1rem] leading-relaxed">{content.body}</p>
        </div>

        <div className="grid-layout grid-3">
          {content.cards.map((card) => (
            <article
              className="glass-card flex flex-col p-7 hover:-translate-y-1.5 transition-all duration-300 bg-[rgba(15,19,29,0.7)] border-card-border hover:border-accent/40 shadow-xl"
              key={card.id}
            >
              <div
                className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: `${card.iconColor}18`,
                  border: `1px solid ${card.iconColor}33`,
                }}
              >
                <MinecraftIcon type={card.icon} size={28} color={card.iconColor} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main">{card.title}</h3>
              <p className="text-text-sec text-[0.95rem] mb-6 flex-grow leading-relaxed">{card.body}</p>
              <ul className="list-none p-0 m-0 space-y-2.5 pt-5 border-t border-white/5">
                {card.points.map((point) => (
                  <li className="flex items-start gap-2.5 text-[0.88rem] text-[#cbd5e1]" key={point}>
                    <i className="fa-solid fa-check text-success text-[0.8rem] mt-1 shrink-0"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencePaths;
