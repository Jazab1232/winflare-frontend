import React from 'react';
import { LucideIcon } from 'lucide-react';
import { PillBadge, PillBadgeVariant } from './pill-badge';

interface SectionHeaderProps {
  badgeText?: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: PillBadgeVariant;
  badgeUppercase?: boolean;
  title?: React.ReactNode;
  titlePrefix?: React.ReactNode;
  titleHighlight?: React.ReactNode;
  titleSuffix?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeIcon,
  badgeVariant = 'purple',
  badgeUppercase = false,
  title,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`${
        isCentered ? 'mx-auto max-w-3xl text-center' : 'text-left'
      } ${className}`}
    >
      {badgeText && (
        <div className="inline-block">
          <PillBadge
            icon={badgeIcon}
            variant={badgeVariant}
            uppercase={badgeUppercase}
          >
            {badgeText}
          </PillBadge>
        </div>
      )}

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
        {title ? (
          title
        ) : (
          <>
            {titlePrefix}
            {titleHighlight && (
              <span className="text-[#5B5AF7]">{titleHighlight}</span>
            )}
            {titleSuffix}
          </>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg ${
            isCentered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
