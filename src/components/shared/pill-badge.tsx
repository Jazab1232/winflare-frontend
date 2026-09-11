import React from 'react';
import { LucideIcon } from 'lucide-react';

export type PillBadgeVariant = 'purple' | 'violet' | 'rose' | 'blue';

interface PillBadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: PillBadgeVariant;
  className?: string;
  uppercase?: boolean;
}

export function PillBadge({
  children,
  icon: Icon,
  variant = 'purple',
  className = '',
  uppercase = false,
}: PillBadgeProps) {
  const variantStyles = {
    purple: 'bg-[#EFEBFF] text-[#5B5AF7]',
    violet:
      'bg-[#EDE9FE] text-[#5B5AF7] border border-[#DDD6FE]/60 shadow-[0_1px_2px_rgba(91,90,247,0.05)]',
    rose: 'bg-[#FFE4E6] text-[#E11D48]',
    blue: 'bg-[#E0E7FF] text-[#4F46E5]',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${
        uppercase ? 'uppercase tracking-wider' : ''
      } ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5 fill-current shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
