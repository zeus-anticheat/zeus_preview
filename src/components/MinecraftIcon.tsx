import React from 'react';

interface MinecraftIconProps {
  type: 'sword' | 'pickaxe' | 'heart' | 'creeper' | 'diamond' | 'grass' | 'shield' | 'potion' | 'star' | 'block';
  size?: number;
  color?: string;
  className?: string;
}

const MinecraftIcon: React.FC<MinecraftIconProps> = ({ type, size = 24, color = 'currentColor', className = '' }) => {
  const icons: Record<string, React.ReactNode> = {
    sword: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="7" y="1" width="2" height="2" fill={color} />
        <rect x="7" y="3" width="2" height="2" fill={color} />
        <rect x="7" y="5" width="2" height="2" fill={color} />
        <rect x="7" y="7" width="2" height="2" fill={color} />
        <rect x="5" y="9" width="2" height="2" fill="#8B7355" />
        <rect x="7" y="9" width="2" height="2" fill="#8B7355" />
        <rect x="9" y="9" width="2" height="2" fill="#8B7355" />
        <rect x="7" y="11" width="2" height="2" fill="#8B7355" />
        <rect x="7" y="13" width="2" height="2" fill="#8B7355" />
      </svg>
    ),
    pickaxe: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="2" y="2" width="2" height="2" fill={color} />
        <rect x="4" y="2" width="2" height="2" fill={color} />
        <rect x="6" y="2" width="2" height="2" fill={color} />
        <rect x="8" y="2" width="2" height="2" fill={color} />
        <rect x="10" y="2" width="2" height="2" fill={color} />
        <rect x="2" y="4" width="2" height="2" fill={color} />
        <rect x="10" y="4" width="2" height="2" fill={color} />
        <rect x="10" y="6" width="2" height="2" fill="#8B7355" />
        <rect x="8" y="8" width="2" height="2" fill="#8B7355" />
        <rect x="6" y="10" width="2" height="2" fill="#8B7355" />
        <rect x="4" y="12" width="2" height="2" fill="#8B7355" />
        <rect x="2" y="14" width="2" height="2" fill="#8B7355" />
      </svg>
    ),
    heart: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="2" y="2" width="4" height="2" fill={color} />
        <rect x="10" y="2" width="4" height="2" fill={color} />
        <rect x="1" y="4" width="6" height="2" fill={color} />
        <rect x="9" y="4" width="6" height="2" fill={color} />
        <rect x="1" y="6" width="14" height="2" fill={color} />
        <rect x="2" y="8" width="12" height="2" fill={color} />
        <rect x="3" y="10" width="10" height="2" fill={color} />
        <rect x="4" y="12" width="8" height="2" fill={color} />
        <rect x="5" y="14" width="6" height="2" fill={color} />
        <rect x="6" y="16" width="4" height="0" fill={color} />
      </svg>
    ),
    creeper: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="2" y="1" width="12" height="14" fill="#4ADE80" />
        <rect x="5" y="4" width="2" height="2" fill="#166534" />
        <rect x="9" y="4" width="2" height="2" fill="#166534" />
        <rect x="6" y="6" width="4" height="2" fill="#166534" />
        <rect x="5" y="8" width="2" height="3" fill="#166534" />
        <rect x="9" y="8" width="2" height="3" fill="#166534" />
        <rect x="7" y="9" width="2" height="2" fill="#166534" />
      </svg>
    ),
    diamond: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="6" y="1" width="4" height="2" fill={color} />
        <rect x="4" y="3" width="8" height="2" fill={color} />
        <rect x="2" y="5" width="12" height="2" fill={color} />
        <rect x="4" y="7" width="8" height="2" fill={color} />
        <rect x="6" y="9" width="4" height="2" fill={color} />
        <rect x="7" y="11" width="2" height="2" fill={color} />
      </svg>
    ),
    grass: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="0" y="0" width="16" height="4" fill="#4ADE80" />
        <rect x="0" y="4" width="16" height="2" fill="#22C55E" />
        <rect x="0" y="6" width="16" height="10" fill="#8B6914" />
        <rect x="2" y="8" width="2" height="2" fill="#7A5C12" />
        <rect x="8" y="10" width="2" height="2" fill="#7A5C12" />
        <rect x="12" y="7" width="2" height="2" fill="#7A5C12" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="3" y="1" width="10" height="2" fill={color} />
        <rect x="2" y="3" width="12" height="2" fill={color} />
        <rect x="2" y="5" width="12" height="2" fill={color} />
        <rect x="2" y="7" width="12" height="2" fill={color} />
        <rect x="3" y="9" width="10" height="2" fill={color} />
        <rect x="4" y="11" width="8" height="2" fill={color} />
        <rect x="5" y="13" width="6" height="2" fill={color} />
        <rect x="6" y="15" width="4" height="0" fill={color} />
        <rect x="7" y="3" width="2" height="8" fill="#1E3A5F" />
        <rect x="3" y="6" width="10" height="2" fill="#1E3A5F" />
      </svg>
    ),
    potion: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="6" y="1" width="4" height="2" fill="#9CA3AF" />
        <rect x="5" y="3" width="6" height="2" fill="#9CA3AF" />
        <rect x="4" y="5" width="8" height="2" fill={color} />
        <rect x="3" y="7" width="10" height="2" fill={color} />
        <rect x="3" y="9" width="10" height="2" fill={color} />
        <rect x="4" y="11" width="8" height="2" fill={color} />
        <rect x="5" y="13" width="6" height="2" fill={color} />
        <rect x="6" y="15" width="4" height="0" fill={color} />
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="6" y="1" width="4" height="2" fill={color} />
        <rect x="6" y="3" width="4" height="2" fill={color} />
        <rect x="1" y="5" width="14" height="2" fill={color} />
        <rect x="2" y="7" width="12" height="2" fill={color} />
        <rect x="3" y="9" width="10" height="2" fill={color} />
        <rect x="4" y="11" width="8" height="2" fill={color} />
        <rect x="5" y="13" width="6" height="2" fill={color} />
        <rect x="6" y="15" width="4" height="0" fill={color} />
      </svg>
    ),
    block: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`mc-icon ${className}`}>
        <rect x="1" y="1" width="14" height="14" fill={color} opacity="0.8" />
        <rect x="1" y="1" width="14" height="2" fill={color} />
        <rect x="1" y="1" width="2" height="14" fill={color} />
        <rect x="13" y="1" width="2" height="14" fill={color} opacity="0.6" />
        <rect x="1" y="13" width="14" height="2" fill={color} opacity="0.6" />
        <rect x="4" y="4" width="3" height="3" fill={color} opacity="0.4" />
        <rect x="9" y="9" width="3" height="3" fill={color} opacity="0.4" />
      </svg>
    ),
  };

  return <>{icons[type] || null}</>;
};

export default MinecraftIcon;
