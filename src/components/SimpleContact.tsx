import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function SimpleContact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you. We\'ll be in touch.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Continuous flow - always visible
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  
  const formOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 1], [0.6, 1, 1, 0.9]);
  const formY = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);

  return (
    <section ref={ref} id="contact" className="py-32 px-6 bg-[#111827]/50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4">Get Early Access</h2>
          <p className="text-xl text-[#9CA3AF]">Join the waitlist for SRIKA</p>
        </motion.div>

        <motion.div
          className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8"
          style={{ opacity: formOpacity, y: formY }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 rounded-lg bg-[#4F46E5] text-white text-lg hover:bg-[#4338CA] transition-colors"
            >
              Request Access
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
