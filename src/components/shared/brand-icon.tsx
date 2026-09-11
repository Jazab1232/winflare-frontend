import React from 'react';

export type BrandName =
  | 'linkedin'
  | 'indeed'
  | 'wellfound'
  | 'chatgpt'
  | 'openai'
  | 'sheets'
  | 'gmail'
  | 'email'
  | 'notion'
  | 'google-calendar'
  | 'twitter'
  | 'x'
  | 'youtube'
  | 'instagram';

interface BrandIconProps {
  name: BrandName;
  className?: string;
  variant?: 'badge' | 'icon' | 'badge-round';
  size?: 'sm' | 'md' | 'lg';
}

export function BrandIcon({
  name,
  className = '',
  variant = 'icon',
}: BrandIconProps) {
  switch (name) {
    case 'linkedin':
      if (variant === 'badge' || variant === 'badge-round') {
        return (
          <div
            className={`flex items-center justify-center bg-[#0A66C2] text-white shadow-xs ${
              variant === 'badge-round' ? 'rounded-full' : 'rounded-[6px]'
            } ${className || 'h-7 w-7'}`}
          >
            <span className="font-bold text-xs tracking-tighter">in</span>
          </div>
        );
      }
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path
            d="M7.4 9.6H5.2V17H7.4V9.6ZM6.3 8.6C7 8.6 7.5 8 7.5 7.4C7.5 6.7 7 6.2 6.3 6.2C5.6 6.2 5.1 6.7 5.1 7.4C5.1 8 5.6 8.6 6.3 8.6ZM18.8 17H16.6V13.5C16.6 12.6 16.6 11.5 15.4 11.5C14.1 11.5 13.9 12.5 13.9 13.4V17H11.7V9.6H13.8V10.6H13.8C14.1 10 14.9 9.4 16 9.4C18.3 9.4 18.8 10.9 18.8 12.9V17Z"
            fill="white"
          />
        </svg>
      );

    case 'indeed':
      if (variant === 'badge' || variant === 'badge-round') {
        return (
          <div
            className={`flex items-center justify-center bg-[#EA6A21] text-white shadow-xs ${
              variant === 'badge-round' ? 'rounded-full' : 'rounded-[6px]'
            } ${className || 'h-7 w-7'}`}
          >
            <span className="font-serif font-black text-sm italic leading-none">
              i
            </span>
          </div>
        );
      }
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="12" fill="#2164F4" />
          <path
            d="M13.2 8.7C13.2 9.5 12.6 10.1 11.8 10.1C11 10.1 10.4 9.5 10.4 8.7C10.4 7.9 11 7.3 11.8 7.3C12.6 7.3 13.2 7.9 13.2 8.7ZM10.5 11.5H13.1V17.2H10.5V11.5Z"
            fill="white"
          />
          <path
            d="M14.5 11.5C14.1 11.8 13.7 12 13.2 12V11.5H10.5V17.2H13.1V14.1C13.1 13.3 13.6 12.8 14.3 12.8C14.7 12.8 15 13 15.2 13.2L16 11.8C15.6 11.6 15 11.4 14.5 11.5Z"
            fill="white"
            opacity="0.85"
          />
        </svg>
      );

    case 'wellfound':
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="5" fill="#000000" />
          <path
            d="M6 8L8.5 15.5L10.5 9.8L12 14.2L13.5 9.8L15.5 15.5L18 8H16.2L14.6 13L13.1 8.8H10.9L9.4 13L7.8 8H6Z"
            fill="white"
          />
        </svg>
      );

    case 'chatgpt':
    case 'openai':
      if (variant === 'badge' || variant === 'badge-round') {
        return (
          <div
            className={`flex items-center justify-center bg-[#10A37F] text-white shadow-xs ${
              variant === 'badge' ? 'rounded-[6px]' : 'rounded-full'
            } ${className || 'h-7 w-7'}`}
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829 14.6174 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6726a.79.79 0 0 0-.402-.6858zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1451-2.2007l3.0476-1.761 3.0476 1.761v3.522l-3.0476 1.761-3.0476-1.761z" />
            </svg>
          </div>
        );
      }
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="12" fill="#10A37F" />
          <path
            d="M16.5 11.3C16.3 9.9 15.2 8.8 13.7 8.6V7.4C13.7 6.6 13 6 12.2 6C11.6 6 11.1 6.3 10.8 6.8L8.3 10.9C8 11.4 8 12 8.3 12.5L9.3 14.1C9.1 14.4 9 14.7 9 15.1C9 15.9 9.7 16.6 10.5 16.6C10.7 16.6 10.9 16.5 11.1 16.4L13.6 17.8C13.8 17.9 14.1 18 14.4 18C15.2 18 15.9 17.3 15.9 16.5V15.2C16.9 14.7 17.6 13.6 17.6 12.3C17.6 11.9 17.5 11.5 17.3 11.1L16.5 11.3ZM12 14.4C10.7 14.4 9.6 13.3 9.6 12C9.6 10.7 10.7 9.6 12 9.6C13.3 9.6 14.4 10.7 14.4 12C14.4 13.3 13.3 14.4 12 14.4Z"
            fill="white"
          />
        </svg>
      );

    case 'sheets':
      if (variant === 'badge' || variant === 'badge-round') {
        return (
          <div
            className={`flex items-center justify-center bg-[#0F9D58] p-1 shadow-xs ${
              variant === 'badge-round' ? 'rounded-full' : 'rounded-[6px]'
            } ${className || 'h-7 w-7'}`}
          >
            <div className="grid grid-cols-2 gap-0.5 w-full h-full">
              <div className="bg-white rounded-[0.5px]" />
              <div className="bg-white rounded-[0.5px]" />
              <div className="bg-white rounded-[0.5px]" />
              <div className="bg-white rounded-[0.5px]" />
            </div>
          </div>
        );
      }
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="4" fill="#0F9D58" />
          <rect
            x="6.5"
            y="7"
            width="11"
            height="10"
            rx="1"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            d="M8 9H16M8 12H16M8 15H16M11.5 7V17"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'gmail':
    case 'email':
      if (variant === 'badge' || variant === 'badge-round') {
        return (
          <div
            className={`flex items-center justify-center bg-slate-50 border border-slate-100 shadow-xs ${
              variant === 'badge-round' ? 'rounded-full' : 'rounded-[6px]'
            } ${className || 'h-7 w-7'}`}
          >
            <svg className="h-4.5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M1.5 5.5v13a1 1 0 0 0 1 1h3.5v-9.5L1.5 5.5z"
              />
              <path
                fill="#34A853"
                d="M18 19.5h3.5a1 1 0 0 0 1-1v-13l-4.5 4.5v9.5z"
              />
              <path fill="#EA4335" d="M18 5.5l-6 4.5-6-4.5 6-4.5 6 4.5z" />
              <path fill="#FBBC04" d="M6 10v9.5h12V10l-6 4.5-6-4.5z" />
            </svg>
          </div>
        );
      }
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            width="24"
            height="24"
            rx="5"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="0.8"
          />
          <path
            d="M6 7.5V16.5H8.5V11.8L12 14.5L15.5 11.8V16.5H18V7.5L12 12.2L6 7.5Z"
            fill="#EA4335"
          />
          <path d="M6 7.5L12 12.2L8.5 14.8V11.8L6 9.8V7.5Z" fill="#4285F4" />
          <path d="M18 7.5L12 12.2L15.5 14.8V11.8L18 9.8V7.5Z" fill="#34A853" />
          <path d="M6 7.5L8.5 9.5V7.5H6Z" fill="#FBBC05" />
        </svg>
      );

    case 'notion':
      if (variant === 'badge' || variant === 'badge-round') {
        return (
          <div
            className={`flex items-center justify-center border border-slate-200 bg-white text-black shadow-xs ${
              variant === 'badge-round' ? 'rounded-full' : 'rounded-[6px]'
            } ${className || 'h-7 w-7'}`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.84c-.466-.373-.84-.56-1.586-.513L3.712 2.306c-.373.047-.466.326-.326.513l1.073 1.389zm.84 3.033v13.582c0 .84.42 1.12 1.213 1.073l14.288-.84c.84-.047 1.027-.56 1.027-1.213V6.26c0-.653-.327-.98-.98-.933l-14.568.84c-.653.047-.98.373-.98 1.074zm13.402 1.306c.093.42 0 .84-.42.887l-1.073.187v9.098c-.467.28-.934.467-1.354.467-.654 0-.84-.187-1.354-.84l-4.573-7.14v6.86l1.493.327c.42.093.42.513.047.513l-3.873.233c-.093-.373 0-.793.374-.84l1.167-.233V9.757l-1.354-.14c-.374-.047-.327-.467 0-.514l3.827-.233 4.9 7.42V9.897l-1.26-.14c-.373-.047-.28-.467 0-.514l3.78-.233c.373 0 .42.233.42.42z" />
            </svg>
          </div>
        );
      }
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            width="24"
            height="24"
            rx="5"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="0.8"
          />
          <path
            d="M7 6.8L15.5 6.2C16.3 6.1 17 6.7 17 7.5V17L15 16.5L10 9.8V16.8L7.8 16.5V7.8L7 6.8ZM10.5 8.5V14.8L14.8 8.8L10.5 8.5Z"
            fill="#000000"
          />
        </svg>
      );

    case 'google-calendar':
      return (
        <svg
          className={className || 'h-5 w-5'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="5" fill="#4285F4" />
          <rect x="6" y="8" width="12" height="10" rx="1.5" fill="white" />
          <rect x="6" y="8" width="12" height="3" fill="#1A73E8" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="6.5"
            fontWeight="bold"
            fill="#1A73E8"
            fontFamily="sans-serif"
          >
            31
          </text>
        </svg>
      );

    case 'twitter':
    case 'x':
      return (
        <svg className={className || 'h-4 w-4 fill-current'} viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case 'youtube':
      return (
        <svg className={className || 'h-4 w-4 fill-current'} viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );

    case 'instagram':
      return (
        <svg
          className={className || 'h-4 w-4 fill-none stroke-current stroke-2'}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );

    default:
      return null;
  }
}
