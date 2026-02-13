import { motion, useInView } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function ProductPreview() {
  const { isDark } = useTheme();

  return (
    <motion.section 
      id="product" 
      className="relative pt-8 pb-8"
      animate={{
        backgroundColor: isDark ? '#0a0a0a' : '#ffffff'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Title Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
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
              DASHBOARD
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              animate={{
                color: isDark ? '#ffffff' : '#000000'
              }}
            >
              Real-Time Control Center
            </motion.h2>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              animate={{
                color: isDark ? '#999999' : '#666666'
              }}
            >
              Monitor and configure your motion input system with precision
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Full-width Video Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full"
      >
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          <video
            src="https://res.cloudinary.com/dxppo3qao/video/upload/v1770993572/Video_Project_xvpubl.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Top foggy blend gradient */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            animate={{
              background: isDark 
                ? 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.3) 70%, rgba(10,10,10,0) 100%)'
                : 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)'
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Bottom foggy blend gradient */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            animate={{
              background: isDark 
                ? 'linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.3) 70%, rgba(10,10,10,0) 100%)'
                : 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)'
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
