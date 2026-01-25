import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ImmersiveDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // CONTINUOUS INTERPOLATION - dashboard always visible
  const dashboardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.7]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.15], [0.96, 1]);
  
  // Panels glow/recede continuously - never hidden
  const leftPanelGlow = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.5],
    [0.3, 1, 1, 0.3]
  );
  
  const centerGlow = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65, 0.75],
    [0.3, 1, 1, 0.3]
  );
  
  const rightPanelGlow = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 0.95],
    [0.3, 1, 1, 0.5]
  );

  return (
    <section ref={ref} className="relative h-[400vh] bg-[#0F172A]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="w-full max-w-7xl mx-auto px-6"
          style={{ opacity: dashboardOpacity, scale: dashboardScale }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] text-center mb-12">
            Live Control Interface
          </h2>

          <div className="grid grid-cols-12 gap-4 h-[600px]">
            {/* Left Panel - ALWAYS VISIBLE */}
            <motion.div
              className="col-span-12 lg:col-span-3 bg-[#111827] border rounded-2xl p-6 relative overflow-hidden"
              style={{
                borderColor: useTransform(leftPanelGlow, (v) => 
                  `rgba(79, 70, 229, ${0.2 + v * 0.6})`
                ),
                opacity: useTransform(leftPanelGlow, [0.3, 1], [0.7, 1]),
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 to-transparent"
                style={{ opacity: useTransform(leftPanelGlow, [0.3, 1], [0, 0.4]) }}
              />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-lg text-[#E5E7EB] mb-4">Settings</h3>
                
                {['Sensitivity', 'Smoothing', 'Deadzone'].map((label, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9CA3AF]">{label}</span>
                      <span className="text-[#E5E7EB]">{70 + i * 10}%</span>
                    </div>
                    <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#4F46E5] to-[#6366F1]"
                        style={{
                          width: `${70 + i * 10}%`,
                          opacity: useTransform(leftPanelGlow, [0.3, 1], [0.6, 1]),
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-4 space-y-2">
                  {['Camera', 'Audio', 'Haptics'].map((toggle, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-[#0F172A] rounded-lg"
                    >
                      <span className="text-sm text-[#9CA3AF]">{toggle}</span>
                      <div className="w-10 h-6 bg-[#4F46E5] rounded-full relative">
                        <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center - ALWAYS VISIBLE */}
            <motion.div
              className="col-span-12 lg:col-span-6 bg-[#111827] border rounded-2xl relative overflow-hidden flex items-center justify-center"
              style={{
                borderColor: useTransform(centerGlow, (v) => 
                  `rgba(16, 185, 129, ${0.2 + v * 0.6})`
                ),
                opacity: useTransform(centerGlow, [0.3, 1], [0.7, 1]),
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-transparent"
                style={{ opacity: useTransform(centerGlow, [0.3, 1], [0, 0.3]) }}
              />

              <svg viewBox="0 0 300 400" className="w-64 h-80">
                <g>
                  {/* Head */}
                  <motion.circle
                    cx="150"
                    cy="60"
                    r="25"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    style={{ opacity: centerGlow }}
                  />
                  {/* Body */}
                  <motion.line
                    x1="150" y1="85" x2="150" y2="220"
                    stroke="#10B981" strokeWidth="3"
                    style={{ opacity: centerGlow }}
                  />
                  {/* Arms */}
                  <motion.line x1="150" y1="110" x2="100" y2="160" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  <motion.line x1="150" y1="110" x2="200" y2="160" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  <motion.line x1="100" y1="160" x2="80" y2="210" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  <motion.line x1="200" y1="160" x2="220" y2="210" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  {/* Legs */}
                  <motion.line x1="150" y1="220" x2="120" y2="300" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  <motion.line x1="150" y1="220" x2="180" y2="300" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  <motion.line x1="120" y1="300" x2="115" y2="360" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />
                  <motion.line x1="180" y1="300" x2="185" y2="360" stroke="#10B981" strokeWidth="2" style={{ opacity: centerGlow }} />

                  {/* Pulsing joints - always visible */}
                  {[
                    [150, 60], [150, 85], [150, 110], [100, 160], [200, 160],
                    [80, 210], [220, 210], [150, 220], [120, 300], [180, 300],
                    [115, 360], [185, 360]
                  ].map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#10B981"
                      animate={{
                        r: [5, 7, 5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      style={{ opacity: centerGlow }}
                    />
                  ))}

                  {/* Focus ring */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="80"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    style={{ opacity: useTransform(centerGlow, [0.3, 1], [0, 0.5]) }}
                  />
                </g>
              </svg>

              <motion.div
                className="absolute bottom-4 left-4 right-4 flex justify-between text-sm"
                style={{ opacity: centerGlow }}
              >
                <span className="text-[#9CA3AF]">FPS: <span className="text-[#10B981]">60</span></span>
                <span className="text-[#9CA3AF]">Latency: <span className="text-[#10B981]">8ms</span></span>
              </motion.div>
            </motion.div>

            {/* Right Panel - ALWAYS VISIBLE */}
            <motion.div
              className="col-span-12 lg:col-span-3 bg-[#111827] border rounded-2xl p-6 relative overflow-hidden"
              style={{
                borderColor: useTransform(rightPanelGlow, (v) => 
                  `rgba(79, 70, 229, ${0.2 + v * 0.6})`
                ),
                opacity: useTransform(rightPanelGlow, [0.3, 1], [0.7, 1]),
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 to-transparent"
                style={{ opacity: useTransform(rightPanelGlow, [0.3, 1], [0, 0.4]) }}
              />

              <div className="relative z-10 space-y-4">
                <h3 className="text-lg text-[#E5E7EB] mb-4">Mappings</h3>

                {[
                  { gesture: 'Lean Left', action: '← Move' },
                  { gesture: 'Lean Right', action: '→ Move' },
                  { gesture: 'Crouch', action: 'Duck' },
                  { gesture: 'Jump', action: 'Jump' },
                  { gesture: 'Raise Arm', action: 'Action' },
                ].map((mapping, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-[#0F172A] rounded-lg"
                  >
                    <span className="text-sm text-[#9CA3AF]">{mapping.gesture}</span>
                    <span className="text-sm text-[#4F46E5]">{mapping.action}</span>
                  </div>
                ))}

                <button className="w-full mt-4 px-4 py-3 bg-[#4F46E5] text-white rounded-lg">
                  Add Custom
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
