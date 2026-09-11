import React from 'react';
import { Check } from 'lucide-react';

interface CheckListProps {
  items: string[];
  layout?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'outline';
  className?: string;
  itemClassName?: string;
}

export function CheckList({
  items,
  layout = 'horizontal',
  variant = 'solid',
  className = '',
  itemClassName = '',
}: CheckListProps) {
  if (layout === 'vertical') {
    return (
      <ul className={`space-y-3.5 w-full ${className}`}>
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-center gap-3 text-[14px] font-semibold text-[#334155] ${itemClassName}`}
          >
            {variant === 'outline' ? (
              <div className="w-4.5 h-4.5 rounded-full border-[1.5px] border-[#5B5AF7] flex items-center justify-center shrink-0">
                <Check className="text-[#5B5AF7] w-2.5 h-2.5 stroke-[3]" />
              </div>
            ) : (
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5AF7] text-white shrink-0">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 ${className}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 text-sm font-medium text-[#0F172A] ${itemClassName}`}
        >
          {variant === 'outline' ? (
            <div className="w-4.5 h-4.5 rounded-full border-[1.5px] border-[#5B5AF7] flex items-center justify-center shrink-0">
              <Check className="text-[#5B5AF7] w-2.5 h-2.5 stroke-[3]" />
            </div>
          ) : (
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5AF7] text-white shrink-0">
              <Check className="h-2.5 w-2.5 stroke-[3]" />
            </div>
          )}
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
