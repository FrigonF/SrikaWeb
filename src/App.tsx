import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ProductPreview } from './components/ProductPreview';
import { AlphaBetaSection } from './components/AlphaBetaSection';
import { PricingSection } from './components/PricingSection';
import { DocumentationSection } from './components/DocumentationSection';
import { RoadmapSection } from './components/RoadmapSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { VideoBackground } from './components/VideoBackground';

function AppContent() {
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
        {/* Navigation - sticky, no animation */}
        <Navigation />

        {/* All sections vertically stacked */}
        <main>
          {/* Hero - dynamic but safe */}
          <HeroSection />

          {/* Features - grid with entrance animations */}
          <FeaturesSection />

          {/* How It Works - 4-step horizontal */}
          <HowItWorksSection />

          {/* Use Cases - tabbed, click-based */}
          <UseCasesSection />

          {/* Product Preview - single centered mockup */}
          <ProductPreview />

          {/* Alpha & Beta - two columns */}
          <AlphaBetaSection />

          {/* Pricing - 4 cards */}
          <PricingSection />

          {/* Documentation - simple list */}
          <DocumentationSection />

          {/* Roadmap - vertical list */}
          <RoadmapSection />

          {/* About - short, calm */}
          <AboutSection />

          {/* Contact - simple form */}
          <ContactSection />
        </main>

        {/* Footer - minimal */}
        <Footer />
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}