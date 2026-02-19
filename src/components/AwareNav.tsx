import { motion } from 'motion/react';
import { useFlowField } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

export function AwareNav() {
  const { scrollProgress } = useFlowField();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);
  
  // Nav becomes less visible as you scroll deeper
  const opacity = 0.6 - progress * 0.4;
  
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 pointer-events-auto"
      style={{ opacity, zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-sm tracking-widest text-[#E6E8EC]">
          SRIKA
        </div>
        
        {/* Scroll indicator - subtle */}
        <div className="w-24 h-px bg-[#121826] relative overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-[#5B6CFF]"
            style={{
              width: `${progress * 100}%`,
            }}
          />
        </div>
      </div>
    </motion.nav>
  );
}
