import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Activity, Glasses, GraduationCap, Accessibility } from 'lucide-react';

const useCases = [
  {
    id: 'gaming',
    label: 'Gaming',
    icon: Gamepad2,
    title: 'Full-Body Game Control',
    description: 'Control games with your entire body. Jump, duck, lean, and gesture for immersive gameplay without controllers.',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    icon: Activity,
    title: 'Interactive Fitness Training',
    description: 'Real-time form correction, rep counting, and personalized feedback during workouts and exercises.',
  },
  {
    id: 'xr',
    label: 'XR',
    icon: Glasses,
    title: 'Extended Reality Input',
    description: 'Natural body-based interaction for virtual and augmented reality experiences without handheld controllers.',
  },
  {
    id: 'training',
    label: 'Training',
    icon: GraduationCap,
    title: 'Professional Training',
    description: 'Simulate real-world scenarios for medical, industrial, and safety training with precise motion tracking.',
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    icon: Accessibility,
    title: 'Accessible Computing',
    description: 'Enable computer control through body movements for users with limited mobility or input options.',
  },
];

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState('gaming');
  const activeUseCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Body-native input for every application
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === useCase.id
                  ? 'bg-[#4F46E5] text-white'
                  : 'bg-[#111827] text-[#9CA3AF] border border-[#1F2937] hover:border-[#4F46E5]'
              }`}
            >
              <useCase.icon className="w-5 h-5" />
              {useCase.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <activeUseCase.icon className="w-16 h-16 text-[#4F46E5] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-[#E5E7EB] mb-4">
              {activeUseCase.title}
            </h3>
            <p className="text-lg text-[#9CA3AF]">
              {activeUseCase.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
