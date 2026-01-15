import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

export function AnimatedAlphaBeta() {
  return (
    <section id="alpha-beta" className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Alpha & Beta" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Alpha */}
          <motion.div
            className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, borderColor: '#374151' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="space-y-4 relative z-10">
              <div>
                <h3 className="text-2xl text-[#E5E7EB] mb-2">Alpha</h3>
                <p className="text-sm text-[#9CA3AF]">Available now</p>
              </div>
              
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>Core motion detection</li>
                <li>Limited accuracy</li>
                <li>Early adopters</li>
              </ul>
              
              <motion.a
                href="#contact"
                className="inline-block px-4 py-2 rounded-md border border-[#1F2937] text-[#E5E7EB] hover:border-[#374151] transition-colors text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Access
              </motion.a>
            </div>
          </motion.div>
          
          {/* Beta */}
          <motion.div
            className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4, borderColor: '#4F46E5' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="space-y-4 relative z-10">
              <div>
                <h3 className="text-2xl text-[#E5E7EB] mb-2">Beta</h3>
                <p className="text-sm text-[#9CA3AF]">Q2 2026</p>
              </div>
              
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>Improved models</li>
                <li>Custom profiles</li>
                <li>Multi-use support</li>
              </ul>
              
              <motion.a
                href="#contact"
                className="inline-block px-4 py-2 rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Progress bar */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-between mb-2 text-sm text-[#9CA3AF]">
            <span>Alpha</span>
            <span>Beta</span>
            <span>Public</span>
          </div>
          
          <div className="h-1 bg-[#1F2937] rounded-full overflow-hidden relative">
            {/* Animated progress */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#10B981] to-[#4F46E5] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '33.33%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
            
            {/* Glowing dots */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#10B981] shadow-lg shadow-[#10B981]/50"
              initial={{ left: 0, opacity: 0 }}
              whileInView={{ left: '33.33%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              animate={{
                scale: [1, 1.3, 1],
              }}
              style={{
                transition: 'all 1.5s',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
