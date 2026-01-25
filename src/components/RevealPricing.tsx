import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '',
    features: [
      'Basic motion detection',
      'Standard camera support',
      'Community access',
      'Personal use only',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Gamer',
    price: '₹499',
    period: '/month',
    popular: true,
    features: [
      'Advanced control profiles',
      'Custom gesture mapping',
      'Priority support',
      'Game library access',
      'Cloud sync',
    ],
    cta: 'Start Trial',
  },
  {
    name: 'Pro',
    price: '₹1,499',
    period: '/month',
    features: [
      'Full SDK access',
      'API integration',
      'Commercial use',
      'Advanced analytics',
      'Dedicated support',
      'Custom training',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Volume licensing',
      'On-premise deployment',
      'Custom integration',
      'SLA guarantee',
      'Dedicated account manager',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
  },
];

export function RevealPricing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  // Title always visible
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  return (
    <section ref={ref} id="pricing" className="py-32 px-6 bg-[#111827]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#9CA3AF]">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ALL CARDS ALWAYS VISIBLE - continuous flow */}
          {plans.map((plan, index) => {
            // Continuous Y position
            const cardY = useTransform(
              scrollYProgress,
              [0.1 + index * 0.05, 0.4 + index * 0.05],
              [60, 0]
            );

            // Continuous opacity - never 0
            const cardOpacity = useTransform(
              scrollYProgress,
              [0.05 + index * 0.05, 0.3 + index * 0.05, 0.7, 1],
              [0.6, 1, 1, 0.8]
            );

            // Continuous scale
            const cardScale = useTransform(
              scrollYProgress,
              [0.2 + index * 0.05, 0.5 + index * 0.05],
              [0.96, 1]
            );

            return (
              <motion.div
                key={index}
                className={`bg-[#111827] border rounded-2xl p-8 relative overflow-hidden ${
                  plan.popular ? 'lg:-mt-4 lg:mb-0' : ''
                }`}
                style={{
                  y: cardY,
                  opacity: cardOpacity,
                  scale: cardScale,
                  borderColor: plan.popular ? '#4F46E5' : '#1F2937',
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] to-[#6366F1]" />
                )}

                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  style={{
                    background: plan.popular
                      ? 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.1) 0%, transparent 70%)'
                      : 'radial-gradient(circle at 50% 0%, rgba(100, 116, 139, 0.05) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  {plan.popular && (
                    <div className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/20 text-[#4F46E5] text-xs mb-4">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl text-[#E5E7EB] mb-2">{plan.name}</h3>

                  <div className="mb-6">
                    <span className="text-4xl text-[#E5E7EB]">{plan.price}</span>
                    {plan.period && (
                      <span className="text-[#9CA3AF] text-lg">{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-[#9CA3AF] text-sm flex items-start gap-2"
                      >
                        <span className="text-[#10B981] mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full px-4 py-3 rounded-lg text-center transition-colors ${
                      plan.popular
                        ? 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'
                        : 'border border-[#1F2937] text-[#E5E7EB] hover:border-[#374151]'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
