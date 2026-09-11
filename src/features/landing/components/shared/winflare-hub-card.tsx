import React from 'react';
import { WinflareLogo } from '../navbar';

interface WinflareHubCardProps {
  tagline?: string;
  variant?: 'floating' | 'block';
  style?: React.CSSProperties;
  className?: string;
}

export function WinflareHubCard({
  tagline = 'One Workspace. All You Need.',
  variant = 'block',
  style,
  className = '',
}: WinflareHubCardProps) {
  if (variant === 'floating') {
    return (
      <div
        className={`absolute z-20 flex flex-col items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white p-4 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_8px_10px_-6px_rgba(15,23,42,0.04)] ${className}`}
        style={style}
      >
        <WinflareLogo className="h-14 w-14 mb-2" />
        <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
          winflare
        </span>
        <div className="mt-3 rounded-[6px] bg-[#EFEBFF] px-2 py-1 text-[10px] font-semibold text-[#5B5AF7]">
          {tagline}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-[12px] border border-[#E2E8F0] bg-white p-6 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)] ${className}`}
      style={style}
    >
      <WinflareLogo className="h-12 w-12 mx-auto mb-2" />
      <span className="text-xl font-bold text-[#0F172A]">winflare</span>
      <div className="mt-2 inline-block rounded-[6px] bg-[#EFEBFF] px-3 py-1 text-xs font-semibold text-[#5B5AF7]">
        {tagline}
      </div>
    </div>
  );
}
