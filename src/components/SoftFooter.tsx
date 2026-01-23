import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function SoftFooter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Roadmap', href: '#roadmap' },
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

  // Footer content flows in continuously
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.7, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  return (
    <footer ref={ref} className="border-t border-[#1F2937] py-16 px-6 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl text-[#E5E7EB] mb-4">SRIKA</div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              The body-native interface for the future of human-computer interaction.
            </p>
          </div>

          <div>
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-[#1F2937] text-center text-sm text-[#9CA3AF]"
          style={{ opacity: contentOpacity }}
        >
          © {new Date().getFullYear()} SRIKA. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
