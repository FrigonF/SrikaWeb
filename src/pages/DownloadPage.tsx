import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { VideoBackground } from '../components/VideoBackground';
import { Download, Apple, Monitor, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
}

function AnimatedCounter({ end, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

function DownloadPageContent() {
  const { isDark } = useTheme();
  const [selectedOS, setSelectedOS] = useState('windows');

  const osOptions = [
    {
      id: 'windows',
      name: 'Windows',
      description: 'Windows 10 and later',
      icon: Monitor,
      color: '#0078D4',
      downloadLink: '#',
    },
    {
      id: 'macos',
      name: 'macOS',
      description: 'macOS 11 and later',
      icon: Apple,
      color: '#000000',
      downloadLink: '#',
    },
    {
      id: 'linux',
      name: 'Linux',
      description: 'Ubuntu 20.04+',
      icon: Zap,
      color: '#FCC624',
      downloadLink: '#',
    },
  ];

  const pipeline = [
    { label: 'Download', icon: Download },
    { label: 'Install', icon: '📦' },
    { label: 'Launch', icon: '🚀' },
    { label: 'Activate', icon: '⚡' },
  ];

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      animate={{
        backgroundColor: 'transparent',
        color: isDark ? '#ffffff' : '#000000'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <VideoBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className={`py-32 px-4 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
            <div className="container mx-auto max-w-6xl">
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
              >
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
                  animate={{ color: isDark ? '#ffffff' : '#000000' }}
                >
                  Download the<br />
                  <motion.span
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent"
                  >
                    Body-Native Interface
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl max-w-2xl mx-auto mb-12"
                  animate={{ color: isDark ? '#999999' : '#666666' }}
                >
                  Experience seamless posture control with SRIKA's advanced motion tracking system
                </motion.p>
              </motion.div>

              {/* Version Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="max-w-2xl mx-auto mb-20"
              >
                <div
                  className="p-8 rounded-3xl border backdrop-blur-3xl"
                  style={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    boxShadow: isDark 
                      ? '0 8px 32px rgba(255,107,53,0.1), inset 0 1px 1px rgba(255,255,255,0.1)'
                      : '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9)',
                  }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <motion.div className="text-center">
                      <motion.div 
                        className="text-2xl md:text-3xl font-black mb-2"
                        animate={{ color: '#FF6B35' }}
                      >
                        v<AnimatedCounter end={1} />.0.0
                      </motion.div>
                      <motion.p 
                        className="text-sm"
                        animate={{ color: isDark ? '#999999' : '#666666' }}
                      >
                        Version
                      </motion.p>
                    </motion.div>

                    <motion.div className="text-center">
                      <motion.div 
                        className="text-2xl md:text-3xl font-black mb-2 text-green-500"
                      >
                        ✓
                      </motion.div>
                      <motion.p 
                        className="text-sm"
                        animate={{ color: isDark ? '#999999' : '#666666' }}
                      >
                        Stable
                      </motion.p>
                    </motion.div>

                    <motion.div className="text-center">
                      <motion.div 
                        className="text-2xl md:text-3xl font-black mb-2"
                        animate={{ color: isDark ? '#ffffff' : '#000000' }}
                      >
                        <AnimatedCounter end={256} suffix="MB" />
                      </motion.div>
                      <motion.p 
                        className="text-sm"
                        animate={{ color: isDark ? '#999999' : '#666666' }}
                      >
                        Size
                      </motion.p>
                    </motion.div>

                    <motion.div className="text-center">
                      <motion.div 
                        className="text-2xl md:text-3xl font-black mb-2"
                        animate={{ color: isDark ? '#ffffff' : '#000000' }}
                      >
                        Today
                      </motion.div>
                      <motion.p 
                        className="text-sm"
                        animate={{ color: isDark ? '#999999' : '#666666' }}
                      >
                        Updated
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* OS Selection Grid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {osOptions.map((os, index) => {
                  const Icon = os.icon;
                  const isSelected = selectedOS === os.id;

                  return (
                    <motion.button
                      key={os.id}
                      onClick={() => setSelectedOS(os.id)}
                      className="text-left group relative"
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <motion.div
                        className="p-8 rounded-3xl border backdrop-blur-3xl h-full cursor-pointer relative overflow-hidden"
                        animate={{
                          backgroundColor: isSelected 
                            ? isDark ? 'rgba(255,107,53,0.15)' : 'rgba(255,107,53,0.1)'
                            : isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)',
                          borderColor: isSelected ? '#FF6B35' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          boxShadow: isSelected
                            ? isDark 
                              ? '0 0 40px rgba(255,107,53,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
                              : '0 0 40px rgba(255,107,53,0.2), inset 0 1px 1px rgba(255,255,255,0.9)'
                            : isDark
                              ? '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.05)'
                              : '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="mb-6"
                          animate={{ color: os.color }}
                        >
                          <Icon size={40} />
                        </motion.div>

                        <motion.h3 
                          className="text-2xl font-bold mb-2"
                          animate={{
                            color: isDark ? '#ffffff' : '#000000'
                          }}
                        >
                          {os.name}
                        </motion.h3>

                        <motion.p 
                          className="mb-6"
                          animate={{
                            color: isDark ? '#999999' : '#666666'
                          }}
                        >
                          {os.description}
                        </motion.p>

                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              className="absolute bottom-4 right-4 text-green-500"
                            >
                              <CheckCircle2 size={28} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-center mb-24"
              >
                <motion.button
                  className="px-12 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    backgroundColor: '#FF6B35',
                    color: '#ffffff',
                  }}
                  style={{
                    boxShadow: '0 0 0 0 rgba(255,107,53,0.4)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: '0 0 60px rgba(255,107,53,0.6)',
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    style={{
                      opacity: 0.3,
                    }}
                  />
                  <Download size={24} className="relative z-10" />
                  <span className="relative z-10">Download for {osOptions.find(o => o.id === selectedOS)?.name}</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Installation Pipeline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="mb-24"
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-center mb-12"
                  animate={{
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                >
                  Get Up and Running
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {pipeline.map((step, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-6 rounded-2xl"
                        style={{
                          backgroundColor: isDark ? 'rgba(255,107,53,0.1)' : 'rgba(255,107,53,0.05)',
                          border: `2px solid ${isDark ? 'rgba(255,107,53,0.3)' : 'rgba(255,107,53,0.2)'}`,
                        }}
                      >
                        <div className="text-3xl">
                          {typeof step.icon === 'string' ? step.icon : <step.icon size={28} className="text-[#FF6B35]" />}
                        </div>
                      </motion.div>

                      <motion.div 
                        className="text-center md:text-left"
                        animate={{
                          color: isDark ? '#999999' : '#666666'
                        }}
                      >
                        <p className="font-bold">{step.label}</p>
                      </motion.div>

                      {index < pipeline.length - 1 && (
                        <motion.div 
                          className="hidden md:block w-12 h-1 rounded-full"
                          animate={{
                            backgroundColor: isDark ? 'rgba(255,107,53,0.3)' : 'rgba(255,107,53,0.2)',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* System Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="p-12 rounded-3xl border backdrop-blur-3xl"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                  boxShadow: isDark 
                    ? '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.05)'
                    : '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9)',
                }}
              >
                <motion.h3 
                  className="text-3xl font-bold mb-8"
                  animate={{
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                >
                  System Requirements
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {osOptions.map((os, idx) => (
                    <motion.div key={idx}>
                      <motion.h4 
                        className="font-bold mb-4"
                        animate={{
                          color: isDark ? '#ffffff' : '#000000'
                        }}
                      >
                        {os.name}
                      </motion.h4>
                      <ul className="space-y-2 text-sm" style={{ color: isDark ? '#999999' : '#666666' }}>
                        <li>• Latest OS version</li>
                        <li>• 4GB RAM minimum</li>
                        <li>• 500MB free space</li>
                        <li>• Modern processor</li>
                      </ul>
                    </motion.div>
                  ))}
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

