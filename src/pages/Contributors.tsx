import React, { useEffect } from 'react';
import { type LanguageCode } from '../content';

type ContributorsProps = {
  language: LanguageCode;
};

type Contributor = {
  name: string;
  githubUsername: string;
  githubUrl: string;
  avatarUrl: string;
  role: {
    en: string;
    vi: string;
  };
  bio: {
    en: string;
    vi: string;
  };
};

const CONTRIBUTORS: Contributor[] = [
  {
    name: 'VennDev',
    githubUsername: 'VennDev',
    githubUrl: 'https://github.com/VennDev',
    avatarUrl: 'https://github.com/VennDev.png',
    role: {
      en: 'Lead Architect & Core Creator',
      vi: 'Kiến trúc sư trưởng & Tác giả chính',
    },
    bio: {
      en: 'Created the Zeus Platform architecture, deterministic simulation core, and neural detection engine.',
      vi: 'Sáng lập kiến trúc Zeus Platform, lõi mô phỏng simulation và hệ thống đánh giá bằng chứng an toàn.',
    },
  },
  {
    name: 'KelvinTrung1k8',
    githubUsername: 'KelvinLynn',
    githubUrl: 'https://github.com/KelvinLynn',
    avatarUrl: 'https://github.com/KelvinLynn.png',
    role: {
      en: 'Core Contributor & Engineering',
      vi: 'Đóng góp cốt lõi & Kỹ thuật',
    },
    bio: {
      en: 'Contributed to platform infrastructure, game server adapters, and detection pipeline stability.',
      vi: 'Đóng góp vào hạ tầng nền tảng, adapter máy chủ game và độ ổn định của pipeline phát hiện.',
    },
  },
  {
    name: 'Akakiii',
    githubUsername: 'TranPhat02',
    githubUrl: 'https://github.com/TranPhat02',
    avatarUrl: 'https://github.com/TranPhat02.png',
    role: {
      en: 'Core Contributor & Mechanics',
      vi: 'Đóng góp cốt lõi & Cơ chế',
    },
    bio: {
      en: 'Contributed to gameplay physics validation, network checks, and edge-case movement verification.',
      vi: 'Đóng góp vào kiểm định vật lý gameplay, kiểm tra network và các trường hợp di chuyển đặc biệt.',
    },
  },
  {
    name: 'NotDantv',
    githubUsername: 'DATRIK1910',
    githubUrl: 'https://github.com/DATRIK1910',
    avatarUrl: 'https://github.com/DATRIK1910.png',
    role: {
      en: 'Core Contributor & Platform Testing',
      vi: 'Đóng góp cốt lõi & Kiểm thử nền tảng',
    },
    bio: {
      en: 'Contributed to multi-version protocol compatibility, community feedback triage, and quality assurance.',
      vi: 'Đóng góp vào tương thích protocol đa phiên bản, tổng hợp phản hồi cộng đồng và kiểm thử chất lượng.',
    },
  },
];

const Contributors: React.FC<ContributorsProps> = ({ language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copy = {
    en: {
      badge: 'Project Team & Credits',
      title: 'Zeus Platform Contributors',
      subtitle:
        'Meet the developers and engineers who have shaped, maintained, and contributed to the Zeus Anti-Cheat Platform ecosystem.',
      githubProfile: 'View GitHub Profile',
      joinTitle: 'Want to contribute to Zeus?',
      joinBody:
        'Zeus is an open and collaborative ecosystem. Explore our repositories, report findings, or get in touch on Discord to discuss integrations and improvements.',
      joinDiscord: 'Join Developer Discord',
      viewGithub: 'Explore GitHub Repositories',
    },
    vi: {
      badge: 'Đội ngũ Dự án & Vinh danh',
      title: 'Những Người Đóng Góp cho Zeus',
      subtitle:
        'Gặp gỡ các lập trình viên và kỹ sư đã phát triển, duy trì và đóng góp xây dựng hệ sinh thái nền tảng Zeus Anti-Cheat.',
      githubProfile: 'Xem trang GitHub',
      joinTitle: 'Bạn muốn đóng góp cho Zeus?',
      joinBody:
        'Zeus là một hệ sinh thái mở và hợp tác. Bạn có thể tham quan các kho mã nguồn, gửi báo cáo hoặc trao đổi trực tiếp trên Discord để cùng phát triển.',
      joinDiscord: 'Tham gia Discord Lập trình viên',
      viewGithub: 'Khám phá GitHub Repositories',
    },
  }[language];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.04] border border-card-border text-text-sec text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
          <i className="fa-solid fa-code-fork text-sky-400"></i>
          {copy.badge}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-cinzel text-text-main mb-4 tracking-wide">
          {copy.title}
        </h1>
        <p className="text-text-sec text-base md:text-lg leading-relaxed">
          {copy.subtitle}
        </p>
      </div>

      {/* Contributors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {CONTRIBUTORS.map((c) => (
          <div
            key={c.name}
            className="glass-card flex flex-col p-6 rounded-2xl bg-[#0c0f17]/80 border-card-border hover:border-slate-500 transition-all duration-300 shadow-xl group"
          >
            {/* Avatar & Status */}
            <div className="relative mb-5 mx-auto">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-card-border group-hover:border-sky-400/60 transition-colors shadow-lg bg-[#161b26]">
                <img
                  src={c.avatarUrl}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#07090e] border border-card-border flex items-center justify-center">
                <i className="fa-brands fa-github text-xs text-text-sec group-hover:text-text-main"></i>
              </div>
            </div>

            {/* Name & Role */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-text-main mb-1 group-hover:text-sky-300 transition-colors">
                {c.name}
              </h3>
              <p className="text-xs font-mono font-medium text-sky-400/90 mb-1">
                {c.role[language]}
              </p>
              <p className="text-xs text-text-sec/80 font-mono">
                @{c.githubUsername}
              </p>
            </div>

            {/* Bio */}
            <p className="text-text-sec text-xs sm:text-sm leading-relaxed mb-6 flex-grow text-center">
              {c.bio[language]}
            </p>

            {/* Profile Action Link */}
            <a
              href={c.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-card-border hover:border-text-sec/40 text-xs font-semibold text-text-sec hover:text-text-main transition-colors no-underline"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>{copy.githubProfile}</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-60"></i>
            </a>
          </div>
        ))}
      </div>

      {/* Join & Collaboration Section */}
      <div className="rounded-2xl border border-card-border bg-gradient-to-r from-white/[0.02] via-[#0f1422] to-white/[0.02] p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-2xl font-bold text-text-main mb-3">
          {copy.joinTitle}
        </h2>
        <p className="text-text-sec text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          {copy.joinBody}
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <a
            href="https://discord.gg/4RR9Tuunuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-white text-bg-color font-bold text-xs sm:text-sm hover:bg-slate-200 transition-all no-underline shadow-md"
          >
            <i className="fa-brands fa-discord text-base text-[#5865F2]"></i>
            {copy.joinDiscord}
          </a>
          <a
            href="https://github.com/zeus-anticheat/zeus_platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-text-main border border-card-border text-xs sm:text-sm font-semibold transition-all no-underline"
          >
            <i className="fa-brands fa-github text-base"></i>
            {copy.viewGithub}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
