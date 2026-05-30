import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type OperationsConsoleProps = {
  content: HomeContent['operationsConsole'];
};

const OperationsConsole: React.FC<OperationsConsoleProps> = ({ content }) => {
  return (
    <section id="operations" className="py-20 container-custom bg-[#080808] border-t border-b border-card-border mt-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-full mb-6">
            <MinecraftIcon type="diamond" size={14} color="#22d3ee" />
            {content.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-gradient">{content.heading}</h2>
          <p className="text-text-sec text-[1.05rem] leading-relaxed mb-8">{content.body}</p>
          <div className="flex flex-wrap gap-3">
            {content.statusLabels.map((label) => (
              <span className="border border-card-border bg-white/5 px-3 py-2 rounded-lg text-sm text-text-main" key={label}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-[#111] border border-card-border rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-[#1a1a1a] p-4 flex items-center justify-between border-b border-card-border">
              <span className="font-semibold text-text-main flex items-center gap-2">
                <MinecraftIcon type="block" size={18} color="#22d3ee" />
                ZEUS
              </span>
              <span className="text-success text-[0.8rem] font-mono">{content.statusLabels[0]}</span>
            </div>
            <div className="p-5 grid grid-cols-1 gap-4">
              {content.panels.map((panel) => (
                <article className="bg-[#0a0a0a] border border-[#222] p-5 rounded-lg" key={panel.id}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MinecraftIcon type={panel.icon} size={22} color="#22d3ee" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-main mb-2">{panel.title}</h3>
                      <p className="text-text-sec text-[0.92rem] mb-4">{panel.body}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 list-none p-0 m-0">
                        {panel.items.map((item) => (
                          <li className="text-[0.78rem] text-[#cbd5e1] bg-white/5 border border-white/5 rounded-md px-3 py-2" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsConsole;
