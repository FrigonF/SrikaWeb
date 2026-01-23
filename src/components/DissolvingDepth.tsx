import { motion } from 'motion/react';
import { useFlowField } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

const docKeywords = [
  'SDK',
  'API Reference',
  'Integration Guides',
  'WebSocket Protocol',
  'Pose Estimation Models',
  'Calibration',
  'Error Handling',
  'Performance Optimization',
];

export function DissolvingDepth() {
  const { scrollProgress } = useFlowField();
  const [progress, setProgress] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => {
      setProgress(v);
      
      // Auto-expand based on scroll position
      const sectionStart = 0.90;
      const sectionEnd = 0.95;
      const localProgress = (v - sectionStart) / (sectionEnd - sectionStart);
      
      if (localProgress > 0 && localProgress < 1) {
        const index = Math.floor(localProgress * docKeywords.length);
        setExpandedIndex(index);
      } else {
        setExpandedIndex(null);
      }
    });
  }, [scrollProgress]);
  
  // Docs at 0.90-0.95 of scroll
  const sectionStart = 0.90;
  const sectionEnd = 0.95;
  const distance = Math.abs(progress - ((sectionStart + sectionEnd) / 2));
  const sectionOpacity = Math.max(0.3, 1 - distance * 4);
  
  return (
    <div className="relative min-h-[150vh] pointer-events-none">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-3xl px-6"
          style={{ opacity: sectionOpacity }}
        >
          {/* Keywords that hint at depth */}
          <div className="space-y-6">
            {docKeywords.map((keyword, index) => {
              const isExpanded = expandedIndex === index;
              const keywordOpacity = isExpanded ? 1 : 0.4;
              const keywordBlur = isExpanded ? 0 : 2;
              
              return (
                <motion.div
                  key={keyword}
                  className="relative"
                  style={{
                    opacity: keywordOpacity * sectionOpacity,
                    filter: `blur(${keywordBlur}px)`,
                  }}
                >
                  <div className="text-2xl md:text-3xl text-[#E6E8EC] tracking-tight">
                    {keyword}
                  </div>
                  
                  {/* Expanding structure - only visible when focused */}
                  <motion.div
                    className="mt-2 text-sm text-[#E6E8EC]/60 overflow-hidden"
                    style={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="h-px w-full bg-[#5B6CFF]/20 mb-2" />
                    Documentation structure exists here
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Depth signal */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm text-[#E6E8EC]/40 text-center"
            style={{ opacity: sectionOpacity }}
          >
            There is depth here.
            <br />
            You don't need to see all of it now.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
