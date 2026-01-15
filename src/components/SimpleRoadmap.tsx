import { CleanHeading } from './CleanHeading';

const items = [
  { label: 'Alpha', status: 'done' },
  { label: 'Beta', status: 'progress' },
  { label: 'Public release', status: 'planned' },
  { label: 'SDK expansion', status: 'planned' },
  { label: 'Platform partnerships', status: 'planned' },
];

export function SimpleRoadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-3xl mx-auto">
        <CleanHeading 
          title="Roadmap"
        />
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#1F2937] flex items-center justify-center">
                {item.status === 'done' && (
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                )}
                {item.status === 'progress' && (
                  <div className="w-3 h-3 rounded-full bg-[#4F46E5]" />
                )}
              </div>
              <span className={`text-lg ${item.status === 'planned' ? 'text-[#9CA3AF]' : 'text-[#E5E7EB]'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
