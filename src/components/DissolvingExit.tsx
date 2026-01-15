import { motion } from 'motion/react';
import { useFlowField } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

export function DissolvingExit() {
  const { scrollProgress } = useFlowField();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);
  
  // Exit happens at 0.95-1.0 of scroll
  const exitStart = 0.95;
  const dissolveProgress = Math.max(0, (progress - exitStart) / (1 - exitStart));
  
  // Everything loses contrast and dissolves
  const opacity = 1 - dissolveProgress * 0.7;
  const blur = dissolveProgress * 12;
  const scale = 1 - dissolveProgress * 0.1;
  
  return (
    <div className="relative min-h-screen pointer-events-none">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="text-center space-y-8"
          style={{
            opacity,
            filter: `blur(${blur}px)`,
            scale,
          }}
        >
          {/* About - single paragraph */}
          <motion.div
            className="max-w-2xl px-6"
            style={{ opacity: Math.max(0.3, 1 - dissolveProgress) }}
          >
            <p className="text-lg md:text-xl text-[#E6E8EC]/80 leading-relaxed">
              SRIKA is built around a simple belief:
              human motion should be a first-class input, not an afterthought.
            </p>
          </motion.div>
          
          {/* Contact - minimal */}
          <motion.div
            className="space-y-4"
            style={{ opacity: Math.max(0.2, 0.8 - dissolveProgress) }}
          >
            <div className="text-sm uppercase tracking-widest text-[#E6E8EC]/40">
              Contact
            </div>
            <a
              href="mailto:hello@srika.ai"
              className="text-[#5B6CFF] hover:text-[#7CF5C8] transition-colors pointer-events-auto"
            >
              hello@srika.ai
            </a>
          </motion.div>
          
          {/* Final elements that fade to nothing */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full text-center space-y-2"
            style={{ opacity: Math.max(0, 0.4 - dissolveProgress) }}
          >
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#5B6CFF]/20 to-transparent" />
            <div className="text-xs text-[#E6E8EC]/20 tracking-widest">
              SRIKA {new Date().getFullYear()}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Background dissolves to pure void */}
        <motion.div
          className="absolute inset-0 bg-[#0B0F14] -z-10"
          style={{
            opacity: dissolveProgress,
          }}
        />
      </div>
    </div>
  );
}
