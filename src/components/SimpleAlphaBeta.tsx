import { CleanHeading } from './CleanHeading';
import { CleanCard } from './CleanCard';

export function SimpleAlphaBeta() {
  return (
    <section id="alpha-beta" className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <CleanHeading 
          title="Alpha & Beta"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Alpha */}
          <CleanCard hover={false}>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl text-[#E5E7EB] mb-2">Alpha</h3>
                <p className="text-sm text-[#9CA3AF]">Available now</p>
              </div>
              
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>Core motion detection</li>
                <li>Limited accuracy</li>
                <li>Early adopters</li>
              </ul>
              
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-md border border-[#1F2937] text-[#E5E7EB] hover:border-[#374151] transition-colors text-sm"
              >
                Request Access
              </a>
            </div>
          </CleanCard>
          
          {/* Beta */}
          <CleanCard hover={false}>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl text-[#E5E7EB] mb-2">Beta</h3>
                <p className="text-sm text-[#9CA3AF]">Q2 2026</p>
              </div>
              
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>Improved models</li>
                <li>Custom profiles</li>
                <li>Multi-use support</li>
              </ul>
              
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors text-sm"
              >
                Join Waitlist
              </a>
            </div>
          </CleanCard>
        </div>
        
        {/* Progress bar */}
        <div className="relative">
          <div className="flex justify-between mb-2 text-sm text-[#9CA3AF]">
            <span>Alpha</span>
            <span>Beta</span>
            <span>Public</span>
          </div>
          <div className="h-1 bg-[#1F2937] rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-[#4F46E5] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
