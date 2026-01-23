import { motion } from 'motion/react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { isDark } = useTheme();

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
    <motion.section
      id="contact"
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
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            CONTACT
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Request early access or ask us anything
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="border-2 rounded-3xl p-10 space-y-6 relative"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
            }}
          >
            {/* Decorative element */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-[#FF6B35] rounded-full" />

            {/* Name */}
            <div>
              <motion.label
                htmlFor="name"
                className="block text-sm font-bold mb-3 uppercase tracking-wide"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                Name
              </motion.label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 rounded-2xl placeholder-[#999999] focus:outline-none focus:border-[#FF6B35] transition-colors"
                placeholder="Your name"
                animate={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                  color: isDark ? '#ffffff' : '#000000'
                }}
              />
            </div>

            {/* Email */}
            <div>
              <motion.label
                htmlFor="email"
                className="block text-sm font-bold mb-3 uppercase tracking-wide"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                Email
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 rounded-2xl placeholder-[#999999] focus:outline-none focus:border-[#FF6B35] transition-colors"
                placeholder="your@email.com"
                animate={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                  color: isDark ? '#ffffff' : '#000000'
                }}
              />
            </div>

            {/* Message */}
            <div>
              <motion.label
                htmlFor="message"
                className="block text-sm font-bold mb-3 uppercase tracking-wide"
                animate={{
                  color: isDark ? '#ffffff' : '#000000'
                }}
              >
                Message
              </motion.label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 border-2 rounded-2xl placeholder-[#999999] focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
                placeholder="Tell us about your use case..."
                animate={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
                  color: isDark ? '#ffffff' : '#000000'
                }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full px-8 py-5 font-medium rounded-full hover:bg-[#FF6B35] transition-all duration-300 hover:scale-[1.02]"
              animate={{
                backgroundColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#000000' : '#ffffff'
              }}
              whileHover={{
                boxShadow: "0 8px 30px rgba(255,107,53,0.4)"
              }}
            >
              Request Access
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
