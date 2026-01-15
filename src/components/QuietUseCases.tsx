import { CleanHeading } from './CleanHeading';
import { CleanCard } from './CleanCard';

const useCases = [
  {
    title: 'Gaming',
    description: 'Full-body control for immersive gameplay without traditional controllers.',
  },
  {
    title: 'Fitness',
    description: 'Real-time form analysis and posture tracking for workout optimization.',
  },
  {
    title: 'Training',
    description: 'Professional simulation environments for medical and industrial training.',
  },
  {
    title: 'XR',
    description: 'Enhanced extended reality experiences with natural body movement.',
  },
  {
    title: 'Accessibility',
    description: 'Alternative input methods for users with different abilities.',
  },
];

export function QuietUseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-5xl mx-auto">
        <CleanHeading 
          title="Use Cases"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <CleanCard key={index} hover={true}>
              <h3 className="text-xl text-[#E5E7EB] mb-3">{useCase.title}</h3>
              <p className="text-[#9CA3AF] leading-relaxed">{useCase.description}</p>
            </CleanCard>
          ))}
        </div>
      </div>
    </section>
  );
}
