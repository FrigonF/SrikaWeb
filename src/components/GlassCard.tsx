import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'purple' | 'blue' | 'red' | 'none';
  video?: string;
}

export function GlassCard({ children, className = '', hover = true, glow = 'none', video }: GlassCardProps) {
  const hoverClass = hover ? 'glass-hover' : '';
  const glowClass = glow !== 'none' ? `glow-${glow}` : '';
  
  return (
    <div className={`glass ${hoverClass} ${glowClass} rounded-xl p-6 relative overflow-hidden ${className}`}>
      {video && (
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
