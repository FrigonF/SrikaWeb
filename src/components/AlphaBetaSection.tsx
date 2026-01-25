import { motion, useInView } from 'motion/react';
import { Check, Clock } from 'lucide-react';
import { useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function AlphaBetaSection() {
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true, margin: "-100px" });
  const { isDark } = useTheme();

  return (
    <motion.section
      id="alpha-beta"
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
            EARLY ACCESS
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Alpha & Beta Programs
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Join early and shape the future of motion input
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {/* Alpha */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -6,
              boxShadow: isDark
                ? "0 20px 60px rgba(255,107,53,0.15)"
                : "0 20px 60px rgba(0,0,0,0.08)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="p-10 border-2 rounded-3xl relative"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
            }}
          >
            <motion.div
              className="absolute top-6 right-6 w-3 h-3 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                backgroundColor: isDark ? '#ffffff' : '#000000'
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                animate={{
                  backgroundColor: isDark ? '#ffffff' : '#000000'
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Check
                  className="w-6 h-6"
                  strokeWidth={3}
                  style={{ color: isDark ? '#000000' : '#ffffff' }}
                />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                Alpha
              </motion.h3>
            </div>

            <div className="mb-8">
              <motion.div
                className="inline-block px-4 py-2 border rounded-full text-sm font-medium"
                animate={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                Completed
              </motion.div>
            </div>

            <ul className="space-y-4">
              {[
                'Core motion detection',
                'Early accuracy testing',
                'Limited developer access'
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  animate={{
                    color: isDark ? '#999999' : '#666666'
                  }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    animate={{
                      backgroundColor: isDark ? '#ffffff' : '#000000'
                    }}
                  >
                    <Check
                      className="w-3 h-3"
                      strokeWidth={3}
                      style={{ color: isDark ? '#000000' : '#ffffff' }}
                    />
                  </motion.div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Beta - stays elevated */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            animate={{
              y: [-3, -6, -3],
              backgroundColor: isDark ? '#ffffff' : '#000000',
              borderColor: isDark ? '#ffffff' : '#000000'
            }}
            style={{ y: -4 }}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: isDark
                ? "0 25px 70px rgba(255,255,255,0.2)"
                : "0 25px 70px rgba(0,0,0,0.18)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="p-10 border-2 rounded-3xl relative shadow-2xl"
          >
            <motion.div
              className="absolute top-6 right-6 w-3 h-3 bg-[#FF6B35] rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  backgroundColor: isDark ? '#000000' : '#ffffff'
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Clock
                  className="w-6 h-6"
                  strokeWidth={2.5}
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold"
                animate={{
                  color: isDark ? '#000000' : '#ffffff'
                }}
              >
                Beta
              </motion.h3>
            </div>

            <div className="mb-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35] rounded-full text-sm font-medium text-white"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255,107,53,0.4)",
                    "0 0 0 8px rgba(255,107,53,0)",
                    "0 0 0 0 rgba(255,107,53,0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    backgroundColor: isDark ? '#000000' : '#ffffff'
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Active Now
              </motion.div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Improved AI models',
                'Custom gesture profiles',
                'Wider platform support'
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                  animate={{
                    color: isDark ? '#666666' : '#E5E5E5'
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF6B35",
                borderColor: "#FF6B35",
                boxShadow: "0 8px 25px rgba(255,107,53,0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="block w-full px-6 py-4 font-medium rounded-full text-center border-2"
              animate={{
                backgroundColor: isDark ? '#000000' : '#ffffff',
                color: isDark ? '#ffffff' : '#000000',
                borderColor: isDark ? '#000000' : '#ffffff'
              }}
            >
              Request Beta Access
            </motion.a>
          </motion.div>
        </div>

        {/* Progress indicator with animated fill */}
        <motion.div
          ref={progressRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            className="relative h-4 rounded-full overflow-hidden border-2"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#E5E5E5',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
            }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: isProgressInView ? "60%" : "0%",
                backgroundColor: isDark ? '#ffffff' : '#000000'
              }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B35] rounded-full"
              initial={{ left: "0%" }}
              animate={isProgressInView ? { left: "58%" } : {}}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,107,53,0.6))"
              }}
            />
          </motion.div>
          <div className="flex justify-between mt-6 text-sm font-medium">
            <motion.span
              animate={{
                color: isDark ? '#ffffff' : '#000000'
              }}
            >
              Alpha Complete
            </motion.span>
            <span className="text-[#FF6B35]">Beta In Progress</span>
            <motion.span
              animate={{
                color: isDark ? '#666666' : '#666666'
              }}
            >
              Public Release
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
