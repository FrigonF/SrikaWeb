import { motion } from 'motion/react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#111827]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Request early access or ask us anything
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#E5E7EB] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0F172A] border border-[#1F2937] rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0F172A] border border-[#1F2937] rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#E5E7EB] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#0F172A] border border-[#1F2937] rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] transition-colors resize-none"
              placeholder="Tell us about your use case..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#4F46E5] text-white font-medium rounded-lg hover:bg-[#4338CA] transition-all duration-300 hover:scale-105"
          >
            Request Access
          </button>
        </motion.form>
      </div>
    </section>
  );
}
