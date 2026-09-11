import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AuthBrandHeaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AuthBrandHeader({ className = "", size = "md" }: AuthBrandHeaderProps) {
  const iconSize = size === "sm" ? 24 : size === "lg" ? 36 : 30;
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/fav-icon.svg"
          alt="Winflare Logo"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </div>
      <span className={`font-bold tracking-tight text-text-primary ${textSize}`}>
        Winflare
      </span>
    </Link>
  );
}
