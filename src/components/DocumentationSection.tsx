import { motion } from 'motion/react';
import { Book, Code, FileText, Zap } from 'lucide-react';

const docs = [
  { icon: Zap, title: 'Getting Started', description: 'Quick setup guide to get running in minutes' },
  { icon: FileText, title: 'Setup Guide', description: 'Detailed installation and configuration instructions' },
  { icon: Code, title: 'SDK Documentation', description: 'Complete API reference and code examples' },
  { icon: Book, title: 'API Reference', description: 'Comprehensive endpoint documentation' },
];

export function DocumentationSection() {
  return (
    <section id="docs" className="py-24 bg-[#0F172A]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Documentation
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Everything you need to integrate SRIKA
          </p>
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
              className="p-6 bg-[#111827] border border-[#1F2937] rounded-xl hover:border-[#4F46E5] hover:-translate-y-1 transition-all duration-300 group"
            >
              <doc.icon className="w-8 h-8 text-[#4F46E5] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-[#E5E7EB] mb-2 group-hover:text-[#4F46E5] transition-colors">
                {doc.title}
              </h3>
              <p className="text-sm text-[#9CA3AF]">
                {doc.description}
              </p>
              <div className="mt-4 text-sm text-[#4F46E5] group-hover:underline">
                Read more →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
