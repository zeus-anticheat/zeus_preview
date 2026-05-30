import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type AudiencePathsProps = {
  content: HomeContent['audiences'];
};

const AudiencePaths: React.FC<AudiencePathsProps> = ({ content }) => {
  return (
    <section className="py-16 container-custom">
      <div className="max-w-[760px] mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{content.heading}</h2>
        <p className="text-text-sec text-[1rem] md:text-[1.1rem]">{content.body}</p>
      </div>

      <div className="grid-layout grid-3">
        {content.cards.map((card) => (
          <article className="glass-card flex flex-col p-6" key={card.id}>
            <div
              className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
              style={{
                backgroundColor: `${card.iconColor}14`,
                border: `1px solid ${card.iconColor}26`,
              }}
            >
              <MinecraftIcon type={card.icon} size={26} color={card.iconColor} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-main">{card.title}</h3>
            <p className="text-text-sec text-[0.95rem] mb-5 flex-grow">{card.body}</p>
            <ul className="list-none p-0 m-0 space-y-2">
              {card.points.map((point) => (
                <li className="flex items-start gap-2 text-[0.88rem] text-[#cbd5e1]" key={point}>
                  <i className="fa-solid fa-check text-success text-[0.75rem] mt-1"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AudiencePaths;
