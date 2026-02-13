import { Navigation } from '../components/Navigation';
import { DocumentationSection } from '../components/DocumentationSection';
import { Footer } from '../components/Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';
import { VideoBackground } from '../components/VideoBackground';

function DocPageContent() {
  const { isDark } = useTheme();

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
        {/* Navigation - sticky */}
        <Navigation />

        {/* Main content */}
        <main>
          {/* Full-page documentation section */}
          <div className="pt-20">
            <DocumentationSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </motion.div>
  );
}

export function DocumentationPage() {
  return (
    <ThemeProvider>
      <DocPageContent />
    </ThemeProvider>
  );
}
