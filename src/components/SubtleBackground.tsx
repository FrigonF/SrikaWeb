interface SubtleBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function SubtleBackground({ className = '', children }: SubtleBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Very subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B]/30 to-[#0F172A] opacity-50" />
      
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}
