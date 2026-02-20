import { motion, useAnimationControls } from 'motion/react';
import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { VideoBackground } from '../components/VideoBackground';
import { Apple, Monitor, Smartphone } from 'lucide-react';

function DownloadPageContent() {
  const { isDark } = useTheme();
  const underlineControls = useAnimationControls();

  useEffect(() => {
    underlineControls.start({
      pathLength: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
    });
  }, [underlineControls]);

  return (
    <motion.div
      className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'}`}
    >
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />

        <main className="px-4">
          <style>{`
            .download-card {
              border: 1px solid rgba(148, 163, 184, 0.3);
              background: rgba(15, 23, 42, 0.45);
              box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);
            }

            .download-glow {
              background: radial-gradient(circle at 30% 30%, rgba(148, 163, 184, 0.35), transparent 60%);
            }

            .download-option {
              position: relative;
              overflow: hidden;
              min-width: 240px;
              justify-content: center;
            }

            .download-option .label-main {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              transition: opacity 0.2s ease, transform 0.2s ease;
            }

            .download-option .label-alt {
              position: absolute;
              inset: 0;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              opacity: 0;
              transform: translateY(6px);
              transition: opacity 0.2s ease, transform 0.2s ease;
            }

            .download-option.is-soon:hover .label-main {
              opacity: 0;
              transform: translateY(-6px);
            }

            .download-option.is-soon:hover .label-alt {
              opacity: 1;
              transform: translateY(0);
            }

            .download-option.is-soon {
              cursor: default;
            }
          `}</style>
          <section className="pt-40 md:pt-52 pb-32 md:pb-48">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
                style={{ color: isDark ? '#ffffff' : '#0f172a' }}
              >
                DOWNLOAD
                <br />
                <span className="relative inline-block">
                  Now
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
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

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-lg md:text-xl"
                style={{ color: isDark ? '#94a3b8' : '#64748b' }}
              >
                Work locally and without distraction with our dedicated desktop app.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full border text-sm ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200'
                    : 'bg-white/80 border-slate-200 text-slate-600'
                }`}
                style={{
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                }}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-fuchsia-500 text-slate-950 font-bold text-xs">
                  B
                </span>
                Public beta
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap justify-center gap-4"
              >
                <a
                  className="download-option inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
                  href="https://github.com/FrigonF/SRIKA/releases/download/v1.0.7/SRIKA-Setup-1.0.7.exe"
                  style={{
                    backgroundColor: isDark ? '#f8f4f1' : '#0f172a',
                    color: isDark ? '#141111' : '#f8f4f1',
                    boxShadow: isDark
                      ? '0 18px 40px rgba(0, 0, 0, 0.4)'
                      : '0 12px 32px rgba(15, 23, 42, 0.25)'
                  }}
                >
                  <span className="label-main">
                    <Monitor size={18} />
                    Download for Windows
                  </span>
                </a>
                <button
                  type="button"
                  className="download-option is-soon inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isDark ? '#f8f4f1' : '#0f172a',
                    color: isDark ? '#141111' : '#f8f4f1',
                    boxShadow: isDark
                      ? '0 18px 40px rgba(0, 0, 0, 0.4)'
                      : '0 12px 32px rgba(15, 23, 42, 0.25)'
                  }}
                  aria-disabled="true"
                >
                  <span className="label-main">
                    <Apple size={18} />
                    Download for Mac
                  </span>
                  <span className="label-alt">
                    <Apple size={18} />
                    Coming soon
                  </span>
                </button>
                <button
                  type="button"
                  className="download-option is-soon inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isDark ? '#f8f4f1' : '#0f172a',
                    color: isDark ? '#141111' : '#f8f4f1',
                    boxShadow: isDark
                      ? '0 18px 40px rgba(0, 0, 0, 0.4)'
                      : '0 12px 32px rgba(15, 23, 42, 0.25)'
                  }}
                  aria-disabled="true"
                >
                  <span className="label-main">
                    <Smartphone size={18} />
                    Download for Android
                  </span>
                  <span className="label-alt">
                    <Smartphone size={18} />
                    Coming soon
                  </span>
                </button>
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
