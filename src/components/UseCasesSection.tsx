import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Activity, Glasses, GraduationCap, Accessibility } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
  const { isDark } = useTheme();

  return (
    <motion.section
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
          className="text-center mb-16"
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
            USE CASES
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Built for Every Industry
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Body-native input for every application
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {useCases.map((useCase) => {
            const isActive = activeTab === useCase.id;
            return (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 border-2"
                animate={{
                  backgroundColor: isActive
                    ? (isDark ? '#ffffff' : '#000000')
                    : (isDark ? 'rgba(255,255,255,0.05)' : '#ffffff'),
                  color: isActive
                    ? (isDark ? '#000000' : '#ffffff')
                    : (isDark ? '#999999' : '#666666'),
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
                }}
              >
                {/* Active indicator with smooth slide */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full -z-10"
                    animate={{
                      backgroundColor: isDark ? '#ffffff' : '#000000'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.div
                  animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <useCase.icon className="w-5 h-5" />
                </motion.div>
                {useCase.label}
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="border-2 rounded-3xl p-12 text-center relative overflow-hidden"
              animate={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
              }}
              whileHover={{
                boxShadow: isDark
                  ? "0 20px 60px rgba(255,107,53,0.2)"
                  : "0 20px 60px rgba(0,0,0,0.08)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32">
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-[#FF6B35] rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    backgroundColor: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>

              <div className="relative">
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 relative"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{
                    rotate: 0,
                    scale: 1,
                    backgroundColor: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1
                  }}
                >
                  <motion.div
                    animate={{
                      color: isDark ? '#000000' : '#ffffff'
                    }}
                  >
                    <activeUseCase.icon className="w-12 h-12" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <motion.h3
                  className="text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ delay: 0.15 }}
                >
                  {activeUseCase.title}
                </motion.h3>
                <motion.p
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    color: isDark ? '#999999' : '#666666'
                  }}
                  transition={{ delay: 0.2 }}
                >
                  {activeUseCase.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}