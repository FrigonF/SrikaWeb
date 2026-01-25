import { useState } from 'react';
import { CleanHeading } from './CleanHeading';
import { CleanCard } from './CleanCard';

export function PlainContact() {
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
        <CleanHeading 
          title="Contact"
        />
        
        <CleanCard hover={false}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors"
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
                className="w-full px-4 py-3 rounded-md bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors"
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
                className="w-full px-4 py-3 rounded-md bg-[#0F172A] border border-[#1F2937] text-[#E5E7EB] focus:border-[#4F46E5] focus:outline-none transition-colors resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors"
            >
              Request Access
            </button>
          </form>
        </CleanCard>
      </div>
    </section>
  );
}
