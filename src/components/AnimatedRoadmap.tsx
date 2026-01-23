import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

const items = [
  { label: 'Alpha', status: 'done' },
  { label: 'Beta', status: 'progress' },
  { label: 'Public release', status: 'planned' },
  { label: 'SDK expansion', status: 'planned' },
  { label: 'Platform partnerships', status: 'planned' },
];

export function AnimatedRoadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Roadmap" />
        </motion.div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="flex-shrink-0 w-6 h-6 rounded-full border border-[#1F2937] flex items-center justify-center relative z-10 bg-[#0F172A]"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {item.status === 'done' && (
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#10B981]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  />
                )}
                {item.status === 'progress' && (
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#4F46E5]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(79, 70, 229, 0.4)',
                        '0 0 0 4px rgba(79, 70, 229, 0)',
                      ],
                    }}
                    style={{
                      transition: 'all 1.5s',
                    }}
                  />
                )}
              </motion.div>
              
              <motion.span
                className={`text-lg ${item.status === 'planned' ? 'text-[#9CA3AF]' : 'text-[#E5E7EB]'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              >
                {item.label}
              </motion.span>
              
              {/* Connector line */}
              {index < items.length - 1 && (
                <motion.div
                  className="absolute left-[11px] top-6 w-0.5 h-4 bg-[#1F2937]"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
