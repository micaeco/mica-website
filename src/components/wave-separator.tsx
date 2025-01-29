"use client";

import { cn } from "@/lib/utils";

export default function WaveSeparator({
  bgColor,
  waveColor,
}: {
  bgColor: string;
  waveColor: string;
}) {
  return (
    <div className="w-full">
      <svg viewBox="0 0 1440 100" className={bgColor} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 44C106.667 44 213.333 8 320 8C426.667 8 533.333 44 640 44C746.667 44 853.333 8 960 8C1066.67 8 1173.33 44 1280 44C1386.67 44 1440 19 1440 9V101H0V44Z"
          className={cn("fill-current", waveColor)}
        />
      </svg>
    </div>
  );
}
