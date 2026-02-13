import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { VideoBackground } from '../components/VideoBackground';
import { Download, Apple, Monitor, Zap } from 'lucide-react';

function DownloadPageContent() {
  const { isDark } = useTheme();

  const downloadOptions = [
    {
      icon: Windows,
      name: 'Windows',
      description: 'For Windows 10 and later',
      version: 'v1.0.0',
      link: '#',
    },
    {
      icon: Apple,
      name: 'macOS',
      description: 'For macOS 11 and later',
      version: 'v1.0.0',
      link: '#',
    },
    {
      icon: Zap,
      name: 'Linux',
      description: 'For Linux distributions',
      version: 'v1.0.0',
      link: '#',
    },
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

        <main>
          {/* Hero Section */}
          <section className={`py-32 px-4 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
            <div className="container mx-auto max-w-4xl">
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
                  DOWNLOAD
                </motion.div>
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6"
                  animate={{
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                >
                  Get SRIKA Desktop
                </motion.h1>
                <motion.p 
                  className="text-xl max-w-2xl mx-auto"
                  animate={{
                    color: isDark ? '#999999' : '#666666'
                  }}
                >
                  Download the SRIKA Desktop application for your operating system and start using advanced posture control today.
                </motion.p>
              </motion.div>

              {/* Download Options Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {downloadOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                      className="group"
                    >
                      <motion.div
                        className="p-8 rounded-3xl border-2 h-full flex flex-col"
                        animate={{
                          backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                          borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5'
                        }}
                        whileHover={{
                          y: -8,
                          borderColor: '#FF6B35',
                          boxShadow: isDark 
                            ? "0 20px 60px rgba(255,107,53,0.2)" 
                            : "0 20px 60px rgba(255,107,53,0.15)",
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                      >
                        <motion.div 
                          className="mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <Icon 
                            size={48} 
                            className="text-[#FF6B35]"
                          />
                        </motion.div>

                        <motion.h3 
                          className="text-2xl font-bold mb-2"
                          animate={{
                            color: isDark ? '#ffffff' : '#000000'
                          }}
                        >
                          {option.name}
                        </motion.h3>

                        <motion.p 
                          className="mb-4 flex-grow"
                          animate={{
                            color: isDark ? '#999999' : '#666666'
                          }}
                        >
                          {option.description}
                        </motion.p>

                        <div className="mb-6 pb-6 border-t" style={{ borderTopColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5' }}>
                          <motion.p 
                            className="text-sm mt-4"
                            animate={{
                              color: isDark ? '#666666' : '#999999'
                            }}
                          >
                            {option.version}
                          </motion.p>
                        </div>

                        <motion.button
                          className="w-full py-3 rounded-full font-bold flex items-center justify-center gap-2 group/btn"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            backgroundColor: '#FF6B35',
                            color: '#ffffff'
                          }}
                        >
                          <Download size={18} />
                          <span>Download</span>
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* System Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="mt-24 p-8 rounded-3xl border-2"
                animate={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#F8F9FA',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5'
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  animate={{
                    color: isDark ? '#ffffff' : '#000000'
                  }}
                >
                  System Requirements
                </motion.h3>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <motion.h4 
                      className="font-bold mb-3"
                      animate={{
                        color: isDark ? '#ffffff' : '#000000'
                      }}
                    >
                      Windows
                    </motion.h4>
                    <ul className="space-y-2 text-sm" style={{ color: isDark ? '#999999' : '#666666' }}>
                      <li>• Windows 10 or later</li>
                      <li>• 4GB RAM minimum</li>
                      <li>• 200MB free space</li>
                    </ul>
                  </div>
                  <div>
                    <motion.h4 
                      className="font-bold mb-3"
                      animate={{
                        color: isDark ? '#ffffff' : '#000000'
                      }}
                    >
                      macOS
                    </motion.h4>
                    <ul className="space-y-2 text-sm" style={{ color: isDark ? '#999999' : '#666666' }}>
                      <li>• macOS 11 or later</li>
                      <li>• 4GB RAM minimum</li>
                      <li>• 200MB free space</li>
                    </ul>
                  </div>
                  <div>
                    <motion.h4 
                      className="font-bold mb-3"
                      animate={{
                        color: isDark ? '#ffffff' : '#000000'
                      }}
                    >
                      Linux
                    </motion.h4>
                    <ul className="space-y-2 text-sm" style={{ color: isDark ? '#999999' : '#666666' }}>
                      <li>• Ubuntu 20.04+</li>
                      <li>• 4GB RAM minimum</li>
                      <li>• 200MB free space</li>
                    </ul>
                  </div>
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
