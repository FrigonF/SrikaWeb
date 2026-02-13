import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { VideoBackground } from '../components/VideoBackground';
import { Download, Apple, Monitor, Zap, ArrowDownRight, Sparkles, Cpu } from 'lucide-react';

function DownloadPageContent() {
  const { isDark } = useTheme();
  const [selectedOS, setSelectedOS] = useState<string | null>(null);
  const [hoveredOS, setHoveredOS] = useState<string | null>(null);

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: Monitor,
      gradient: 'from-blue-500 to-cyan-500',
      accent: '#0078D4',
      specs: 'Windows 10+',
      size: '248 MB',
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: Apple,
      gradient: 'from-slate-700 to-slate-900',
      accent: '#000000',
      specs: 'macOS 11+',
      size: '256 MB',
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      accent: '#FCC624',
      specs: 'Ubuntu 20.04+',
      size: '240 MB',
    },
  ];

  const features = [
    { title: 'Lightning Fast', desc: 'Optimized for speed' },
    { title: 'Lightweight', desc: 'Minimal resource usage' },
    { title: 'Always Updated', desc: 'Auto-sync enabled' },
    { title: 'Secure', desc: 'Enterprise encryption' },
  ];

  return (
    <motion.div
      className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <VideoBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="pt-24">
          {/* Header Section */}
          <section className="px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <motion.div className="mb-6 flex items-center justify-center gap-2">
                  <Sparkles size={24} className="text-orange-500" />
                  <span className={`text-sm font-semibold tracking-wider ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                    DOWNLOAD SRIKA
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
                  animate={{ color: isDark ? '#ffffff' : '#000000' }}
                >
                  Get the Power in Your Hands
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
                  animate={{ color: isDark ? '#aaaaaa' : '#444444' }}
                >
                  Experience real-time posture sensing and AI-powered body interface. Choose your platform and join thousands of power users.
                </motion.p>
              </motion.div>

              {/* Platform Selection Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {platforms.map((platform, idx) => {
                  const Icon = platform.icon;
                  const isSelected = selectedOS === platform.id;
                  const isHovered = hoveredOS === platform.id;

                  return (
                    <motion.div
                      key={platform.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.6 }}
                      onMouseEnter={() => setHoveredOS(platform.id)}
                      onMouseLeave={() => setHoveredOS(null)}
                    >
                      <motion.button
                        onClick={() => setSelectedOS(platform.id)}
                        className="w-full relative group cursor-pointer rounded-3xl overflow-hidden"
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ y: -12 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      >
                        {/* Background Gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100`}
                          transition={{ duration: 0.4 }}
                        />

                        {/* Border Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl"
                          animate={{
                            boxShadow: isHovered || isSelected
                              ? `0 0 40px ${platform.accent}40, inset 0 0 40px ${platform.accent}20`
                              : isDark
                                ? '0 0 0 1px rgba(255, 255, 255, 0.1)'
                                : '0 0 0 1px rgba(0, 0, 0, 0.1)',
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Content Container */}
                        <motion.div
                          className={`relative p-8 h-full rounded-3xl backdrop-blur-xl transition-all ${
                            isDark ? 'bg-black/40' : 'bg-white/40'
                          } ${isSelected || isHovered ? 'border border-white/30' : 'border border-white/10'}`}
                          animate={{
                            backgroundColor: isSelected
                              ? isDark
                                ? `${platform.accent}15`
                                : `${platform.accent}10`
                              : isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Icon */}
                          <motion.div
                            className="mb-8 inline-block p-4 rounded-2xl"
                            animate={{
                              backgroundColor: isHovered ? `${platform.accent}20` : 'rgba(255,255,255,0.05)',
                              scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon size={40} style={{ color: platform.accent }} />
                          </motion.div>

                          {/* Platform Name */}
                          <motion.h3
                            className="text-3xl font-black mb-4"
                            animate={{ color: isDark ? '#ffffff' : '#000000' }}
                          >
                            {platform.name}
                          </motion.h3>

                          {/* Specs */}
                          <motion.div
                            className="text-sm mb-6 space-y-2"
                            animate={{ color: isDark ? '#999999' : '#666666' }}
                          >
                            <p>{platform.specs}</p>
                            <p>{platform.size}</p>
                          </motion.div>

                          {/* Selection Indicator */}
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute top-6 right-6 w-3 h-3 rounded-full"
                                style={{ backgroundColor: platform.accent }}
                              />
                            )}
                          </AnimatePresence>

                          {/* Hover Arrow */}
                          <motion.div
                            className="absolute bottom-6 right-6 group-hover:translate-x-2"
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              y: isHovered ? 0 : 8,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowDownRight size={24} style={{ color: platform.accent }} />
                          </motion.div>
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Download Button */}
              <AnimatePresence mode="wait">
                {selectedOS ? (
                  <motion.div
                    key={selectedOS}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center mb-24"
                  >
                    <motion.button
                      className="px-12 py-6 rounded-full font-bold text-lg group relative overflow-hidden inline-flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: platforms.find(p => p.id === selectedOS)?.accent,
                        color: '#ffffff',
                        boxShadow: `0 0 30px ${platforms.find(p => p.id === selectedOS)?.accent}40`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: `0 0 60px ${platforms.find(p => p.id === selectedOS)?.accent}60`,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                        style={{ opacity: 0.2 }}
                      />
                      <Download size={24} className="relative z-10" />
                      <span className="relative z-10">
                        Download for {platforms.find(p => p.id === selectedOS)?.name}
                      </span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center mb-24"
                  >
                    <motion.p
                      className="text-lg"
                      animate={{ color: isDark ? '#666666' : '#999999' }}
                    >
                      Select your platform above to download
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="mb-24"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="p-4 rounded-2xl mx-auto mb-4 w-fit"
                        animate={{
                          backgroundColor: isDark ? 'rgba(255,107,53,0.1)' : 'rgba(255,107,53,0.05)',
                        }}
                      >
                        <Cpu size={28} className="text-orange-500" />
                      </motion.div>
                      <motion.h4
                        className="font-bold mb-2"
                        animate={{ color: isDark ? '#ffffff' : '#000000' }}
                      >
                        {feature.title}
                      </motion.h4>
                      <motion.p
                        className="text-sm"
                        animate={{ color: isDark ? '#999999' : '#666666' }}
                      >
                        {feature.desc}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl p-12 border backdrop-blur-xl"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                }}
              >
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div>
                    <motion.h3
                      className="text-2xl font-bold mb-6 flex items-center gap-3"
                      animate={{ color: isDark ? '#ffffff' : '#000000' }}
                    >
                      <span className="text-orange-500 text-3xl">→</span>
                      Installation
                    </motion.h3>
                    <motion.ul
                      className="space-y-4 text-lg"
                      animate={{ color: isDark ? '#aaaaaa' : '#555555' }}
                    >
                      <li>✓ Run the installer</li>
                      <li>✓ Grant permissions</li>
                      <li>✓ Sign in</li>
                      <li>✓ Start using SRIKA</li>
                    </motion.ul>
                  </motion.div>

                  <motion.div>
                    <motion.h3
                      className="text-2xl font-bold mb-6 flex items-center gap-3"
                      animate={{ color: isDark ? '#ffffff' : '#000000' }}
                    >
                      <span className="text-orange-500 text-3xl">✓</span>
                      Requirements
                    </motion.h3>
                    <motion.ul
                      className="space-y-4 text-lg"
                      animate={{ color: isDark ? '#aaaaaa' : '#555555' }}
                    >
                      <li>• 4GB RAM minimum</li>
                      <li>• 500MB free storage</li>
                      <li>• Modern processor</li>
                      <li>• Active internet (first setup)</li>
                    </motion.ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
}

export default function DownloadPage() {
  return (
    <ThemeProvider>
      <DownloadPageContent />
    </ThemeProvider>
  );
}

