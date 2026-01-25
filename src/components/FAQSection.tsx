import { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What hardware do I need?',
    answer: 'SRIKA works with any standard webcam or RGB camera. We recommend at least 720p resolution for basic functionality, and 1080p for optimal performance. No special sensors, depth cameras, or wearables are required.',
  },
  {
    question: 'Which games are compatible?',
    answer: 'SRIKA can work with any game that accepts keyboard or controller input. We provide pre-configured profiles for popular games like Fortnite, Call of Duty, and Street Fighter. You can also create custom mappings for any game.',
  },
  {
    question: 'What is the latency?',
    answer: 'Our engine achieves sub-10ms latency on recommended hardware. Alpha users experience around 15ms, Beta improves to under 5ms, and Pro tier users get sub-3ms latency with optimized settings.',
  },
  {
    question: 'Can developers integrate SRIKA?',
    answer: 'Yes! Pro and Enterprise tiers include full SDK access with comprehensive documentation. Our API allows custom gesture recognition, profile management, and real-time pose data streaming.',
  },
  {
    question: 'How is my data handled?',
    answer: 'All processing happens locally on your device. We do not store, transmit, or analyze any video feed. Only anonymous usage metrics (if opted-in) are collected to improve the AI model.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! The Free tier is available indefinitely. Gamer and Pro tiers offer a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What about accessibility?',
    answer: 'SRIKA is designed with accessibility in mind. Users can create custom gesture mappings that work with their unique range of motion and abilities. We\'re actively working with accessibility advocates to improve the platform.',
  },
  {
    question: 'Will this work with VR headsets?',
    answer: 'XR/VR integration is on our roadmap for Q2 2027. We\'re working on native support for major VR platforms to enable full-body avatars without additional sensors.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about SRIKA"
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} hover={false} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg text-white pr-8">{faq.question}</h3>
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#8B5CF6]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#8B5CF6]" />
                  )}
                </div>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <div className="pt-4 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Additional help */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
