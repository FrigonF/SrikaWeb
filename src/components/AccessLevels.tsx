import { motion } from 'motion/react';
import { useFlowField } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

const levels = [
  { name: 'Personal', weight: 1, y: 60 },
  { name: 'Advanced', weight: 2, y: 20 },
  { name: 'Professional', weight: 3, y: -20 },
  { name: 'Platform', weight: 4, y: -60 },
];

export function AccessLevels() {
  const { scrollProgress } = useFlowField();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);
  
  // Access levels at 0.82-0.90 of scroll
  const sectionStart = 0.82;
  const sectionEnd = 0.90;
  
  const localProgress = Math.max(0, Math.min(1, (progress - sectionStart) / (sectionEnd - sectionStart)));
  const distance = Math.abs(progress - ((sectionStart + sectionEnd) / 2));
  const sectionOpacity = Math.max(0.3, 1 - distance * 3);
  
  return (
    <div className="relative min-h-[200vh] pointer-events-none">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-4xl px-6"
          style={{ opacity: sectionOpacity }}
        >
          {/* Levels stack and gain structure as you scroll */}
          <div className="relative h-96">
            {levels.map((level, index) => {
              // Each level becomes clearer as scroll progresses
              const levelProgress = Math.max(0, Math.min(1, localProgress * 4 - index * 0.3));
              const levelOpacity = 0.3 + levelProgress * 0.7;
              const levelBlur = (1 - levelProgress) * 6;
              
              // Lower levels remain visible underneath
              const baseOpacity = 0.2 + index * 0.1;
              const finalOpacity = Math.max(baseOpacity, levelOpacity) * sectionOpacity;
              
              // Weight increases = more visual density
              const fontSize = 2.5 + level.weight * 0.5;
              
              return (
                <motion.div
                  key={level.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 whitespace-nowrap"
                  style={{
                    y: level.y,
                    opacity: finalOpacity,
                    filter: `blur(${levelBlur}px)`,
                  }}
                >
                  <div
                    className="text-[#E6E8EC] tracking-tight"
                    style={{ fontSize: `${fontSize}rem` }}
                  >
                    {level.name}
                  </div>
                  
                  {/* Subtle weight indicator */}
                  <motion.div
                    className="h-px mt-2 bg-gradient-to-r from-transparent via-[#5B6CFF] to-transparent"
                    style={{
                      opacity: levelProgress,
                      scaleX: level.weight * 0.25,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
          
          {/* Trust signal */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm text-[#E6E8EC]/40"
            style={{ opacity: localProgress }}
          >
            Access scaled to intent
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
