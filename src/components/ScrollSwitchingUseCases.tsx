import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const useCases = [
  {
    title: 'Gaming',
    description: 'Full-body control replaces traditional controllers. Lean, crouch, jump—your movements become in-game actions.',
    color: '#4F46E5',
    stat: '60 FPS',
  },
  {
    title: 'Fitness',
    description: 'Real-time form analysis corrects your posture. Every rep counted, every angle measured, every workout optimized.',
    color: '#10B981',
    stat: '98% Accuracy',
  },
  {
    title: 'XR',
    description: 'Enhanced extended reality with natural body movement. No controllers, no gloves, just intuitive interaction.',
    color: '#8B5CF6',
    stat: '<10ms Latency',
  },
  {
    title: 'Training',
    description: 'Professional simulation for medical and industrial training. Practice procedures with full motion tracking.',
    color: '#F59E0B',
    stat: 'Enterprise Ready',
  },
];

export function ScrollSwitchingUseCases() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Title always visible
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0.8, 0.6]);

  return (
    <section ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <motion.h2
            className="text-4xl md:text-5xl text-[#E5E7EB] text-center mb-16"
            style={{ opacity: titleOpacity }}
          >
            Built for Every Use Case
          </motion.h2>

          <div className="relative min-h-96">
            {/* ALL USE CASES ALWAYS RENDERED - just changing emphasis */}
            {useCases.map((useCase, index) => {
              const start = index / useCases.length;
              const end = (index + 1) / useCases.length;

              // CONTINUOUS OPACITY - never 0
              const opacity = useTransform(
                scrollYProgress,
                [
                  start - 0.15,
                  start - 0.05,
                  start + 0.05,
                  end - 0.05,
                  end + 0.05,
                ],
                [0.6, 0.7, 1, 1, 0.6]
              );

              // CONTINUOUS SCALE
              const scale = useTransform(
                scrollYProgress,
                [start - 0.1, start, end, end + 0.1],
                [0.96, 1, 1, 0.96]
              );

              // CONTINUOUS POSITION
              const y = useTransform(
                scrollYProgress,
                [start - 0.1, start, end, end + 0.1],
                [60, 0, 0, -60]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity, scale, y }}
                >
                  <div className="w-full">
                    {/* Background tint - always present */}
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-3xl blur-3xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${useCase.color}20 0%, transparent 70%)`,
                        opacity: useTransform(
                          scrollYProgress,
                          [start, (start + end) / 2, end],
                          [0.3, 1, 0.3]
                        ),
                      }}
                    />

                    <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-12 text-center">
                      <div
                        className="inline-block px-4 py-2 rounded-full text-sm mb-6"
                        style={{
                          backgroundColor: `${useCase.color}20`,
                          color: useCase.color,
                          border: `1px solid ${useCase.color}40`,
                        }}
                      >
                        {useCase.stat}
                      </div>

                      <h3 className="text-5xl md:text-6xl text-[#E5E7EB] mb-6">
                        {useCase.title}
                      </h3>

                      <p className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
                        {useCase.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="flex justify-center gap-2 mt-12">
                        {useCases.map((_, i) => (
                          <div
                            key={i}
                            className="w-12 h-1 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: i === index ? useCase.color : '#1F2937',
                              opacity: i === index ? 1 : 0.5,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
