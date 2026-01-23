import { motion, useAnimationControls } from 'motion/react';
import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function HeroSection() {
  const underlineControls = useAnimationControls();
  const { isDark } = useTheme();

  useEffect(() => {
    // Draw underline after headline appears
    underlineControls.start({
      pathLength: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
    });
  }, [underlineControls]);

  return (
    <motion.section
      className="relative pt-40 pb-32 md:pt-52 md:pb-48 overflow-hidden"
      animate={{
        backgroundColor: 'transparent'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Removed geometric background pattern to prevent obscuring VideoBackground */}

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with soft entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              scale: { type: "spring", stiffness: 200, damping: 15 }
            }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              animate={{
                backgroundColor: isDark ? 'rgba(255,107,53,0.15)' : '#FFE5DC',
                boxShadow: isDark ? '0 0 20px rgba(255,107,53,0.2)' : 'none'
              }}
              transition={{ duration: 1.2 }}
            >
              <motion.span
                className="w-2 h-2 bg-[#FF6B35] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.6, 1],
                  boxShadow: isDark
                    ? ['0 0 8px rgba(255,107,53,0.6)', '0 0 15px rgba(255,107,53,0.8)', '0 0 8px rgba(255,107,53,0.6)']
                    : 'none'
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span
                className="text-sm font-medium"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
                transition={{ duration: 1.2 }}
              >
                AI-Powered Motion Control
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Main Heading with staggered slide-up */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              color: isDark ? '#ffffff' : '#000000'
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight"
          >
            The Body-Native
            <br />
            <span className="relative inline-block">
              Interface
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 20"
                fill="none"
              >
                <motion.path
                  d="M0 10 Q 200 20 400 10"
                  stroke="#FF6B35"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={underlineControls}
                  style={{
                    pathLength: 0,
                    filter: isDark ? 'drop-shadow(0 0 8px rgba(255,107,53,0.6))' : 'none'
                  }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              color: isDark ? '#999999' : '#666666'
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3
            }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform human posture into real-time digital input using AI-powered motion understanding. No controllers. No barriers. Just movement.
          </motion.p>

          {/* CTA Buttons with confident scale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: isDark
                  ? "0 10px 40px rgba(255,107,53,0.4)"
                  : "0 10px 40px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group px-10 py-5 font-medium rounded-full text-center inline-flex items-center gap-2"
              animate={{
                backgroundColor: isDark ? '#FF6B35' : '#000000',
                color: isDark ? '#000000' : '#ffffff'
              }}
            >
              Get Started
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{
                scale: 1.05,
                backgroundColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#000000' : '#ffffff'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-10 py-5 border-2 font-medium rounded-full text-center"
              animate={{
                borderColor: isDark ? 'rgba(255,255,255,0.2)' : '#000000',
                color: isDark ? '#ffffff' : '#000000'
              }}
            >
              View Pricing
            </motion.a>
          </motion.div>

          {/* Visual representation with layered entrance */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5
            }}
            className="mt-20 relative"
          >
            {/* Main circle with skeleton */}
            <motion.div
              className="relative mx-auto w-80 h-80 rounded-full border-2 p-8"
              animate={{
                borderColor: isDark ? 'rgba(255,255,255,0.2)' : '#000000',
                boxShadow: isDark
                  ? [
                    "0 0 40px rgba(255,107,53,0.1)",
                    "0 0 60px rgba(255,107,53,0.2)",
                    "0 0 40px rgba(255,107,53,0.1)"
                  ]
                  : [
                    "0 0 0 0 rgba(0,0,0,0.05)",
                    "0 0 40px 0 rgba(0,0,0,0.08)",
                    "0 0 0 0 rgba(0,0,0,0.05)"
                  ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Inner circles with gentle pulse */}
              <motion.div
                className="absolute inset-8 rounded-full border"
                animate={{
                  scale: [1, 1.01, 1],
                  borderColor: isDark ? 'rgba(255,255,255,0.05)' : '#E5E5E5'
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border"
                animate={{
                  scale: [1, 1.02, 1],
                  borderColor: isDark ? 'rgba(255,255,255,0.05)' : '#E5E5E5'
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Skeleton figure */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full p-12"
              >
                {/* Head */}
                <motion.circle
                  cx="100"
                  cy="50"
                  r="15"
                  fill="none"
                  strokeWidth="2"
                  animate={{
                    stroke: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                />
                {/* Body */}
                <motion.line
                  x1="100"
                  y1="65"
                  x2="100"
                  y2="120"
                  strokeWidth="2"
                  animate={{
                    stroke: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                />
                {/* Arms */}
                <motion.line
                  x1="100"
                  y1="80"
                  x2="70"
                  y2="100"
                  strokeWidth="2"
                  animate={{
                    stroke: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                />
                <motion.line
                  x1="100"
                  y1="80"
                  x2="130"
                  y2="100"
                  strokeWidth="2"
                  animate={{
                    stroke: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                />
                {/* Legs */}
                <motion.line
                  x1="100"
                  y1="120"
                  x2="80"
                  y2="155"
                  strokeWidth="2"
                  animate={{
                    stroke: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                />
                <motion.line
                  x1="100"
                  y1="120"
                  x2="120"
                  y2="155"
                  strokeWidth="2"
                  animate={{
                    stroke: isDark ? '#ffffff' : '#000000'
                  }}
                  transition={{ duration: 1.2 }}
                />

                {/* Motion points with soft glow pulse */}
                {[
                  { cx: 100, cy: 50, delay: 0 },
                  { cx: 70, cy: 100, delay: 0.2 },
                  { cx: 130, cy: 100, delay: 0.4 },
                  { cx: 80, cy: 155, delay: 0.6 },
                  { cx: 120, cy: 155, delay: 0.8 }
                ].map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.cx}
                    cy={point.cy}
                    r="4"
                    fill="#FF6B35"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.8, 1, 0.8],
                      filter: isDark
                        ? ['drop-shadow(0 0 4px rgba(255,107,53,0.8))', 'drop-shadow(0 0 8px rgba(255,107,53,1))', 'drop-shadow(0 0 4px rgba(255,107,53,0.8))']
                        : 'none'
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: point.delay
                    }}
                  />
                ))}
              </svg>

              {/* Accent dot with gentle float */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full"
                animate={{
                  y: [0, -4, 0],
                  boxShadow: isDark
                    ? ['0 0 15px rgba(255,107,53,0.6)', '0 0 25px rgba(255,107,53,0.8)', '0 0 15px rgba(255,107,53,0.6)']
                    : 'none'
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Floating metrics with staggered entrance and breathing animation */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.7
              }}
            >
              <motion.div
                className="absolute top-10 -left-10 border-2 rounded-2xl px-4 py-3 shadow-lg"
                animate={{
                  backgroundColor: isDark ? 'rgba(20,20,20,0.8)' : '#ffffff',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                  boxShadow: isDark
                    ? '0 8px 32px rgba(255,107,53,0.2)'
                    : '0 4px 20px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="text-xs"
                    animate={{
                      color: isDark ? '#999999' : '#666666'
                    }}
                    transition={{ duration: 1.2 }}
                  >
                    Latency
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold"
                    animate={{
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                    transition={{ duration: 1.2 }}
                  >
                    {"<"}10ms
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8
              }}
            >
              <motion.div
                className="absolute bottom-10 -right-10 border-2 rounded-2xl px-4 py-3 shadow-lg"
                animate={{
                  backgroundColor: isDark ? 'rgba(20,20,20,0.8)' : '#ffffff',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                  boxShadow: isDark
                    ? '0 8px 32px rgba(255,107,53,0.2)'
                    : '0 4px 20px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <motion.div
                    className="text-xs"
                    animate={{
                      color: isDark ? '#999999' : '#666666'
                    }}
                    transition={{ duration: 1.2 }}
                  >
                    Precision
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold"
                    animate={{
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                    transition={{ duration: 1.2 }}
                  >
                    99.8%
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}