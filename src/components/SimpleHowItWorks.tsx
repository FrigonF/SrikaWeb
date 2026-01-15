import { CleanHeading } from './CleanHeading';

const steps = [
  'Camera captures posture',
  'AI extracts keypoints',
  'Motion mapped to intent',
  'System responds instantly',
];

export function SimpleHowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <CleanHeading 
          title="How It Works"
        />
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#111827] border border-[#1F2937] flex items-center justify-center">
                <span className="text-[#4F46E5] font-mono text-sm">{index + 1}</span>
              </div>
              <div className="flex-1 pt-2">
                <p className="text-lg text-[#E5E7EB]">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
