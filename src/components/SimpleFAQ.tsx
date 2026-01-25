import { useState } from 'react';
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

export function SimpleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-3xl mx-auto">
        <CleanHeading 
          title="FAQ"
        />
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-[#1F2937] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1F2937]/50 transition-colors"
              >
                <span className="text-[#E5E7EB]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#9CA3AF] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-[#9CA3AF]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
