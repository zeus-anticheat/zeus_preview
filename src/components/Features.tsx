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

      {/* Minecraft Cheat Detection Matrix overview */}
      <div className="mt-16 glass-card !p-6 md:!p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-card-border">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
              <MinecraftIcon type="sword" size={20} color="#f43f5e" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-text-main font-heading tracking-wide">MINECRAFT DETECTION MATRIX</h4>
              <p className="text-xs text-text-sec mt-0.5">Supported check modules across all Minecraft versions (1.8 – 1.21+)</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            HERMES SIMULATION ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-xl border border-card-border bg-bg-color/60 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5 text-cyan-400 font-bold text-sm">
                <MinecraftIcon type="shield" size={18} color="#22d3ee" />
                <span>Movement & Physics</span>
              </div>
              <p className="text-xs text-text-sec mb-4 leading-relaxed">Deterministic simulation against vanilla bounding boxes & tick rates.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Fly</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Speed</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">NoSlow</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Jesus</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Step</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-card-border bg-bg-color/60 hover:border-rose-500/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5 text-rose-400 font-bold text-sm">
                <MinecraftIcon type="sword" size={18} color="#f43f5e" />
                <span>Combat & Aim</span>
              </div>
              <p className="text-xs text-text-sec mb-4 leading-relaxed">Sub-tick raytracing with historical hitboxes & rotational delta tracking.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Reach (&gt;3.0m)</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Killaura</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">AutoClicker</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Hitbox</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-card-border bg-bg-color/60 hover:border-amber-500/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5 text-amber-400 font-bold text-sm">
                <MinecraftIcon type="pickaxe" size={18} color="#f59e0b" />
                <span>World & Mining</span>
              </div>
              <p className="text-xs text-text-sec mb-4 leading-relaxed">Per-dig item provenance & block break latency verification.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">FastBreak</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Nuker</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Scaffold</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">FastPlace</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-card-border bg-bg-color/60 hover:border-purple-500/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5 text-purple-400 font-bold text-sm">
                <MinecraftIcon type="block" size={18} color="#c084fc" />
                <span>Protocol & Network</span>
              </div>
              <p className="text-xs text-text-sec mb-4 leading-relaxed">Tick-drift detection, transaction ID order, and payload size bounds.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Timer Exploit</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">BadPackets</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-text-sec">Transaction</span>
            </div>
          </div>
        </div>
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
