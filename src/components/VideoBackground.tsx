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
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        style={{
          filter: `blur(3px) ${isDark ? 'invert(1) brightness(0.7)' : 'brightness(1)'}`,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
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

      {/* Dark vignette effect for dark mode */}
      {isDark && (
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.8) 100%)',
            pointerEvents: 'none'
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
