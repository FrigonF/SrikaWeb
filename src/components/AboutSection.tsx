import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0F172A]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-8">
            About SRIKA
          </h2>
          <p className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed">
            SRIKA is built to make human motion a first-class digital input. 
            We believe that the way we interact with technology should be as natural 
            as the way we move in the real world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
