import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CleanHeading } from './CleanHeading';

const useCases = [
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Full-body control for immersive gameplay without traditional controllers.',
  },
  {
    id: 'fitness',
    title: 'Fitness',
    description: 'Real-time form analysis and posture tracking for workout optimization.',
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Professional simulation environments for medical and industrial training.',
  },
  {
    id: 'xr',
    title: 'XR',
    description: 'Enhanced extended reality experiences with natural body movement.',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'Alternative input methods for users with different abilities.',
  },
];

export function DynamicUseCases() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="use-cases" className="py-24 px-6 lg:px-8 bg-[#111827]/50 relative overflow-hidden">
      {/* Background tint that shifts per tab */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: `radial-gradient(circle at ${(activeTab + 1) * 20}% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 60%)`,
        }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Use Cases" />
        </motion.div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <motion.button
              key={useCase.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-md text-sm transition-colors relative ${
                activeTab === index
                  ? 'text-[#E5E7EB]'
                  : 'text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {useCase.title}
              
              {/* Active indicator line */}
              {activeTab === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F46E5]"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111827] border border-[#1F2937] rounded-lg p-8 text-center"
            >
              <motion.h3
                className="text-3xl text-[#E5E7EB] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {useCases[activeTab].title}
              </motion.h3>
              
              <motion.p
                className="text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {useCases[activeTab].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
