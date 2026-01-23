import { motion } from 'motion/react';
import { Book, Code, FileText, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const docs = [
  { icon: Zap, title: 'Getting Started', description: 'Quick setup guide to get running in minutes' },
  { icon: FileText, title: 'Setup Guide', description: 'Detailed installation and configuration instructions' },
  { icon: Code, title: 'SDK Documentation', description: 'Complete API reference and code examples' },
  { icon: Book, title: 'API Reference', description: 'Comprehensive endpoint documentation' },
];

export function DocumentationSection() {
  const { isDark } = useTheme();

  return (
    <motion.section
      id="docs"
      className="py-32"
      animate={{
        backgroundColor: 'transparent'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-4 py-1 border rounded-full text-xs font-medium mb-6"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            DOCUMENTATION
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Developer Resources
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Everything you need to integrate SRIKA
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {docs.map((doc, index) => (
            <motion.a
              key={doc.title}
              href="#docs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border-2 rounded-3xl hover:-translate-y-1 transition-all duration-300 relative"
              animate={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
              }}
              whileHover={{
                backgroundColor: isDark ? '#ffffff' : '#000000'
              }}
            >
              <div className="absolute top-6 right-6 w-2 h-2 bg-[#FF6B35] rounded-full group-hover:scale-150 transition-transform duration-300" />

              <motion.div
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                <doc.icon className="w-10 h-10 group-hover:text-black mb-6 transition-colors duration-300" style={{ color: 'inherit' }} />
              </motion.div>
              <motion.h3
                className="text-xl font-bold group-hover:text-black mb-3 transition-colors duration-300"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                {doc.title}
              </motion.h3>
              <motion.p
                className="text-sm transition-colors duration-300 leading-relaxed"
                animate={{
                  color: isDark ? '#999999' : '#666666'
                }}
              >
                {doc.description}
              </motion.p>
              <motion.div
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:text-black transition-colors duration-300"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
