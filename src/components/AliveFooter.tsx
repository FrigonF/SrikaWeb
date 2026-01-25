import { motion } from 'motion/react';

export function AliveFooter() {
  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Docs', href: '#docs' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-[#1F2937] py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Slow gradient shift */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(79, 70, 229, 0.3) 50%, transparent 100%)',
            'linear-gradient(270deg, transparent 0%, rgba(79, 70, 229, 0.3) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(79, 70, 229, 0.3) 50%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-[#E5E7EB] mb-4 relative inline-block"
              animate={{
                textShadow: [
                  '0 0 0px rgba(79, 70, 229, 0)',
                  '0 0 8px rgba(79, 70, 229, 0.3)',
                  '0 0 0px rgba(79, 70, 229, 0)',
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              SRIKA
            </motion.div>
            <p className="text-sm text-[#9CA3AF]">
              Body-native interface
            </p>
          </motion.div>
          
          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors relative inline-block"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                    whileHover={{ x: 2 }}
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
          className="pt-8 border-t border-[#1F2937] text-center text-sm text-[#9CA3AF]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          © {new Date().getFullYear()} SRIKA. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
