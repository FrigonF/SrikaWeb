import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import srikaLogo from 'figma:asset/c747d6d96990890bd789785b95a615e84765703f.png';
import srikaLogoDark from 'figma:asset/7060f5fc25b3908b409101a209d52cdb1a735129.png';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, LogOut, User, Mail, Crown } from 'lucide-react';
import { supabase } from '../utils/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';

export function Navigation() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileHovering, setIsProfileHovering] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [plan, setPlan] = useState<string | null>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const fetchPlan = async (userId: string) => {
      const { data } = await supabase
        .from('subscriptions')
        .select('plan')
        .eq('user_id', userId)
        .single();
      if (data) setPlan(data.plan);
    };

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        // Extract picture from user metadata
        const pictureUrl = session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture;
        if (pictureUrl) {
          setProfilePicture(pictureUrl);
          setShowFallback(false);
        } else {
          setShowFallback(true);
        }
        fetchPlan(session.user.id);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        // Extract picture from user metadata
        const pictureUrl = session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture;
        if (pictureUrl) {
          setProfilePicture(pictureUrl);
          setShowFallback(false);
        } else {
          setShowFallback(true);
        }
        fetchPlan(session.user.id);
      } else {
        setPlan(null);
        setProfilePicture(null);
        setShowFallback(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // Track scroll for glass intensification
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleHashLinkClick = (anchorId: string) => {
    if (pathname !== '/') {
      navigate('/');
      // Delay scroll to allow navigation to complete
      setTimeout(() => {
        const element = document.getElementById(anchorId.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(anchorId.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#product', label: 'Product' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#alpha-beta', label: 'Alpha & Beta' },
    { href: pathname === '/docs' ? '#' : '/docs', label: 'Docs', isRouter: pathname !== '/' },
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
          className="relative rounded-3xl"
          style={{
            filter: isScrolled
              ? 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3))'
              : 'drop-shadow(0 4px 24px rgba(0, 0, 0, 0.2))',
            overflow: 'visible'
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

              {/* Desktop Nav Links with enhanced contrast */}
              <div className="hidden md:flex items-center gap-1 relative">
                {navLinks.map((link) => {
                  const isHashLink = link.href.startsWith('#');
                  const LinkComponent = link.isRouter ? motion(Link) : motion.a;
                  const linkProps = link.isRouter 
                    ? { to: link.href }
                    : { href: link.href };

                  const handleClick = isHashLink ? (e: any) => {
                    e.preventDefault();
                    handleHashLinkClick(link.href);
                  } : undefined;
                  
                  return (
                    <LinkComponent
                      key={link.href}
                      {...linkProps}
                      onClick={handleClick}
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
                    </LinkComponent>
                  );
                })}
              </div>

              {/* Desktop CTA/Auth Button */}
              <div className="hidden md:flex items-center gap-4">
                {user ? (
                  <motion.div 
                    className="relative"
                    onMouseEnter={() => setIsProfileHovering(true)}
                    onMouseLeave={() => setIsProfileHovering(false)}
                  >
                    {/* Profile Picture Circle */}
                    <motion.div
                      className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 border-white/20 hover:border-white/40 transition-all"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
                      }}
                    >
                      {profilePicture && !showFallback ? (
                        <img
                          src={profilePicture}
                          alt={user?.email}
                          className="w-full h-full object-cover"
                          onError={() => setShowFallback(true)}
                        />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center font-bold text-lg ${isDark ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' : 'bg-gradient-to-br from-blue-400 to-blue-600 text-white'}`}>
                          {user?.email?.[0].toUpperCase()}
                        </div>
                      )}
                    </motion.div>

                    {/* Hover Dropdown Menu */}
                    <AnimatePresence>
                      {isProfileHovering && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-3 w-72 z-50"
                        >
                          <motion.div
                            className="rounded-3xl overflow-hidden"
                            style={{
                              filter: isDark
                                ? 'drop-shadow(0 12px 40px rgba(0, 0, 0, 0.9))'
                                : 'drop-shadow(0 12px 40px rgba(0, 0, 0, 0.18))',
                            }}
                          >
                            {/* Backdrop blur */}
                            <motion.div
                              className="absolute inset-0 rounded-3xl"
                              style={{
                                WebkitBackdropFilter: 'blur(30px) saturate(220%)',
                                backdropFilter: 'blur(30px) saturate(220%)',
                                backgroundColor: isDark ? 'rgba(15, 15, 20, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                              }}
                            />

                            {/* Gradient border effect */}
                            <motion.div
                              className="absolute inset-0 rounded-3xl"
                              style={{
                                background: isDark
                                  ? 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(107, 178, 255, 0.05) 100%)'
                                  : 'linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(107, 178, 255, 0.04) 100%)',
                                pointer: 'none'
                              }}
                            />

                            {/* Content */}
                            <div className="relative p-6 space-y-5">
                              {/* Profile Header */}
                              <motion.div
                                className="flex items-center gap-3 pb-4 border-b"
                                animate={{
                                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
                                }}
                              >
                                <motion.div
                                  className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                                  animate={{
                                    background: isDark
                                      ? 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(107, 178, 255, 0.2) 100%)'
                                      : 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(107, 178, 255, 0.1) 100%)'
                                  }}
                                >
                                  {profilePicture && !showFallback ? (
                                    <img
                                      src={profilePicture}
                                      alt={user?.email}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <span className={`text-lg font-bold ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
                                      {user?.email?.[0].toUpperCase()}
                                    </span>
                                  )}
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                                  </p>
                                  <p className={`text-xs truncate ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                                    {user?.email}
                                  </p>
                                </div>
                              </motion.div>

                              {/* Email Section */}
                              <motion.div
                                className="space-y-2.5"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 }}
                              >
                                <div className="flex items-center gap-2">
                                  <Mail size={16} className={isDark ? 'text-gray-500' : 'text-gray-600'} />
                                  <p className={`text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                    Email Address
                                  </p>
                                </div>
                                <motion.div
                                  className="px-3.5 py-2.5 rounded-xl backdrop-blur-sm"
                                  animate={{
                                    backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'
                                  }}
                                >
                                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {user?.email}
                                  </p>
                                </motion.div>
                              </motion.div>

                              {/* Subscription Section */}
                              <motion.div
                                className="space-y-2.5"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <div className="flex items-center gap-2">
                                  <Crown size={16} className={plan === 'PAID' ? 'text-orange-500' : (isDark ? 'text-gray-500' : 'text-gray-600')} />
                                  <p className={`text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                    Plan Status
                                  </p>
                                </div>
                                <motion.div
                                  className="px-3.5 py-2.5 rounded-xl inline-flex items-center gap-2"
                                  animate={{
                                    backgroundColor: plan === 'PAID'
                                      ? (isDark ? 'rgba(255,107,53,0.15)' : 'rgba(255,107,53,0.12)')
                                      : (isDark ? 'rgba(107,114,128,0.15)' : 'rgba(107,114,128,0.08)')
                                  }}
                                >
                                  <motion.div
                                    className="w-2 h-2 rounded-full"
                                    animate={{
                                      backgroundColor: plan === 'PAID' ? '#FF6B35' : (isDark ? '#6B7280' : '#9CA3AF')
                                    }}
                                  />
                                  <span className={`text-sm font-bold ${plan === 'PAID' ? 'text-orange-500' : (isDark ? 'text-gray-300' : 'text-gray-700')}`}>
                                    {plan === 'PAID' ? 'Premium' : 'Free'}
                                  </span>
                                </motion.div>
                              </motion.div>

                              {/* Logout Button */}
                              <motion.button
                                onClick={handleLogout}
                                className="w-full mt-6 px-4 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                animate={{
                                  background: isDark
                                    ? 'linear-gradient(135deg, rgba(255,107,53,0.25) 0%, rgba(255,107,53,0.15) 100%)'
                                    : 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,107,53,0.1) 100%)',
                                  color: '#FF6B35',
                                  border: `1.5px solid ${isDark ? 'rgba(255,107,53,0.4)' : 'rgba(255,107,53,0.3)'}`
                                }}
                              >
                                <LogOut size={18} />
                                <span>Log Out Account</span>
                              </motion.button>

                              {/* Footer hint */}
                              <motion.p
                                className={`text-xs text-center ${isDark ? 'text-gray-600' : 'text-gray-500'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.15 }}
                              >
                                You'll be redirected to login
                              </motion.p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={handleLogin}
                    className="relative px-8 py-3 text-sm font-bold rounded-full overflow-hidden group items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
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
                        backgroundColor: '#FF6B35',
                      }}
                    />
                    <motion.span
                      className="relative z-10"
                      animate={{
                        color: isDark ? '#000000' : '#ffffff',
                      }}
                    >
                      Sign In
                    </motion.span>
                  </motion.button>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden p-3 rounded-full relative overflow-hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  }}
                />
                {isMenuOpen ? (
                  <X className={isDark ? "text-white" : "text-black"} size={24} />
                ) : (
                  <Menu className={isDark ? "text-white" : "text-black"} size={24} />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Glass Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] pointer-events-auto"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[70] pointer-events-auto overflow-hidden shadow-2xl"
            >
              {/* Sidebar Background with Glassmorphism */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: isDark ? 'rgba(15, 15, 15, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(32px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                }}
              />

              {/* Texture Layer */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`
                }}
              />

              <div className="relative h-full flex flex-col p-8">
                {/* Header with Close */}
                <div className="flex items-center justify-between mb-12">
                  <img src={isDark ? srikaLogoDark : srikaLogo} alt="SRIKA" className="h-10 w-auto" />
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${isDark ? "bg-white/10" : "bg-black/5"}`}
                  >
                    <X className={isDark ? "text-white" : "text-black"} size={24} />
                  </motion.button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => {
                    if (link.isRouter) {
                      const MotionLink = motion(Link);
                      return (
                        <MotionLink
                          key={link.href}
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className={`text-xl font-bold py-4 border-b ${isDark ? "text-white border-white/10" : "text-black border-black/5"
                            }`}
                        >
                          {link.label}
                        </MotionLink>
                      );
                    }
                    const isHashLink = link.href.startsWith('#');
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          if (isHashLink) {
                            e.preventDefault();
                            handleHashLinkClick(link.href);
                          }
                        }}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className={`text-xl font-bold py-4 border-b ${isDark ? "text-white border-white/10" : "text-black border-black/5"
                          }`}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Footer of Sidebar */}
                <div className="mt-auto pt-8">
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      handleHashLinkClick('#contact');
                    }}
                    className="w-full flex items-center justify-center py-5 rounded-2xl bg-[#FF6B35] text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
