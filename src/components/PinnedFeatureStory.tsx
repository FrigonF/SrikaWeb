import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import * as React from 'react';

const features = [
  {
    title: 'Motion Capture',
    description: 'Advanced AI extracts full-body skeletal data from any standard camera in real-time.',
    visual: (progress: number) => (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeDasharray="377"
          strokeDashoffset={377 * (1 - progress)}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="#10B981"
          strokeWidth="1"
          opacity={Math.max(0.3, progress)}
        />
      </svg>
    ),
  },
  {
    title: 'AI Pose Understanding',
    description: 'Neural networks trained on millions of human movements understand intent, not just position.',
    visual: (progress: number) => (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="100"
            y1="100"
            x2={100 + Math.cos((i * Math.PI) / 4) * 60}
            y2={100 + Math.sin((i * Math.PI) / 4) * 60}
            stroke="#4F46E5"
            strokeWidth="2"
            strokeDasharray="60"
            strokeDashoffset={60 * (1 - progress)}
            opacity={Math.max(0.3, progress)}
          />
        ))}
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="#4F46E5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    title: 'Real-Time Response',
    description: 'Sub-10ms latency from movement to digital action. Fast enough for competitive gaming.',
    visual: (progress: number) => (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.rect
          x="50"
          y="90"
          width={100 * Math.max(0.2, progress)}
          height="20"
          fill="url(#speedGradient)"
          rx="10"
        />
        <defs>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <motion.circle
          cx={50 + 100 * Math.max(0.2, progress)}
          cy="100"
          r="6"
          fill="#10B981"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    title: 'No Wearables',
    description: 'Works with equipment you already own. No suits, no sensors, no special hardware.',
    visual: (progress: number) => (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.path
          d="M 60 100 Q 100 60, 140 100 T 140 100"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="3"
          strokeDasharray="200"
          strokeDashoffset={200 * (1 - Math.max(0.1, progress))}
        />
        <motion.circle
          cx="100"
          cy="80"
          r={15 * Math.max(0.3, progress)}
          fill="#4F46E5"
          opacity={0.3}
        />
      </svg>
    ),
  },
];

export function PinnedFeatureStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={ref} className="relative" style={{ height: `${features.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text that morphs - ALL TEXT ALWAYS RENDERED */}
          <div className="relative h-96">
            {features.map((feature, index) => {
              // CONTINUOUS OPACITY - never goes to 0
              const opacity = useTransform(
                scrollYProgress,
                [
                  (index - 0.3) / features.length,
                  (index - 0.1) / features.length,
                  (index + 0.1) / features.length,
                  (index + 0.9) / features.length,
                  (index + 1.1) / features.length,
                ],
                [0.6, 0.7, 1, 0.7, 0.6]
              );

              // CONTINUOUS POSITION
              const y = useTransform(
                scrollYProgress,
                [
                  (index - 0.3) / features.length,
                  (index - 0.1) / features.length,
                  index / features.length,
                  (index + 0.9) / features.length,
                  (index + 1.1) / features.length,
                ],
                [40, 20, 0, -20, -40]
              );

              // CONTINUOUS SCALE
              const scale = useTransform(
                scrollYProgress,
                [
                  (index - 0.2) / features.length,
                  index / features.length,
                  (index + 1) / features.length,
                ],
                [0.96, 1, 0.96]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ opacity, y, scale }}
                >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#E5E7EB] mb-6 leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Visual that morphs - ALL VISUALS ALWAYS RENDERED */}
          <div className="relative h-96">
            {features.map((feature, index) => {
              const progress = useTransform(
                scrollYProgress,
                [index / features.length, (index + 1) / features.length],
                [0, 1]
              );
              
              // CONTINUOUS OPACITY - never 0
              const opacity = useTransform(
                scrollYProgress,
                [
                  (index - 0.3) / features.length,
                  (index - 0.1) / features.length,
                  (index + 0.1) / features.length,
                  (index + 0.9) / features.length,
                  (index + 1.1) / features.length,
                ],
                [0.6, 0.7, 1, 0.7, 0.6]
              );

              // CONTINUOUS SCALE
              const scale = useTransform(
                scrollYProgress,
                [
                  (index - 0.2) / features.length,
                  index / features.length,
                  (index + 1) / features.length,
                ],
                [0.96, 1, 0.96]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity, scale }}
                >
                  <FeatureVisual feature={feature} scrollProgress={progress} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ feature, scrollProgress }: { feature: typeof features[0]; scrollProgress: any }) {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);

  return (
    <div className="w-full h-full bg-[#111827] rounded-2xl border border-[#1F2937] flex items-center justify-center p-8">
      {feature.visual(progress)}
    </div>
  );
}