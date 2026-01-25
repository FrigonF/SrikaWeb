import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

const paragraphs = [
  'Built by a solo founder focused on correctness over hype.',
  'SRIKA started with a simple question: what if the most natural input device is the one you already have? After years of research and development, we\'ve created an AI system that understands human movement with precision.',
  'No marketing fluff. No unrealistic promises. Just a working system that does what it says.',
];

export function BreathingAbout() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Slow gradient shift */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="About" />
        </motion.div>
        
        <motion.div
          className="bg-[#111827] border border-[#1F2937] rounded-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6 text-[#9CA3AF] leading-relaxed">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
          
          {/* Divider lines */}
          <motion.div
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
