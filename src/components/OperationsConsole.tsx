import React from 'react';
import MinecraftIcon from './MinecraftIcon';
import type { HomeContent } from '../content/home';

type OperationsConsoleProps = {
  content: HomeContent['operationsConsole'];
};

const OperationsConsole: React.FC<OperationsConsoleProps> = ({ content }) => {
  return (
    <section id="operations" className="relative py-24 bg-[#05060a] border-t border-card-border overflow-hidden">
      {/* Subtle glowing accent backdrop */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.04] border border-card-border text-text-sec text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              <MinecraftIcon type="diamond" size={14} color="#94a3b8" />
              {content.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gradient">{content.heading}</h2>
            <p className="text-text-sec text-[1.1rem] leading-relaxed mb-8">{content.body}</p>
            <div className="flex flex-wrap gap-2.5">
              {content.statusLabels.map((label) => (
                <span className="border border-card-border bg-white/[0.03] px-3.5 py-1.5 rounded-full text-xs font-mono text-text-sec" key={label}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-[#0b0e17] border border-card-border/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="bg-[#101422] p-4 px-6 flex items-center justify-between border-b border-card-border">
                <span className="font-semibold text-text-main flex items-center gap-2.5 text-sm font-cinzel tracking-wider">
                  <MinecraftIcon type="block" size={18} color="#94a3b8" />
                  ZEUS PLATFORM CONSOLE
                </span>
                <span className="inline-flex items-center gap-1.5 text-success text-xs font-mono px-2.5 py-0.5 rounded-full bg-success/10 border border-success/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                  {content.statusLabels[0]}
                </span>
              </div>
              <div className="p-6 grid grid-cols-1 gap-4">
                {content.panels.map((panel) => (
                  <article className="bg-[#07090e] border border-card-border/60 p-5 rounded-xl hover:border-slate-600 transition-colors shadow-sm" key={panel.id}>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-card-border flex items-center justify-center shrink-0 shadow-inner">
                        <MinecraftIcon type={panel.icon} size={22} color="#94a3b8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-text-main mb-2 text-base">{panel.title}</h3>
                        <p className="text-text-sec text-[0.9rem] mb-4 leading-relaxed">{panel.body}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 list-none p-0 m-0">
                          {panel.items.map((item) => (
                            <li className="text-[0.78rem] text-text-sec bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2 font-mono flex items-center gap-1.5" key={item}>
                              <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                              <span>{item}</span>
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
      </div>
    </section>
  );
};

export default OperationsConsole;
