import { CleanHeading } from './CleanHeading';
import { CleanCard } from './CleanCard';

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

export function CleanPricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-6xl mx-auto">
        <CleanHeading 
          title="Pricing"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <CleanCard 
              key={index} 
              hover={false}
              className={plan.popular ? 'border-[#4F46E5]' : ''}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-[#E5E7EB] mb-2">{plan.name}</h3>
                  <div className="text-3xl text-[#E5E7EB]">
                    {plan.price}
                    {plan.period && <span className="text-base text-[#9CA3AF]">{plan.period}</span>}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-[#9CA3AF] text-sm">{feature}</li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full px-4 py-2 rounded-md text-center text-sm transition-colors ${
                    plan.popular
                      ? 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'
                      : 'border border-[#1F2937] text-[#E5E7EB] hover:border-[#374151]'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </a>
              </div>
            </CleanCard>
          ))}
        </div>
      </div>
    </section>
  );
}
