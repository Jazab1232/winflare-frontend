"use client";

import * as React from "react";
import {
  FileText,
  Image as ImageIcon,
  Tag,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { WinningAssetItem } from "../types";
import { cn } from "@/lib/utils";

interface WinningAssetsLibraryProps {
  assets: WinningAssetItem[];
  onAssetClick?: (asset: WinningAssetItem) => void;
  onViewAll?: () => void;
}

const ICONS_MAP = {
  FileText: FileText,
  Image: ImageIcon,
  Tag: Tag,
  MessageSquare: MessageSquare,
};

export function WinningAssetsLibrary({
  assets,
  onAssetClick,
  onViewAll,
}: WinningAssetsLibraryProps) {
  return (
    <div className="flex flex-col gap-3 px-6 pb-6 select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            Winning Assets Library
          </h2>
          <p className="text-[11px] text-slate-500">
            Proven content that wins. Use these assets to create better proposals.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
        {assets.map((asset) => {
          const Icon = ICONS_MAP[asset.iconName] || FileText;

          return (
            <div
              key={asset.id}
              onClick={() => onAssetClick?.(asset)}
              className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs transition-all hover:border-indigo-200 hover:shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                    asset.iconBg,
                    asset.iconColor
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-slate-900 truncate group-hover:text-[#5B5AF7] transition-colors">
                    {asset.title}
                  </span>
                  <span className="text-[10.5px] text-slate-400 truncate">
                    {asset.subtitle}
                  </span>
                </div>
              </div>

              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#5B5AF7] transition-colors shrink-0 ml-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

