import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function CinematicHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // CONTINUOUS FLOW - no 0 opacity, always visible
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  // All elements visible immediately - just subtle emphasis changes
  const headlineScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);
  const subtextY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);

  return (
    <section ref={ref} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"
          style={{ y: backgroundY }}
        />
        
        {/* Animated gradient orbs - always visible */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Main content - all visible from start */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          style={{ opacity, scale, y }}
        >
          {/* Headline - visible immediately */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E5E7EB] tracking-tight leading-[0.95] mb-8"
            style={{ scale: headlineScale }}
          >
            The Body-Native
            <br />
            Interface.
          </motion.h1>
          
          {/* Divider line - always visible */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent mx-auto mb-8 w-48"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0.6]),
            }}
          />
          
          {/* Subtext - visible from start */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ y: subtextY }}
          >
            SRIKA turns human posture into real-time digital input.
            <br />
            No wearables. No controllers. Just you.
          </motion.p>
          
          {/* CTA - visible from start */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: ctaOpacity }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[#4F46E5] text-white text-lg font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#4F46E5]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Request Early Access</span>
            </motion.a>
            
            <motion.a
              href="#demo"
              className="px-8 py-4 rounded-full border-2 border-[#4F46E5]/30 text-[#E5E7EB] text-lg font-medium backdrop-blur-sm hover:border-[#4F46E5] transition-colors"
              whileHover={{ scale: 1.05, borderColor: '#4F46E5' }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}