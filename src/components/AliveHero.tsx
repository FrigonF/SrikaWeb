import { motion } from 'motion/react';

export function AliveHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
            'linear-gradient(225deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
            'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Subtle particle drift */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#4F46E5] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Main Headline with fade + rise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.21, 0.45, 0.27, 0.9]
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E5E7EB] tracking-tight leading-[1.1]">
              The Body-Native Interface
            </h1>
            
            {/* Animated underline */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent mx-auto mt-6"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.5,
                ease: [0.21, 0.45, 0.27, 0.9]
              }}
            />
          </motion.div>
          
          {/* Subtext with delay */}
          <motion.p
            className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.21, 0.45, 0.27, 0.9]
            }}
          >
            SRIKA turns human posture into real-time digital input using AI-powered motion understanding.
          </motion.p>
          
          {/* CTA Buttons with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.21, 0.45, 0.27, 0.9]
            }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-md bg-[#4F46E5] text-white relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#6366F1]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started</span>
            </motion.a>
            
            <motion.a
              href="#pricing"
              className="px-6 py-3 rounded-md border border-[#1F2937] text-[#E5E7EB] hover:border-[#4F46E5] transition-colors"
              whileHover={{ scale: 1.02, borderColor: '#4F46E5' }}
              whileTap={{ scale: 0.98 }}
            >
              View Pricing
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
