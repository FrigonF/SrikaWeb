import { motion } from 'motion/react';
import { Activity, Camera, Zap, Watch, Code, Lock, Puzzle, Shield } from 'lucide-react';

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
  return (
    <section id="features" className="py-24 bg-[#0F172A]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Built for Performance
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Everything you need to integrate full-body motion control into your applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#111827] border border-[#1F2937] rounded-xl hover:border-[#4F46E5] hover:shadow-lg hover:shadow-[#4F46E5]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-[#4F46E5] mb-4" />
              <h3 className="text-lg font-semibold text-[#E5E7EB] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#9CA3AF]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
