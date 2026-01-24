import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface VideoBackgroundProps {
  src?: string;
  overlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function VideoBackground({
  src = "https://res.cloudinary.com/dxppo3qao/video/upload/v1769193680/Abstract_White_Background_4K_-_Motion_Graphics_Background_Loop_-_White_Video_Loop_-_Free_Stock_Footage_4K_1080p_h264_vhp2gi.mp4",
  overlay = true,
  className = '',
  children
}: VideoBackgroundProps) {
  const { isDark } = useTheme();

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-[1] ${className}`}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
        style={{
          filter: `blur(8px) ${isDark ? 'invert(1) brightness(0.7)' : 'brightness(1)'}`,
          transform: 'translate(-50%, -50%) scale(1.1)', // Prevents blur edges from showing
        }}
        src={src}
      />

      {/* Optional theme-aware overlay for better legibility */}
      {overlay && (
        <div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            background: isDark
              ? 'rgba(10, 10, 10, 0.4)'
              : 'rgba(255, 255, 255, 0.2)'
          }}
        />
      )}

      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
}
