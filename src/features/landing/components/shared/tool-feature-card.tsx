import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolFeatureCardProps {
  icon: LucideIcon | React.ReactNode;
  title: string;
  subtitle: string;
  iconBg?: string;
  iconColor?: string;
  style?: React.CSSProperties;
  className?: string;
  size?: 'sm' | 'md';
}

export function ToolFeatureCard({
  icon: IconOrNode,
  title,
  subtitle,
  iconBg = 'bg-[#EFEBFF]',
  iconColor = 'text-[#5B5AF7]',
  style,
  className = '',
  size = 'md',
}: ToolFeatureCardProps) {
  const isSm = size === 'sm';

  const renderIcon = () => {
    if (React.isValidElement(IconOrNode)) {
      return IconOrNode;
    }
    const IconComponent = IconOrNode as LucideIcon;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white transition-all hover:shadow-md hover:border-slate-300 ${
        isSm ? 'p-3 shadow-xs' : 'px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)]'
      } ${className}`}
      style={style}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-[6px] ${iconBg} ${iconColor} shadow-xs ${
          isSm ? 'h-7 w-7' : 'h-8 w-8'
        }`}
      >
        {renderIcon()}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold text-[#0F172A] leading-tight">
          {title}
        </div>
        <div className="text-[10px] text-[#64748B] truncate mt-0.5">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
