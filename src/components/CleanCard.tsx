import { ReactNode } from 'react';

interface CleanCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function CleanCard({ children, className = '', hover = false }: CleanCardProps) {
  return (
    <div className={`bg-[#111827] border border-[#1F2937] rounded-lg p-6 ${hover ? 'hover:border-[#374151] transition-colors duration-200' : ''} ${className}`}>
      {children}
    </div>
  );
}
