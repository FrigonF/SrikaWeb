import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

const steps = [
  'Camera captures posture',
  'AI extracts keypoints',
  'Motion mapped to intent',
  'System responds instantly',
];

export function AnimatedHowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="How It Works" />
        </motion.div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.21, 0.45, 0.27, 0.9]
              }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-md bg-[#111827] border border-[#1F2937] flex items-center justify-center relative overflow-hidden"
                whileHover={{ 
                  borderColor: '#4F46E5',
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                />
                <span className="text-[#4F46E5] font-mono text-sm relative z-10">{index + 1}</span>
              </motion.div>
              
              <motion.div 
                className="flex-1 pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
              >
                <p className="text-lg text-[#E5E7EB]">{step}</p>
              </motion.div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-[29px] w-0.5 h-6 bg-gradient-to-b from-[#4F46E5]/50 to-transparent"
                  style={{ marginTop: '50px' }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.3,
                    ease: 'easeOut'
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
