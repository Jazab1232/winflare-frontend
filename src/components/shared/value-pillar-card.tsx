import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValuePillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
  iconShape?: 'square' | 'rounded' | 'circle';
  iconSize?: 'sm' | 'md' | 'lg';
  strokeWidth?: number;
  className?: string;
}

export function ValuePillarCard({
  icon: Icon,
  title,
  description,
  iconBg = 'bg-[#EDE9FE]',
  iconColor = 'text-[#5B5AF7]',
  iconShape = 'circle',
  iconSize = 'md',
  strokeWidth = 2,
  className = '',
}: ValuePillarCardProps) {
  const shapeClass =
    iconShape === 'circle'
      ? 'rounded-full'
      : iconShape === 'square'
      ? 'rounded-[8px]'
      : 'rounded-xl';

  const sizeClass =
    iconSize === 'lg'
      ? 'h-12 w-12'
      : iconSize === 'sm'
      ? 'h-9 w-9'
      : 'h-11 w-11';

  const iconDimension =
    iconSize === 'lg'
      ? 'h-6 w-6'
      : iconSize === 'sm'
      ? 'h-4 w-4'
      : 'h-5 w-5';

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div
        className={`flex ${sizeClass} shrink-0 items-center justify-center ${shapeClass} ${iconBg} ${iconColor} shadow-xs`}
      >
        <Icon className={iconDimension} strokeWidth={strokeWidth} />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm sm:text-[14px] font-bold text-[#0F172A] leading-snug">
          {title}
        </h4>
        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
