import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
  const { isDark } = useTheme();

  return (
    <motion.footer
      className="py-16 border-t-2"
      animate={{
        backgroundColor: 'transparent',
        borderTopColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              SRIKA
              <motion.div
                className="w-2 h-2 bg-[#FF6B35] rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <p className="text-sm text-[#E5E5E5] max-w-md leading-relaxed">
              AI-powered full-body motion input for gaming, fitness, XR, and training.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#features', label: 'Features' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#docs', label: 'Documentation' },
              ].map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#E5E5E5] hover:text-[#FF6B35] transition-colors inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
                { href: '#', label: 'Privacy' },
                { href: '#', label: 'Terms' },
              ].map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#E5E5E5] hover:text-[#FF6B35] transition-colors inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-[#E5E5E5]">
            © {new Date().getFullYear()} SRIKA. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                className="text-sm text-[#E5E5E5] hover:text-[#FF6B35] transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}