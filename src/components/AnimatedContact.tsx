import { useState } from 'react';
import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

export function AnimatedContact() {
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

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Contact" />
        </motion.div>
        
        <motion.div
          className="bg-[#111827] border border-[#1F2937] rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm text-[#9CA3AF] mb-2">Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors"
                whileFocus={{ borderColor: '#4F46E5' }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm text-[#9CA3AF] mb-2">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors"
                whileFocus={{ borderColor: '#4F46E5' }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm text-[#9CA3AF] mb-2">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors resize-none"
                whileFocus={{ borderColor: '#4F46E5' }}
              />
            </motion.div>
            
            <motion.button
              type="submit"
              className="w-full px-4 py-3 rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Request Access
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
