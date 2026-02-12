import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

// Pricing templates by country
const pricingTemplates: { [key: string]: PricingPlan[] } = {
  IN: [ // India - Rupees
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
      price: '₹199',
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
      price: '₹499',
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
  ],
  US: [ // USA - Dollars
    {
      name: 'Free',
      price: '$0',
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
      price: '$2.99',
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
      price: '$8.99',
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
  ],
};

// Default pricing for other countries (in USD as fallback)
const defaultPlans: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
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
    price: '$2.99',
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
    price: '$8.99',
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
  const { isDark } = useTheme();
  const [plans, setPlans] = useState<PricingPlan[]>(defaultPlans);
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code || 'US';
        setCountry(countryCode);

        // Set pricing based on country
        if (pricingTemplates[countryCode]) {
          setPlans(pricingTemplates[countryCode]);
        } else {
          setPlans(defaultPlans);
        }
      } catch (error) {
        console.error('Error fetching country:', error);
        // Fallback to default pricing
        setPlans(defaultPlans);
      }
    };

    fetchCountry();
  }, []);

  return (
    <motion.section
      id="pricing"
      className="py-32"
      animate={{
        backgroundColor: 'transparent'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1 border rounded-full text-xs font-medium mb-6"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            PRICING
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Choose the plan that fits your needs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan: PricingPlan, index: number) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              // Subtle elevation for highlighted plan
              animate={plan.highlighted ? {
                y: [-4, -8, -4],
                backgroundColor: isDark ? '#ffffff' : '#000000',
                borderColor: isDark ? '#ffffff' : '#000000'
              } : {
                backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000'
              }}
              style={plan.highlighted ? {
                y: -6,
              } : {}}
              whileHover={{
                y: plan.highlighted ? -12 : -8,
                scale: 1.02,
                boxShadow: plan.highlighted
                  ? (isDark ? "0 25px 70px rgba(255,255,255,0.2)" : "0 25px 70px rgba(0,0,0,0.18)")
                  : (isDark ? "0 20px 60px rgba(255,107,53,0.15)" : "0 20px 60px rgba(0,0,0,0.12)"),
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="p-8 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden shadow-2xl"
            >
              {/* Accent dot */}
              <motion.div
                className={`absolute top-6 right-6 w-3 h-3 rounded-full ${plan.highlighted ? 'bg-[#FF6B35]' : ''
                  }`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                  backgroundColor: plan.highlighted
                    ? '#FF6B35'
                    : (isDark ? '#ffffff' : '#000000')
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />

              {plan.highlighted && (
                <motion.div
                  className="inline-block px-3 py-1 bg-[#FF6B35] text-white text-xs font-bold rounded-full mb-6 uppercase tracking-wide"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Most Popular
                </motion.div>
              )}

              <motion.h3
                className="text-2xl font-bold mb-2"
                animate={{
                  color: plan.highlighted
                    ? (isDark ? '#000000' : '#ffffff')
                    : (isDark ? '#ffffff' : '#000000')
                }}
              >
                {plan.name}
              </motion.h3>
              <motion.p
                className="text-sm mb-8"
                animate={{
                  color: plan.highlighted
                    ? (isDark ? '#666666' : '#E5E5E5')
                    : (isDark ? '#999999' : '#666666')
                }}
              >
                {plan.description}
              </motion.p>

              <div className="mb-8">
                <motion.span
                  className="text-5xl font-bold"
                  animate={{
                    color: plan.highlighted
                      ? (isDark ? '#000000' : '#ffffff')
                      : (isDark ? '#ffffff' : '#000000')
                  }}
                >
                  {plan.price}
                </motion.span>
                {plan.period && (
                  <motion.span
                    className="ml-2"
                    animate={{
                      color: plan.highlighted
                        ? (isDark ? '#666666' : '#E5E5E5')
                        : (isDark ? '#999999' : '#666666')
                    }}
                  >
                    / {plan.period}
                  </motion.span>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08 + featureIndex * 0.05,
                      duration: 0.3
                    }}
                    animate={{
                      color: plan.highlighted
                        ? (isDark ? '#666666' : '#E5E5E5')
                        : (isDark ? '#999999' : '#666666')
                    }}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      animate={{
                        backgroundColor: plan.highlighted
                          ? '#FF6B35'
                          : (isDark ? '#ffffff' : '#000000')
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </motion.div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={plan.name === 'Gamer' || plan.name === 'Pro' ? '#' : '#contact'}
                whileHover={plan.name !== 'Gamer' && plan.name !== 'Pro' ? {
                  scale: 1.05,
                  backgroundColor: "#FF6B35",
                  borderColor: "#FF6B35",
                  color: "#ffffff",
                  boxShadow: "0 8px 25px rgba(255,107,53,0.4)"
                } : {}}
                whileTap={plan.name !== 'Gamer' && plan.name !== 'Pro' ? { scale: 0.98 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`block w-full px-6 py-4 rounded-full font-medium text-center border-2 ${
                  plan.name === 'Gamer' || plan.name === 'Pro' ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                }`}
                animate={{
                  backgroundColor: plan.name === 'Gamer' || plan.name === 'Pro'
                    ? (isDark ? '#333333' : '#E5E5E5')
                    : plan.highlighted
                    ? (isDark ? '#000000' : '#ffffff')
                    : (isDark ? '#ffffff' : '#000000'),
                  color: plan.name === 'Gamer' || plan.name === 'Pro'
                    ? (isDark ? '#666666' : '#999999')
                    : plan.highlighted
                    ? (isDark ? '#ffffff' : '#000000')
                    : (isDark ? '#000000' : '#ffffff'),
                  borderColor: plan.name === 'Gamer' || plan.name === 'Pro'
                    ? (isDark ? '#444444' : '#CCCCCC')
                    : plan.highlighted
                    ? (isDark ? '#000000' : '#ffffff')
                    : (isDark ? '#ffffff' : '#000000')
                }}
              >
                {plan.name === 'Gamer' || plan.name === 'Pro' ? 'Coming Soon' : plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
