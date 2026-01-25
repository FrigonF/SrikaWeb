import { motion, useAnimationControls } from 'motion/react';
import { Camera, Cpu, Repeat, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
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
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            HOW IT WORKS
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Four Simple Steps
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            From body movement to digital action
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative text-center"
            >
              {/* Large step number background */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold leading-none pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15 + 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                animate={{
                  color: isDark ? 'rgba(255,255,255,0.03)' : '#F8F9FA'
                }}
              >
                {index + 1}
              </motion.div>

              {/* Content */}
              <div className="relative">
                {/* Animated icon circle */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      scale: { type: 'spring', stiffness: 400, damping: 15 },
                      rotate: { duration: 0.5 },
                    },
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 relative"
                  animate={{
                    backgroundColor: isDark ? '#ffffff' : '#000000'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  >
                    <motion.div
                      animate={{
                        color: isDark ? '#000000' : '#ffffff'
                      }}
                    >
                      <step.icon className="w-10 h-10" />
                    </motion.div>
                  </motion.div>
                  {/* Accent dot with float */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B35] rounded-full"
                    animate={{
                      y: [0, -3, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.4,
                    }}
                  />
                </motion.div>

                <motion.h3
                  className="text-xl font-bold mb-3"
                  animate={{
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-sm leading-relaxed"
                  animate={{
                    color: isDark ? '#999999' : '#666666'
                  }}
                >
                  {step.description}
                </motion.p>
              </div>

              {/* Arrow connector (except for last item) - draws itself */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[65%] w-[70%]">
                  <svg className="w-full h-4" viewBox="0 0 100 20" fill="none">
                    <motion.path
                      d="M0 10 L90 10 M85 5 L90 10 L85 15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        isVisible
                          ? {
                            pathLength: 1,
                            opacity: 1,
                            stroke: isDark ? '#ffffff' : '#000000'
                          }
                          : { stroke: isDark ? '#ffffff' : '#000000' }
                      }
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15 + 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}