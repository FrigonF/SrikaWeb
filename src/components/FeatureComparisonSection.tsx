import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { Check, X } from 'lucide-react';

const comparisonData = {
  headers: ['Feature', 'Free', 'Gamer', 'Pro / Creator', 'Enterprise'],
  rows: [
    { feature: 'Motion Accuracy', values: ['70-80%', '90-95%', '95-98%', '99%+'] },
    { feature: 'Latency', values: ['15-20ms', '<10ms', '<5ms', '<3ms'] },
    { feature: 'Control Profiles', values: ['1', 'Unlimited', 'Unlimited', 'Unlimited'] },
    { feature: 'Custom Gestures', values: [false, true, true, true] },
    { feature: 'SDK Access', values: [false, false, true, true] },
    { feature: 'API Rate Limit', values: ['100/hr', '1000/hr', '10k/hr', 'Unlimited'] },
    { feature: 'Commercial Use', values: [false, false, true, true] },
    { feature: 'Priority Support', values: [false, false, true, true] },
    { feature: 'SLA Guarantee', values: [false, false, false, true] },
    { feature: 'White-label', values: [false, false, false, true] },
  ],
};

export function FeatureComparisonSection() {
  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Feature Comparison"
          subtitle="Compare all features across plans"
        />
        
        <GlassCard hover={false} className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700/50">
                {comparisonData.headers.map((header, i) => (
                  <th 
                    key={i} 
                    className={`px-6 py-4 text-left ${i === 0 ? 'text-gray-400' : 'text-white'} text-sm`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className="border-b border-gray-700/30 hover:bg-purple-500/5 transition-colors"
                >
                  <td className="px-6 py-4 text-white text-sm">{row.feature}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-sm">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="w-5 h-5 text-[#22C55E]" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600" />
                        )
                      ) : (
                        <span className="text-gray-300">{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
        
        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            All plans include access to core motion tracking features. Enterprise plans can be customized to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
