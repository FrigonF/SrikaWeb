import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function QuietAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const paragraphs = [
    'Built by a solo founder focused on correctness over hype.',
    'SRIKA started with a simple question: what if the most natural input device is the one you already have? After years of research and development, we\'ve created an AI system that understands human movement with precision.',
    'No marketing fluff. No unrealistic promises. Just a working system that does what it says.',
  ];

  // Continuous opacity - never hidden
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <section ref={ref} id="about" className="py-32 px-6 bg-[#0F172A]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-[#E5E7EB] text-center mb-16"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          About
        </motion.h2>

        <div className="space-y-8">
          {paragraphs.map((text, index) => {
            // Each paragraph flows in continuously
            const paragraphOpacity = useTransform(
              scrollYProgress,
              [0.1 + index * 0.15, 0.3 + index * 0.15, 0.7, 1],
              [0.6, 1, 1, 0.8]
            );
            
            const paragraphY = useTransform(
              scrollYProgress,
              [0.1 + index * 0.15, 0.3 + index * 0.15],
              [30, 0]
            );

            return (
              <motion.p
                key={index}
                className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed text-center"
                style={{ opacity: paragraphOpacity, y: paragraphY }}
              >
                {text}
              </motion.p>
            );
          })}
        </div>

        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.7], [0.3, 1]),
            scaleX: useTransform(scrollYProgress, [0.5, 0.7], [0.5, 1]),
          }}
        />
      </div>
    </section>
  );
}
