import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background visual */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#E5E7EB] mb-6 leading-tight">
              The Body-Native
              <br />
              Interface
            </h1>
            <p className="text-lg md:text-xl text-[#9CA3AF] mb-8 leading-relaxed max-w-xl">
              SRIKA converts human posture into real-time digital input using AI-powered motion understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#4F46E5] text-white font-medium rounded-lg hover:bg-[#4338CA] transition-all duration-300 text-center hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 border-2 border-[#4F46E5]/30 text-[#E5E7EB] font-medium rounded-lg hover:border-[#4F46E5] transition-all duration-300 text-center"
              >
                View Pricing
              </a>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="relative h-96 rounded-2xl bg-[#111827] border border-[#1F2937] overflow-hidden"
          >
            {/* Abstract motion visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-64 h-64 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#10B981] blur-2xl"
              />
            </div>
            
            {/* Skeleton overlay */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full opacity-40"
            >
              <circle cx="100" cy="60" r="20" fill="none" stroke="#4F46E5" strokeWidth="2" />
              <line x1="100" y1="80" x2="100" y2="140" stroke="#4F46E5" strokeWidth="2" />
              <line x1="100" y1="100" x2="70" y2="130" stroke="#4F46E5" strokeWidth="2" />
              <line x1="100" y1="100" x2="130" y2="130" stroke="#4F46E5" strokeWidth="2" />
              <line x1="100" y1="140" x2="80" y2="170" stroke="#4F46E5" strokeWidth="2" />
              <line x1="100" y1="140" x2="120" y2="170" stroke="#4F46E5" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
