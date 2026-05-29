"use client";

import React from "react";

interface MarqueeStripProps {
  children: React.ReactNode;
  duration?: number;   // seconds
  reverse?: boolean;
  className?: string;
}

export default function MarqueeStrip({
  children,
  duration = 35,
  reverse = false,
  className = "",
}: MarqueeStripProps) {
  return (
    <div className={`overflow-hidden marquee-fade ${className}`}>
      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {/* Render twice for seamless loop */}
        <div className="flex items-center gap-4 pr-4">{children}</div>
        <div className="flex items-center gap-4 pr-4" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
