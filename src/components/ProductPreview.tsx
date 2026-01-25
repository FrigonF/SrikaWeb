import { motion, useInView, useMotionValue, useSpring, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Number counter component
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isDark } = useTheme();

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 1.5, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(1) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.div 
      ref={ref} 
      className="text-4xl font-bold"
      animate={{
        color: isDark ? '#ffffff' : '#000000'
      }}
    >
      0{suffix}
    </motion.div>
  );
}

export function ProductPreview() {
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true, margin: "-100px" });
  const { isDark } = useTheme();

  return (
    <motion.section 
      id="product" 
      className="py-32"
      animate={{
        backgroundColor: isDark ? '#0a0a0a' : '#ffffff'
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
            DASHBOARD
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Real-Time Control Center
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Monitor and configure your motion input system with precision
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            className="relative rounded-3xl border-2 overflow-hidden"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
            }}
            whileHover={{
              boxShadow: isDark 
                ? "0 30px 80px rgba(255,107,53,0.15)" 
                : "0 30px 80px rgba(0,0,0,0.12)",
              transition: { duration: 0.4 }
            }}
          >
            {/* Dashboard mockup */}
            <div className="p-8">
              {/* Header */}
              <motion.div 
                className="flex items-center justify-between mb-8 pb-6 border-b-2"
                animate={{
                  borderBottomColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5'
                }}
              >
                <div>
                  <motion.div 
                    className="text-xs mb-2 uppercase tracking-wide"
                    animate={{
                      color: isDark ? '#999999' : '#666666'
                    }}
                  >
                    Live Session
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#FF6B35]"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.span 
                      className="font-bold"
                      animate={{
                        color: isDark ? '#ffffff' : '#000000'
                      }}
                    >
                      Active
                    </motion.span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA' 
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="px-6 py-2 border-2 rounded-full text-sm font-medium"
                    animate={{
                      backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                  >
                    Calibrate
                  </motion.button>
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#FF6B35", 
                      borderColor: "#FF6B35",
                      boxShadow: "0 8px 25px rgba(255,107,53,0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="px-6 py-2 border-2 rounded-full text-sm font-medium"
                    animate={{
                      backgroundColor: isDark ? '#ffffff' : '#000000',
                      color: isDark ? '#000000' : '#ffffff',
                      borderColor: isDark ? '#ffffff' : '#000000'
                    }}
                  >
                    Start Recording
                  </motion.button>
                </div>
              </motion.div>

              {/* Main content grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Camera view */}
                <motion.div 
                  className="aspect-video border-2 rounded-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#F8F9FA',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
                  }}
                  whileHover={{
                    borderColor: "#FF6B35",
                    transition: { duration: 0.3 }
                  }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                    {/* Skeleton overlay */}
                    <motion.circle 
                      cx="100" 
                      cy="60" 
                      r="15" 
                      fill="none" 
                      strokeWidth="2"
                      animate={{
                        stroke: isDark ? '#ffffff' : '#000000'
                      }}
                    />
                    <motion.line 
                      x1="100" 
                      y1="75" 
                      x2="100" 
                      y2="120" 
                      strokeWidth="2"
                      animate={{
                        stroke: isDark ? '#ffffff' : '#000000'
                      }}
                    />
                    <motion.line 
                      x1="100" 
                      y1="90" 
                      x2="70" 
                      y2="110" 
                      strokeWidth="2"
                      animate={{
                        stroke: isDark ? '#ffffff' : '#000000'
                      }}
                    />
                    <motion.line 
                      x1="100" 
                      y1="90" 
                      x2="130" 
                      y2="110" 
                      strokeWidth="2"
                      animate={{
                        stroke: isDark ? '#ffffff' : '#000000'
                      }}
                    />
                    <motion.line 
                      x1="100" 
                      y1="120" 
                      x2="80" 
                      y2="160" 
                      strokeWidth="2"
                      animate={{
                        stroke: isDark ? '#ffffff' : '#000000'
                      }}
                    />
                    <motion.line 
                      x1="100" 
                      y1="120" 
                      x2="120" 
                      y2="160" 
                      strokeWidth="2"
                      animate={{
                        stroke: isDark ? '#ffffff' : '#000000'
                      }}
                    />
                    
                    {/* Key points with glow - enhanced pulse */}
                    {[
                      [100, 60], [100, 90], [70, 110], [130, 110], [100, 120], [80, 160], [120, 160]
                    ].map(([x, y], i) => (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#FF6B35"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </svg>

                  {/* Corner accent */}
                  <motion.div 
                    className="absolute bottom-4 right-4 w-4 h-4 bg-[#FF6B35] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Stats */}
                <div className="space-y-4">
                  <motion.div 
                    ref={progressRef}
                    className="p-6 border-2 rounded-2xl relative overflow-hidden"
                    animate={{
                      backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
                    }}
                    whileHover={{
                      y: -4,
                      boxShadow: isDark 
                        ? "0 10px 30px rgba(255,107,53,0.2)" 
                        : "0 10px 30px rgba(0,0,0,0.08)",
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <motion.div 
                      className="absolute top-3 right-3 w-2 h-2 bg-[#FF6B35] rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="text-xs mb-2 uppercase tracking-wide"
                      animate={{
                        color: isDark ? '#999999' : '#666666'
                      }}
                    >
                      Tracking Confidence
                    </motion.div>
                    <AnimatedNumber value={98.7} suffix="%" />
                    <motion.div 
                      className="mt-3 h-3 rounded-full overflow-hidden"
                      animate={{
                        backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5'
                      }}
                    >
                      <motion.div 
                        className="h-full rounded-full relative overflow-hidden"
                        initial={{ width: "0%" }}
                        animate={{ 
                          width: isProgressInView ? "98.7%" : "0%",
                          backgroundColor: isDark ? '#ffffff' : '#000000'
                        }}
                        transition={{ 
                          duration: 1.5, 
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.3
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            x: ["-100%", "200%"],
                            background: isDark 
                              ? 'linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent)'
                              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="p-6 border-2 rounded-2xl"
                      animate={{
                        backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
                      }}
                      whileHover={{
                        y: -4,
                        boxShadow: isDark 
                          ? "0 10px 30px rgba(255,107,53,0.2)" 
                          : "0 10px 30px rgba(0,0,0,0.08)",
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      <motion.div 
                        className="text-xs mb-2 uppercase tracking-wide"
                        animate={{
                          color: isDark ? '#999999' : '#666666'
                        }}
                      >
                        Latency
                      </motion.div>
                      <motion.div 
                        className="text-3xl font-bold"
                        animate={{
                          color: isDark ? '#ffffff' : '#000000'
                        }}
                      >
                        8.2ms
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="p-6 border-2 rounded-2xl"
                      animate={{
                        backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
                      }}
                      whileHover={{
                        y: -4,
                        boxShadow: isDark 
                          ? "0 10px 30px rgba(255,107,53,0.2)" 
                          : "0 10px 30px rgba(0,0,0,0.08)",
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      <motion.div 
                        className="text-xs mb-2 uppercase tracking-wide"
                        animate={{
                          color: isDark ? '#999999' : '#666666'
                        }}
                      >
                        Keypoints
                      </motion.div>
                      <motion.div 
                        className="text-3xl font-bold"
                        animate={{
                          color: isDark ? '#ffffff' : '#000000'
                        }}
                      >
                        17/17
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
