import { CleanHeading } from './CleanHeading';
import { CleanCard } from './CleanCard';

const features = [
  'Full-body motion input',
  'AI pose recognition',
  'Real-time response',
  'Works with standard cameras',
  'Custom control profiles',
  'Developer SDK',
  'Privacy-first design',
  'Scales from gaming to enterprise',
];

export function CleanFeatures() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <CleanHeading 
          title="Features"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <CleanCard key={index} hover={true}>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                <span className="text-lg text-[#E5E7EB]">{feature}</span>
              </div>
            </CleanCard>
          ))}
        </div>
      </div>
    </section>
  );
}
