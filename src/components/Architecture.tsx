import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type ArchitectureProps = {
  content: HomeContent['protectionModes'];
};

const Architecture: React.FC<ArchitectureProps> = ({ content }) => {
  return (
    <section className="py-20 container-custom">
      <div className="max-w-[800px] mb-14">
        <h2 className="text-4xl font-bold mb-4 text-gradient">{content.heading}</h2>
        <p className="text-text-sec text-[1.1rem]">{content.body}</p>
      </div>

      <div className="grid-layout grid-3">
        {content.modes.map((mode) => (
          <article className="glass-card" key={mode.id}>
            <div
              className="w-[60px] h-[60px] rounded-2xl mb-6 flex items-center justify-center"
              style={{
                backgroundColor: `${mode.iconColor}14`,
                border: `1px solid ${mode.iconColor}26`,
              }}
            >
              <MinecraftIcon type={mode.icon} size={32} color={mode.iconColor} />
            </div>
            <h3 className="text-[1.3rem] font-bold mb-4 text-text-main">{mode.title}</h3>
            <p className="text-text-sec text-[0.95rem] mb-6">{mode.body}</p>
            <ul className="list-none p-0 m-0 space-y-2">
              {mode.points.map((point) => (
                <li className="flex items-start gap-2 text-[0.9rem] text-[#cbd5e1]" key={point}>
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

export default Architecture;
