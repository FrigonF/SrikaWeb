import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

const docs = [
  { title: 'Getting started', href: '#' },
  { title: 'Setup guide', href: '#' },
  { title: 'SDK docs', href: '#' },
  { title: 'API reference', href: '#' },
];

export function AnimatedDocs() {
  return (
    <section id="docs" className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Documentation" />
        </motion.div>
        
        <div className="space-y-3">
          {docs.map((doc, index) => (
            <motion.a
              key={index}
              href={doc.href}
              className="block px-6 py-4 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#374151] transition-colors relative overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              {/* Animated underline on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#4F46E5] to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="text-[#E5E7EB] relative z-10">{doc.title}</span>
            </motion.a>
          ))}
        </div>
        
        {/* Divider line that draws itself */}
        <motion.div
          className="mt-12 h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
