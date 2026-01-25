import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function AboutSection() {
  const { isDark } = useTheme();

  return (
    <motion.section
      id="about"
      className="py-32"
      animate={{
        backgroundColor: 'transparent'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-block px-4 py-1 border rounded-full text-xs font-medium mb-6"
              animate={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                color: isDark ? '#ffffff' : '#000000'
              }}
            >
              ABOUT
            </motion.div>
          </div>

          <motion.div
            className="border-2 rounded-3xl p-12 md:p-16 relative overflow-hidden"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
            }}
          >
            {/* Decorative corners */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-[#FF6B35] rounded-full" />
            <motion.div
              className="absolute bottom-6 left-6 w-3 h-3 rounded-full"
              animate={{
                backgroundColor: isDark ? '#ffffff' : '#000000'
              }}
            />

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center leading-tight"
              animate={{
                color: isDark ? '#ffffff' : '#000000'
              }}
            >
              About SRIKA
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed text-center"
              animate={{
                color: isDark ? '#999999' : '#666666'
              }}
            >
              SRIKA is built to make human motion a first-class digital input.
              We believe that the way we interact with technology should be as natural
              as the way we move in the real world.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
