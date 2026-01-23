import { motion, useTransform } from 'motion/react';
import { useFlowField } from '../contexts/FlowFieldContext';

export function PersistentHero() {
  const { scrollProgress } = useFlowField();
  
  // Hero never leaves - it drifts to become a reference point
  const x = useTransform(scrollProgress, [0, 0.15, 1], [0, -200, -200]);
  const y = useTransform(scrollProgress, [0, 0.15, 1], [0, -100, -100]);
  const scale = useTransform(scrollProgress, [0, 0.15, 1], [1, 0.5, 0.5]);
  const opacity = useTransform(scrollProgress, [0, 0.15, 0.3, 1], [1, 0.6, 0.4, 0.4]);
  
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      style={{ x, y, scale, opacity }}
    >
      <div className="text-center">
        {/* Main title - never disappears */}
        <h1 className="text-[8vw] leading-[0.9] tracking-tight text-[#E6E8EC] mb-8">
          SRIKA
        </h1>
        
        {/* Divider */}
        <div className="h-px w-32 mx-auto mb-6 bg-gradient-to-r from-transparent via-[#5B6CFF] to-transparent" />
        
        {/* Subtitle */}
        <p className="text-lg text-[#E6E8EC]/60 tracking-wide">
          Human motion as a native interface
        </p>
      </div>
    </motion.div>
  );
}
