import { motion } from 'motion/react';
import { useFlowField, getElementState } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

const phases = [
  { label: 'Alpha', status: 'Past', blur: 12, opacity: 0.4 },
  { label: 'Beta', status: 'Present', blur: 0, opacity: 1 },
  { label: 'Public', status: 'Future', blur: 6, opacity: 0.6 },
];

export function TimeDensity() {
  const { scrollProgress } = useFlowField();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);
  
  // Time density exists at 0.75-0.82 of scroll
  const sectionStart = 0.75;
  const sectionEnd = 0.82;
  const distance = Math.abs(progress - ((sectionStart + sectionEnd) / 2));
  const sectionOpacity = Math.max(0.3, 1 - distance * 3);
  
  return (
    <div className="relative min-h-[200vh] pointer-events-none">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-5xl px-6"
          style={{ opacity: sectionOpacity }}
        >
          {/* All phases exist simultaneously, just at different densities */}
          <div className="relative h-96">
            {phases.map((phase, index) => {
              const layerY = -60 + index * 60;
              const layerBlur = phase.blur + distance * 4;
              
              return (
                <motion.div
                  key={phase.label}
                  className="absolute left-0 right-0 text-center"
                  style={{
                    top: '50%',
                    y: layerY,
                    filter: `blur(${layerBlur}px)`,
                    opacity: phase.opacity * sectionOpacity,
                  }}
                >
                  <div className="text-6xl md:text-7xl text-[#E6E8EC] tracking-tight mb-2">
                    {phase.label}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-[#5B6CFF]">
                    {phase.status}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Subtle hint text */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm text-[#E6E8EC]/40 text-center"
            style={{ opacity: sectionOpacity }}
          >
            All states coexist
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
