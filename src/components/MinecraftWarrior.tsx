import React from 'react';

type WarriorHeroProps = {
  className?: string;
  size?: number;
};

/**
 * Procedural Vector 3D Isometric Minecraft Warrior
 * Inspired by Zeus Anticheat guardian theme:
 * Diamond sword, Golden crown, Diamond armor aura, and volumetric isometric voxel shading.
 */
export const MinecraftWarrior: React.FC<WarriorHeroProps> = ({
  className = '',
  size = 280,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <defs>
        {/* Glow Filters */}
        <filter id="sword-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="magic-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Diamond Blade Gradient */}
        <linearGradient id="blade-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ecfeff" />
          <stop offset="50%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        {/* Armor Gradient */}
        <linearGradient id="armor-light" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Floating Magic Voxel Particles */}
      <g filter="url(#magic-glow)">
        <polygon points="230,130 242,136 236,146 224,140" fill="#22d3ee" opacity="0.9" />
        <polygon points="250,115 258,119 254,127 246,123" fill="#67e8f9" opacity="0.75" />
        <polygon points="220,165 228,169 224,177 216,173" fill="#a5f3fc" opacity="0.8" />
        <polygon points="265,145 272,148 269,155 262,152" fill="#38bdf8" opacity="0.85" />
      </g>

      {/* --- CHARACTER GROUP (ISOMETRIC VOXELS) --- */}
      <g transform="translate(15, 20)">

        {/* === LEFT LEG === */}
        <g>
          {/* Leg Top */}
          <polygon points="120,200 138,209 130,217 112,208" fill="#0e7490" />
          {/* Leg Front */}
          <polygon points="112,208 130,217 130,255 112,246" fill="#0891b2" />
          {/* Leg Right */}
          <polygon points="130,217 138,209 138,247 130,255" fill="#155e75" />
          {/* Boot Bottom Front */}
          <polygon points="112,246 130,255 130,265 112,256" fill="#78350f" />
          {/* Boot Bottom Right */}
          <polygon points="130,255 138,247 138,257 130,265" fill="#451a03" />
        </g>

        {/* === RIGHT LEG === */}
        <g>
          {/* Leg Front */}
          <polygon points="136,204 154,213 154,251 136,242" fill="#0891b2" />
          {/* Leg Right */}
          <polygon points="154,213 162,205 162,243 154,251" fill="#155e75" />
          {/* Boot Front */}
          <polygon points="136,242 154,251 154,261 136,252" fill="#78350f" />
          {/* Boot Right */}
          <polygon points="154,251 162,243 162,253 154,261" fill="#451a03" />
        </g>

        {/* === TORSO (ARMORED) === */}
        <g>
          {/* Torso Front Face */}
          <polygon points="110,140 152,160 152,208 110,188" fill="#1e293b" />
          {/* Zeus Cyan Armor Emblem / Inlay on Chest */}
          <polygon points="120,154 142,165 142,185 120,174" fill="url(#armor-light)" />
          <polygon points="126,162 136,167 136,177 126,172" fill="#ecfeff" opacity="0.9" />

          {/* Torso Right Shaded Face */}
          <polygon points="152,160 170,148 170,196 152,208" fill="#0f172a" />
          <polygon points="155,165 167,157 167,185 155,193" fill="#0369a1" opacity="0.6" />
        </g>

        {/* === HEAD & GOLDEN CROWN === */}
        <g>
          {/* Head Top / Hair Base */}
          <polygon points="134,70 162,84 144,95 116,81" fill="#451a03" />

          {/* Face Front (Skin) */}
          <polygon points="116,81 144,95 144,142 116,128" fill="#fcd34d" />
          {/* Eyes (Hero Cyan) */}
          <polygon points="122,96 128,99 128,105 122,102" fill="#06b6d4" />
          <polygon points="124,97 126,98 126,101 124,100" fill="#ffffff" />
          <polygon points="134,102 140,105 140,111 134,108" fill="#06b6d4" />
          <polygon points="136,103 138,104 138,107 136,106" fill="#ffffff" />

          {/* Head Right Side (Shaded Skin & Hair) */}
          <polygon points="144,95 166,81 166,128 144,142" fill="#d97706" />

          {/* GOLD CROWN */}
          {/* Crown Front */}
          <polygon points="115,77 145,92 145,84 139,81 135,84 130,81 125,84 121,80 115,83" fill="#fbbf24" />
          {/* Crown Ruby Gem in Center */}
          <polygon points="128,84 132,86 132,89 128,87" fill="#ef4444" />
          {/* Crown Right Side */}
          <polygon points="145,92 167,78 167,70 161,74 157,71 153,74 149,71 145,84" fill="#d97706" />
        </g>

        {/* === LEFT ARM (HOLDING MAGIC AURA) === */}
        <g>
          <polygon points="160,150 188,162 182,185 154,173" fill="#334155" />
          <polygon points="188,162 205,152 200,175 182,185" fill="#1e293b" />
          {/* Hand Palm (Glowing Hand) */}
          <polygon points="182,185 200,175 205,190 187,200" fill="#fcd34d" />
          {/* Magic Diamond Core inside palm */}
          <polygon points="196,177 212,185 206,198 190,190" fill="#22d3ee" filter="url(#magic-glow)" />
        </g>

        {/* === RIGHT ARM (HOLDING ZEUS SWORD) === */}
        <g>
          {/* Shoulder & Arm Extended to top-left */}
          <polygon points="112,143 82,126 94,108 124,125" fill="#38bdf8" />
          <polygon points="82,126 68,118 78,102 92,110" fill="#fcd34d" />
          {/* Wrist Guard */}
          <polygon points="68,118 78,102 72,98 62,114" fill="#0e7490" />
        </g>

        {/* === ICONIC ZEUS DIAMOND SWORD (EXTENDING UP-LEFT) === */}
        <g filter="url(#sword-glow)">
          {/* Crossguard (Hilt) */}
          <polygon points="60,118 78,92 72,88 54,114" fill="#334155" />
          <polygon points="56,116 74,90 70,86 52,112" fill="#0f172a" />

          {/* Pommel */}
          <polygon points="80,126 86,118 82,114 76,122" fill="#0891b2" />

          {/* Glowing Diamond Blade Body */}
          {/* Top Bevel / Edge */}
          <polygon points="68,90 8,30 18,18 78,78" fill="url(#blade-core)" />
          {/* Blade Center Ridge */}
          <polygon points="68,90 18,18 24,12 84,72" fill="#ecfeff" opacity="0.9" />
          {/* Blade Tip Point */}
          <polygon points="8,30 2,24 14,8 18,18" fill="#cffafe" />
          <polygon points="2,24 0,22 8,6 14,8" fill="#ffffff" />
        </g>

      </g>
    </svg>
  );
};

export default MinecraftWarrior;
