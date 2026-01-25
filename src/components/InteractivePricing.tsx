import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '',
    features: ['Basic features', 'Standard camera support', 'Community access'],
  },
  {
    name: 'Gamer',
    price: '₹499',
    period: '/ month',
    features: ['Advanced control', 'Custom profiles', 'Priority support'],
    popular: true,
  },
  {
    name: 'Pro',
    price: '₹1,499',
    period: '/ month',
    features: ['SDK + customization', 'Full API access', 'Commercial use'],
  },
  {
    name: 'Enterprise',
    price: 'Contact sales',
    period: '',
    features: ['Custom integration', 'Volume licensing', 'Dedicated support'],
  },
];

export function InteractivePricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Pricing" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-[#111827] border rounded-lg p-6 relative overflow-hidden ${
                plan.popular ? 'border-[#4F46E5]' : 'border-[#1F2937]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                borderColor: plan.popular ? '#4F46E5' : '#374151'
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: plan.popular 
                    ? 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.1) 0%, transparent 70%)'
                    : 'radial-gradient(circle at 50% 0%, rgba(100, 116, 139, 0.05) 0%, transparent 70%)',
                }}
              />
              
              <div className="space-y-6 relative z-10">
                <div>
                  <motion.h3
                    className="text-xl text-[#E5E7EB] mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <motion.div
                    className="text-3xl text-[#E5E7EB]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {plan.price}
                    {plan.period && <span className="text-base text-[#9CA3AF]">{plan.period}</span>}
                  </motion.div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="text-[#9CA3AF] text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.a
                  href="#contact"
                  className={`block w-full px-4 py-2 rounded-md text-center text-sm transition-colors ${
                    plan.popular
                      ? 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'
                      : 'border border-[#1F2937] text-[#E5E7EB] hover:border-[#374151]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
