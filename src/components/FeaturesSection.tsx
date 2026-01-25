import { motion } from 'motion/react';
import { Activity, Camera, Zap, Watch, Code, Lock, Puzzle, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const features = [
  {
    icon: Activity,
    title: 'Full-body motion input',
    description: 'Track complete body movements with precision and accuracy in real-time.',
  },
  {
    icon: Zap,
    title: 'AI pose recognition',
    description: 'Advanced neural networks understand human posture and intent.',
  },
  {
    icon: Camera,
    title: 'Real-time response',
    description: 'Sub-10ms latency from movement to digital action.',
  },
  {
    icon: Watch,
    title: 'No wearables',
    description: 'Works with standard cameras. No sensors, suits, or special hardware.',
  },
  {
    icon: Camera,
    title: 'Camera-native',
    description: 'Built for any standard webcam or camera system.',
  },
  {
    icon: Puzzle,
    title: 'Custom mappings',
    description: 'Map any gesture to any action. Fully configurable.',
  },
  {
    icon: Code,
    title: 'SDK access',
    description: 'Full developer access with comprehensive documentation.',
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    description: 'All processing happens locally. Your data stays with you.',
  },
];

export function FeaturesSection() {
  const { isDark } = useTheme();

  return (
    <motion.section
      id="features"
      className="py-32"
      animate={{
        backgroundColor: 'transparent'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1 border rounded-full text-xs font-medium mb-6"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            FEATURES
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
            transition={{ duration: 1.2 }}
          >
            Built for Performance
          </motion.h2>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
            transition={{ duration: 1.2 }}
          >
            Everything you need to integrate full-body motion control into your applications.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: isDark
                  ? "0 20px 60px rgba(255,107,53,0.25)"
                  : "0 20px 60px rgba(0,0,0,0.12)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative p-8 border-2 rounded-3xl transition-colors duration-300"
              animate={{
                backgroundColor: isDark ? 'rgba(20,20,20,0.6)' : '#ffffff',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
              }}
            >
              {/* Accent corner with scale animation */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-[#FF6B35] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                  boxShadow: isDark
                    ? ['0 0 8px rgba(255,107,53,0.6)', '0 0 15px rgba(255,107,53,0.8)', '0 0 8px rgba(255,107,53,0.6)']
                    : 'none'
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />

              <motion.div
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  animate={{
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                >
                  <feature.icon className="w-10 h-10 group-hover:text-[#FF6B35] mb-6 transition-colors" />
                </motion.div>
              </motion.div>
              <motion.h3
                className="text-lg font-bold mb-3 transition-colors"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
                transition={{ duration: 1.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-sm transition-colors leading-relaxed"
                animate={{
                  color: isDark ? '#999999' : '#666666'
                }}
                transition={{ duration: 1.2 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}