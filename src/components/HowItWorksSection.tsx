import { motion } from 'motion/react';
import { Camera, Cpu, Repeat, Zap } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Camera captures posture',
    description: 'Standard camera captures your body movements in real-time.',
  },
  {
    icon: Cpu,
    title: 'AI extracts keypoints',
    description: 'Neural networks detect skeletal structure and joint positions.',
  },
  {
    icon: Repeat,
    title: 'Motion mapped to intent',
    description: 'Movements are translated into meaningful digital actions.',
  },
  {
    icon: Zap,
    title: 'System responds',
    description: 'Your applications react instantly to body-based input.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Four simple steps from body movement to digital action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] font-bold mb-4">
                {index + 1}
              </div>

              {/* Animated icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#0F172A] border border-[#1F2937] mb-4"
              >
                <step.icon className="w-8 h-8 text-[#4F46E5]" />
              </motion.div>

              <h3 className="text-lg font-semibold text-[#E5E7EB] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#9CA3AF]">
                {step.description}
              </p>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#4F46E5]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
