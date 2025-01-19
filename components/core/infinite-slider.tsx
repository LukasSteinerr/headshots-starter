import React from 'react';

interface InfiniteSliderProps {
  children: React.ReactNode;
  durationOnHover?: number;
  gap?: number;
}

export function InfiniteSlider({ children, durationOnHover = 100, gap = 16 }: InfiniteSliderProps) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div 
        className="flex animate-infinite-scroll hover:animation-paused"
        style={{
          gap: `${gap}px`,
          animationDuration: `${durationOnHover}s`
        }}
      >
        {children}
        {children} {/* Duplicate for infinite effect */}
      </div>
    </div>
  );
}
