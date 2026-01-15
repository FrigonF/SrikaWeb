import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';
import { MotionCard } from './MotionCard';

const features = [
  'Full-body motion input',
  'AI pose recognition',
  'Real-time response',
  'Works with standard cameras',
  'Custom control profiles',
  'Developer SDK',
  'Privacy-first design',
  'Scales from gaming to enterprise',
];

export function MotionFeatures() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Features" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <MotionCard key={index} delay={index * 0.05}>
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                />
                <span className="text-lg text-[#E5E7EB]">{feature}</span>
              </motion.div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
