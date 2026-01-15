import { motion } from 'motion/react';

export function ProductPreview() {
  return (
    <section id="product" className="py-24 bg-[#111827]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            The SRIKA Dashboard
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Monitor and configure your motion input system in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl bg-[#0F172A] border border-[#1F2937] overflow-hidden">
            {/* Dashboard mockup */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-sm text-[#9CA3AF] mb-1">Live Session</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[#E5E7EB]">Active</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-[#111827] border border-[#1F2937] rounded-lg text-sm text-[#E5E7EB]">
                    Calibrate
                  </div>
                  <div className="px-4 py-2 bg-[#4F46E5] rounded-lg text-sm text-white">
                    Start Recording
                  </div>
                </div>
              </div>

              {/* Main content grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Camera view */}
                <div className="aspect-video bg-[#111827] border border-[#1F2937] rounded-xl flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                    {/* Skeleton overlay */}
                    <circle cx="100" cy="60" r="15" fill="none" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="100" y1="75" x2="100" y2="120" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="100" y1="90" x2="70" y2="110" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="100" y1="90" x2="130" y2="110" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="100" y1="120" x2="80" y2="160" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="100" y1="120" x2="120" y2="160" stroke="#4F46E5" strokeWidth="2" />
                    
                    {/* Key points with glow */}
                    {[
                      [100, 60], [100, 90], [70, 110], [130, 110], [100, 120], [80, 160], [120, 160]
                    ].map(([x, y], i) => (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#4F46E5"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="p-4 bg-[#111827] border border-[#1F2937] rounded-xl">
                    <div className="text-sm text-[#9CA3AF] mb-1">Tracking Confidence</div>
                    <div className="text-2xl font-bold text-[#E5E7EB]">98.7%</div>
                    <div className="mt-2 h-2 bg-[#0F172A] rounded-full overflow-hidden">
                      <div className="h-full w-[98.7%] bg-[#10B981] rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 bg-[#111827] border border-[#1F2937] rounded-xl">
                    <div className="text-sm text-[#9CA3AF] mb-1">Latency</div>
                    <div className="text-2xl font-bold text-[#E5E7EB]">8.2ms</div>
                  </div>

                  <div className="p-4 bg-[#111827] border border-[#1F2937] rounded-xl">
                    <div className="text-sm text-[#9CA3AF] mb-1">Detected Keypoints</div>
                    <div className="text-2xl font-bold text-[#E5E7EB]">17/17</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
