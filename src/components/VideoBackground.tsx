interface VideoBackgroundProps {
  src?: string;
  overlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function VideoBackground({ src, overlay = true, className = '', children }: VideoBackgroundProps) {
  // Using placeholder gradient as fallback for video
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient background as placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0D12] via-purple-900/20 to-[#0A0D12] animate-gradient" />
      
      {/* Particle effect overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
          animation: 'float 8s ease-in-out infinite'
        }} />
      </div>
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0D12]/50 to-[#0A0D12]" />
      )}
      
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
