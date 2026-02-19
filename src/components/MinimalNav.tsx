import { motion, useScroll, useTransform } from 'motion/react';

export function MinimalNav() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.9)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ zIndex: 9999,
        backgroundColor,
        borderBottom: useTransform(
          borderOpacity,
          (v) => `1px solid rgba(31, 41, 55, ${v})`
        ),
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl text-[#E5E7EB]"
          whileHover={{ scale: 1.05 }}
        >
          SRIKA
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Product', 'Pricing', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="px-4 py-2 rounded-full bg-[#4F46E5] text-white text-sm"
          whileHover={{ scale: 1.05, backgroundColor: '#4338CA' }}
          whileTap={{ scale: 0.95 }}
        >
          Get Access
        </motion.a>
      </div>
    </motion.nav>
  );
}
