import { motion, useTransform } from 'motion/react';
import { useFlowField, getElementState } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

const features = [
  'Full-body motion understanding',
  'Real-time posture mapping',
  'No wearables',
  'Camera-native',
  'Developer extensible',
];

export function FloatingFeatures() {
  const { scrollProgress } = useFlowField();
  
  return (
    <div className="relative min-h-[300vh] pointer-events-none">
      {/* Features float in continuous space */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {features.map((feature, index) => (
            <FloatingFeature
              key={feature}
              text={feature}
              index={index}
              total={features.length}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingFeature({
  text,
  index,
  total,
  scrollProgress,
}: {
  text: string;
  index: number;
  total: number;
  scrollProgress: any;
}) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);
  
  // Define when this feature is "in focus"
  const featureStart = 0.15 + (index / total) * 0.4; // Features start appearing after hero drifts
  const featureEnd = 0.15 + ((index + 1) / total) * 0.4;
  const featureCenter = (featureStart + featureEnd) / 2;
  
  // Calculate distance from focus band
  const distance = Math.abs(progress - featureCenter);
  const focusDistance = Math.min(distance * 8, 1);
  
  const state = getElementState(focusDistance);
  
  // Vertical position - features drift through space
  const baseY = -100 + index * 60;
  const y = baseY + state.drift;
  
  // Horizontal drift - subtle
  const x = state.drift * 0.5 * (index % 2 === 0 ? 1 : -1);
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2"
      style={{
        y,
        x,
        opacity: state.opacity,
        scale: state.scale,
        filter: `blur(${state.blur}px)`,
      }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl text-[#E6E8EC] tracking-tight whitespace-nowrap">
        {text}
      </div>
      
      {/* Subtle line indicator when in focus */}
      <motion.div
        className="h-px mt-4 bg-gradient-to-r from-transparent via-[#5B6CFF] to-transparent"
        style={{
          opacity: 1 - focusDistance,
          scaleX: 1 - focusDistance * 0.5,
        }}
      />
    </motion.div>
  );
}
