import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionCard({ children, className = '', delay = 0 }: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 0.45, 0.27, 0.9]
      }}
      whileHover={{ 
        y: -4,
        scale: 1.01,
        transition: { duration: 0.3 }
      }}
      className={`bg-[#111827] border border-[#1F2937] rounded-lg p-6 transition-colors duration-300 hover:border-[#374151] ${className}`}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
        }}
      />
      {children}
    </motion.div>
  );
}
