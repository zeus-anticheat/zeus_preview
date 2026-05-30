import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type FeaturesProps = {
  content: HomeContent['features'];
};

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section id="features" className="py-20 container-custom">
      <h2 className="text-4xl font-bold text-center mb-4 text-gradient">{content.heading}</h2>
      <p className="text-text-sec text-center text-[1.1rem] max-w-[600px] mx-auto mb-16">
        {content.body}
      </p>

      <div className="grid-layout grid-3">
        {content.cards.map((card) => (
          <div className="glass-card group flex flex-col" key={card.id}>
            <div
              className="w-[60px] h-[60px] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{
                backgroundColor: `${card.iconColor}14`,
                border: `1px solid ${card.iconColor}26`,
                color: card.iconColor,
              }}
            >
              <MinecraftIcon type={card.icon} size={32} color={card.iconColor} />
            </div>
            <h3 className="text-[1.3rem] font-bold mb-4 text-text-main break-words">{card.title}</h3>
            <p className="text-text-sec text-[0.95rem] mb-6 flex-grow break-words whitespace-normal">
              {card.body}
            </p>
            <ul className="list-none p-0 m-0 border-t border-white/5 pt-6">
              {card.points.map((point, index) => (
                <li
                  className={`flex items-start gap-3 text-[0.9rem] text-[#cbd5e1] ${
                    index < card.points.length - 1 ? 'mb-3' : ''
                  }`}
                  key={point}
                >
                  <i className="fa-solid fa-check text-success text-[0.8rem] mt-1"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-card-border bg-white/5 p-6 md:p-8">
        <div className="max-w-[720px] mb-8">
          <h3 className="text-2xl font-bold mb-3 text-text-main">{content.workflow.heading}</h3>
          <p className="text-text-sec text-[1rem]">{content.workflow.body}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {content.workflow.steps.map((step, index) => (
            <div className="border border-card-border bg-bg-color/50 rounded-xl p-4" key={step.id}>
              <div className="text-accent text-sm font-bold mb-3">0{index + 1}</div>
              <h4 className="text-text-main font-bold mb-2">{step.title}</h4>
              <p className="text-text-sec text-[0.9rem]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
