import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Perfect for trying SRIKA',
    features: [
      'Basic motion tracking',
      '720p camera support',
      'Single user',
      'Community support',
      '5 custom gestures',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Gamer',
    price: '₹499',
    period: 'month',
    description: 'For serious gamers',
    features: [
      'Advanced motion tracking',
      '1080p camera support',
      'Unlimited gestures',
      'Low latency mode',
      'Priority support',
      'Game integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₹1,499',
    period: 'month',
    description: 'For professional use',
    features: [
      'Professional tracking',
      '4K camera support',
      'Multi-user support',
      'SDK access',
      'Custom integrations',
      'Dedicated support',
      'Commercial license',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For organizations',
    features: [
      'Everything in Pro',
      'Unlimited users',
      'On-premise deployment',
      'Custom AI training',
      'SLA guarantee',
      'Account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#111827]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-[#4F46E5]/5 border-2 border-[#4F46E5] shadow-lg shadow-[#4F46E5]/20'
                  : 'bg-[#0F172A] border border-[#1F2937] hover:border-[#4F46E5]/50'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-[#4F46E5] text-white text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#9CA3AF] mb-6">
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#E5E7EB]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[#9CA3AF] ml-2">
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                    <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#4F46E5] text-white hover:bg-[#4338CA] hover:scale-105'
                    : 'bg-[#111827] text-[#E5E7EB] border border-[#1F2937] hover:border-[#4F46E5]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
