import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CleanHeading } from './CleanHeading';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What hardware do I need?',
    answer: 'Any standard webcam with at least 720p resolution. No special sensors required.',
  },
  {
    question: 'Which games are compatible?',
    answer: 'SRIKA works with any game that accepts keyboard or controller input. We provide pre-configured profiles for popular titles.',
  },
  {
    question: 'What is the latency?',
    answer: 'Sub-10ms on recommended hardware. Alpha users experience around 15ms, Beta improves to under 5ms.',
  },
  {
    question: 'How is my data handled?',
    answer: 'All processing happens locally on your device. We do not store or transmit any video feed.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. The Free tier is available indefinitely. Paid tiers offer a 14-day trial.',
  },
];

export function InteractiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="FAQ" />
        </motion.div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#111827] border border-[#1F2937] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1F2937]/50 transition-colors"
                whileHover={{ x: 2 }}
              >
                <span className="text-[#E5E7EB]">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-[#9CA3AF]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
