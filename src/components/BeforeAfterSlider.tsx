import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  zoom?: number;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage,
  beforeObjectPosition = "center",
  afterObjectPosition = "center",
  zoom = 1
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, onMouseMove, onTouchMove]);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none group"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover"
        style={{ 
          objectPosition: afterObjectPosition,
          transform: `scale(${zoom})`
        }}
      />
      
      {/* Before Image (Overlay with Clip Path) */}
      <img 
        src={beforeImage} 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover border-r-2 border-white/50"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          objectPosition: beforeObjectPosition,
          transform: `scale(${zoom})`
        }}
      />

      {/* Slider Line & Handle */}
      <div 
        className="absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary transition-transform group-hover:scale-110 active:scale-95">
          <div className="flex items-center justify-center text-primary">
            <ChevronLeft size={18} className="-mr-1" />
            <ChevronRight size={18} className="-ml-1" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/40 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-lg border border-white/10 pointer-events-none shadow-lg">
        Antes
      </div>
      <div className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-primary/60 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-lg border border-white/10 pointer-events-none shadow-lg">
        Depois
      </div>

      {/* Instructions Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
        <div className="bg-black/20 backdrop-blur-[2px] px-6 py-3 rounded-full text-white text-xs font-medium tracking-widest uppercase border border-white/20">
          Arraste para comparar
        </div>
      </div>
    </div>
  );
};
