import { motion } from 'motion/react';
import { Check, Clock } from 'lucide-react';

export function AlphaBetaSection() {
  return (
    <section id="alpha-beta" className="py-24 bg-[#0F172A]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Alpha & Beta Programs
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Join early and shape the future of motion input
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Alpha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-[#111827] border border-[#1F2937] rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-6 h-6 text-[#10B981]" />
              <h3 className="text-2xl font-bold text-[#E5E7EB]">Alpha</h3>
            </div>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full text-sm text-[#10B981]">
                Completed
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <span>Core motion detection</span>
              </li>
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <span>Early accuracy testing</span>
              </li>
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <span>Limited developer access</span>
              </li>
            </ul>
          </motion.div>

          {/* Beta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-[#4F46E5]/5 border-2 border-[#4F46E5] rounded-2xl relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-[#4F46E5]" />
              <h3 className="text-2xl font-bold text-[#E5E7EB]">Beta</h3>
            </div>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-[#4F46E5]/10 border border-[#4F46E5]/30 rounded-full text-sm text-[#4F46E5]">
                Active Now
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <span>Improved AI models</span>
              </li>
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <span>Custom gesture profiles</span>
              </li>
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <span>Wider platform support</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 block w-full px-6 py-3 bg-[#4F46E5] text-white font-medium rounded-lg text-center hover:bg-[#4338CA] transition-colors"
            >
              Request Beta Access
            </a>
          </motion.div>
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative h-2 bg-[#111827] rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[60%] bg-gradient-to-r from-[#10B981] to-[#4F46E5] rounded-full" />
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <span className="text-[#10B981]">Alpha Complete</span>
            <span className="text-[#4F46E5]">Beta In Progress</span>
            <span className="text-[#9CA3AF]">Public Release</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
