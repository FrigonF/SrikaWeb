import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const phases = [
  {
    name: 'Alpha',
    status: 'active',
    date: 'Now',
    features: ['Core motion detection', 'Limited accuracy', 'Early adopters'],
    color: '#10B981',
  },
  {
    name: 'Beta',
    status: 'upcoming',
    date: 'Q2 2026',
    features: ['Improved models', 'Custom profiles', 'Multi-use support'],
    color: '#4F46E5',
  },
  {
    name: 'Public',
    status: 'future',
    date: 'Q4 2026',
    features: ['Full release', 'All platforms', 'Premium features'],
    color: '#8B5CF6',
  },
];

export function ProgressionTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  // Progress bar fills continuously
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Title always visible
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.7, 1, 1, 0.8]);

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-[#E5E7EB] text-center mb-20"
          style={{ opacity: titleOpacity }}
        >
          Product Timeline
        </motion.h2>

        {/* Progress bar - always visible */}
        <div className="relative mb-20">
          <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#10B981] via-[#4F46E5] to-[#8B5CF6]"
              style={{ width: progressBarWidth }}
            />
          </div>

          {/* Phase markers - all visible */}
          <div className="absolute top-0 left-0 right-0 flex justify-between -translate-y-1">
            {phases.map((phase, index) => {
              const markerPosition = (index / (phases.length - 1)) * 100;
              
              // Continuous scale based on progress
              const markerScale = useTransform(
                scrollYProgress,
                [
                  (index - 0.3) / phases.length,
                  index / phases.length,
                  (index + 0.3) / phases.length,
                ],
                [1, 1.5, 1]
              );
              
              const markerOpacity = useTransform(
                scrollYProgress,
                [
                  (index - 0.5) / phases.length,
                  index / phases.length,
                  (index + 0.5) / phases.length,
                ],
                [0.6, 1, 0.6]
              );

              return (
                <motion.div
                  key={index}
                  className="relative"
                  style={{ left: `${markerPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: phase.color,
                      scale: markerScale,
                      opacity: markerOpacity,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Phase cards - ALL ALWAYS VISIBLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, index) => {
            // Continuous scale - cards breathe
            const cardScale = useTransform(
              scrollYProgress,
              [
                (index - 0.3) / phases.length,
                index / phases.length,
                (index + 0.3) / phases.length,
              ],
              [0.96, 1, 0.96]
            );

            // Continuous opacity - never hidden
            const cardOpacity = useTransform(
              scrollYProgress,
              [
                (index - 0.5) / phases.length,
                index / phases.length,
                (index + 0.5) / phases.length,
              ],
              [0.6, 1, 0.7]
            );
            
            const borderGlow = useTransform(
              scrollYProgress,
              [
                (index - 0.3) / phases.length,
                index / phases.length,
                (index + 0.3) / phases.length,
              ],
              [0.3, 1, 0.3]
            );

            return (
              <motion.div
                key={index}
                className="bg-[#111827] border rounded-2xl p-6 relative overflow-hidden"
                style={{
                  scale: cardScale,
                  opacity: cardOpacity,
                  borderColor: useTransform(
                    borderGlow,
                    (v) => `rgba(${phase.color === '#10B981' ? '16, 185, 129' : phase.color === '#4F46E5' ? '79, 70, 229' : '139, 92, 246'}, ${0.2 + v * 0.6})`
                  ),
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${phase.color}15 0%, transparent 70%)`,
                    opacity: useTransform(borderGlow, [0.3, 1], [0, 0.5]),
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl text-[#E5E7EB]">{phase.name}</h3>
                    <span
                      className="text-sm px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${phase.color}20`,
                        color: phase.color,
                      }}
                    >
                      {phase.date}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {phase.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-[#9CA3AF] text-sm flex items-start gap-2"
                      >
                        <span style={{ color: phase.color }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full mt-6 px-4 py-3 rounded-lg border text-sm transition-colors"
                    style={{
                      borderColor: `${phase.color}40`,
                      color: phase.color,
                    }}
                  >
                    {phase.status === 'active' ? 'Get Access' : 'Join Waitlist'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
