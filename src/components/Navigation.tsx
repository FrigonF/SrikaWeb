import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import srikaLogo from 'figma:asset/c747d6d96990890bd789785b95a615e84765703f.png';
import srikaLogoDark from 'figma:asset/7060f5fc25b3908b409101a209d52cdb1a735129.png';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  // Track scroll for glass intensification
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#product', label: 'Product' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#alpha-beta', label: 'Alpha & Beta' },
    { href: '#docs', label: 'Docs' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.nav 
        className="w-full max-w-6xl pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1 
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glassmorphism container with strong visibility */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{
            filter: isScrolled 
              ? 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3))'
              : 'drop-shadow(0 4px 24px rgba(0, 0, 0, 0.2))',
          }}
        >
          {/* Backdrop blur layer */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              backdropFilter: isScrolled 
                ? 'blur(40px) saturate(200%)'
                : 'blur(32px) saturate(180%)',
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              WebkitBackdropFilter: isScrolled 
                ? 'blur(40px) saturate(200%)'
                : 'blur(32px) saturate(180%)',
            }}
          />

          {/* Primary glass surface - INCREASED OPACITY */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              backgroundColor: isScrolled
                ? (isDark ? 'rgba(20, 20, 20, 0.85)' : 'rgba(255, 255, 255, 0.85)')
                : (isDark ? 'rgba(20, 20, 20, 0.75)' : 'rgba(255, 255, 255, 0.75)'),
              boxShadow: isScrolled
                ? (isDark 
                    ? '0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.4)' 
                    : '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 1), inset 0 -1px 2px rgba(0, 0, 0, 0.1)')
                : (isDark
                    ? '0 4px 24px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.3)'
                    : '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -1px 2px rgba(0, 0, 0, 0.08)'),
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Frosted glass texture overlay */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              opacity: isDark ? 0.3 : 0.25,
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")
              `,
            }}
          />

          {/* Glass edge highlight - top */}
          <motion.div
            className="absolute top-0 left-8 right-8 h-px rounded-full pointer-events-none"
            animate={{
              background: isDark
                ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent)'
                : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8) 50%, transparent)',
              opacity: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Glass edge shadow - bottom */}
          <motion.div
            className="absolute bottom-0 left-8 right-8 h-px rounded-full pointer-events-none"
            animate={{
              background: isDark
                ? 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.8) 50%, transparent)'
                : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2) 50%, transparent)',
              opacity: isScrolled ? 0.8 : 0.6,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Premium border with gradient */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            animate={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(200, 200, 200, 0.4) 50%, rgba(255, 255, 255, 0.7) 100%)',
            }}
            style={{
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1.5px',
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Accent glow for dark theme */}
          {isDark && (
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                opacity: isScrolled ? 0.5 : 0.35,
              }}
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.2) 0%, transparent 60%)',
              }}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* Elegant light sheen with chromatic effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? 'linear-gradient(110deg, transparent 30%, rgba(255, 107, 53, 0.1) 48%, rgba(255, 255, 255, 0.2) 50%, rgba(107, 178, 255, 0.1) 52%, transparent 70%)'
                  : 'linear-gradient(110deg, transparent 30%, rgba(255, 200, 150, 0.3) 48%, rgba(255, 255, 255, 0.9) 50%, rgba(150, 200, 255, 0.3) 52%, transparent 70%)',
              }}
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 10,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 6,
              }}
            />
          </motion.div>

          {/* Content with enhanced readability */}
          <div className="relative px-8 py-1">
            <div className="flex items-center justify-between h-20">
              {/* Logo - Click to toggle theme */}
              <motion.button 
                onClick={toggleTheme}
                className="flex items-center cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl -inset-2"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    background: isDark 
                      ? 'radial-gradient(circle, rgba(255,107,53,0.25) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src={isDark ? srikaLogoDark : srikaLogo}
                  alt="SRIKA" 
                  className="h-16 w-auto relative z-10"
                  style={{
                    filter: isDark 
                      ? 'drop-shadow(0 2px 8px rgba(255,107,53,0.6)) drop-shadow(0 0 20px rgba(255,107,53,0.4))' 
                      : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  }}
                />
              </motion.button>

              {/* Nav Links with enhanced contrast */}
              <div className="hidden md:flex items-center gap-1 relative">
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.href}
                    href={link.href} 
                    className="px-4 py-2.5 text-sm font-semibold relative rounded-full"
                    animate={{
                      color: activeLink === link.href 
                        ? (isDark ? '#ffffff' : '#000000')
                        : (isDark ? '#e5e5e5' : '#4a4a4a')
                    }}
                    style={{
                      textShadow: isDark ? '0 1px 3px rgba(0,0,0,0.8)' : '0 1px 2px rgba(255,255,255,0.9)',
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ 
                      y: -2,
                      color: isDark ? '#ffffff' : '#000000',
                    }}
                    onMouseEnter={() => setActiveLink(link.href)}
                    onMouseLeave={() => setActiveLink(null)}
                  >
                    {/* Hover pill with glass effect */}
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="navHoverPill"
                        className="absolute inset-0 rounded-full"
                        animate={{
                          backgroundColor: isDark 
                            ? 'rgba(255, 255, 255, 0.18)' 
                            : 'rgba(0, 0, 0, 0.12)',
                          boxShadow: isDark
                            ? '0 0 24px rgba(255,107,53,0.35), inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.25)'
                            : '0 0 16px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 1px rgba(0,0,0,0.12)',
                        }}
                        style={{
                          backdropFilter: 'blur(8px)',
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 380, 
                          damping: 30 
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Gliding underline with glow */}
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full bg-[#FF6B35]"
                        animate={{
                          boxShadow: isDark 
                            ? '0 0 18px rgba(255,107,53,1), 0 0 10px rgba(255,107,53,0.9)' 
                            : '0 0 14px rgba(255,107,53,0.7), 0 0 8px rgba(255,107,53,0.5)',
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30 
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button with premium glass */}
              <motion.a
                href="#contact"
                className="relative px-8 py-3 text-sm font-bold rounded-full overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Button background */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    backgroundColor: isDark ? '#FF6B35' : '#000000',
                    boxShadow: isDark 
                      ? '0 8px 32px rgba(255,107,53,0.7), inset 0 1px 2px rgba(255,255,255,0.35), inset 0 -1px 2px rgba(0,0,0,0.25)' 
                      : '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    boxShadow: isDark 
                      ? '0 12px 48px rgba(255,107,53,0.9), inset 0 1px 2px rgba(255,255,255,0.45), inset 0 -1px 2px rgba(0,0,0,0.35)' 
                      : '0 8px 36px rgba(255,107,53,0.7), inset 0 1px 2px rgba(255,255,255,0.35), inset 0 -1px 2px rgba(0,0,0,0.25)',
                    backgroundColor: '#FF6B35',
                  }}
                />

                {/* Button sheen */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
                  }}
                  initial={{ x: '-200%' }}
                  whileHover={{
                    x: '200%',
                    transition: { duration: 0.6, ease: 'easeInOut' }
                  }}
                />

                {/* Button text with shadow */}
                <motion.span 
                  className="relative z-10"
                  animate={{
                    color: isDark ? '#000000' : '#ffffff',
                  }}
                  style={{
                    textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : '0 1px 2px rgba(0,0,0,0.3)',
                  }}
                  whileHover={{
                    color: '#ffffff',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Get Started
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
