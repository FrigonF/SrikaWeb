import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';

export function ProductOverviewSection() {
  return (
    <section id="product" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="The SRIKA Engine"
          subtitle="Industrial-grade motion capture meets gaming-grade performance"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Technical Details */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-white">
                Built for Performance
              </h3>
              <p className="text-gray-400 leading-relaxed">
                SRIKA Engine combines state-of-the-art computer vision with optimized real-time processing. 
                Our proprietary AI model delivers accurate pose estimation with minimal computational overhead.
              </p>
            </div>
            
            {/* Supported Platforms */}
            <GlassCard hover={false} className="space-y-4">
              <h4 className="text-lg text-white">Supported Platforms</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Windows 10/11', 'macOS 12+', 'Linux (Ubuntu)', 'Steam Deck'].map((platform, i) => (
                  <div key={i} className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Monitor className="w-4 h-4 text-[#8B5CF6]" />
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            {/* Hardware Requirements */}
            <GlassCard hover={false} className="space-y-4">
              <h4 className="text-lg text-white">Hardware Requirements</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Cpu className="w-5 h-5 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm">Processor</div>
                    <div className="text-gray-400 text-xs">Intel i5 / AMD Ryzen 5 or better</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HardDrive className="w-5 h-5 text-[#EF4444] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm">Memory</div>
                    <div className="text-gray-400 text-xs">8GB RAM minimum, 16GB recommended</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wifi className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm">Camera</div>
                    <div className="text-gray-400 text-xs">Any standard webcam (720p min, 1080p recommended)</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Right: Dashboard Mockup */}
          <div className="relative">
            <GlassCard hover={false} className="p-0 overflow-hidden">
              {/* Dashboard Header */}
              <div className="p-6 border-b border-purple-500/20">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-white font-mono text-sm">SRIKA Dashboard</div>
                    <div className="text-gray-500 text-xs">Real-Time Control Panel</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400">Active</span>
                  </div>
                </div>
              </div>
              
              {/* Skeleton Overlay Visualization */}
              <div className="p-6 space-y-6">
                {/* Body Skeleton Preview */}
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Skeleton stick figure */}
                    <svg viewBox="0 0 200 300" className="w-32 h-48 text-[#8B5CF6]">
                      {/* Head */}
                      <circle cx="100" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
                      {/* Body */}
                      <line x1="100" y1="60" x2="100" y2="150" stroke="currentColor" strokeWidth="2" />
                      {/* Arms */}
                      <line x1="100" y1="80" x2="60" y2="120" stroke="currentColor" strokeWidth="2" />
                      <line x1="100" y1="80" x2="140" y2="120" stroke="currentColor" strokeWidth="2" />
                      {/* Legs */}
                      <line x1="100" y1="150" x2="70" y2="230" stroke="currentColor" strokeWidth="2" />
                      <line x1="100" y1="150" x2="130" y2="230" stroke="currentColor" strokeWidth="2" />
                      {/* Joints */}
                      <circle cx="100" cy="60" r="4" fill="#22D3EE" className="animate-pulse" />
                      <circle cx="100" cy="80" r="4" fill="#22D3EE" />
                      <circle cx="60" cy="120" r="4" fill="#22D3EE" />
                      <circle cx="140" cy="120" r="4" fill="#22D3EE" />
                      <circle cx="100" cy="150" r="4" fill="#22D3EE" />
                      <circle cx="70" cy="230" r="4" fill="#22D3EE" />
                      <circle cx="130" cy="230" r="4" fill="#22D3EE" />
                    </svg>
                  </div>
                  
                  {/* Grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                
                {/* Control Mapping */}
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">Control Mapping</div>
                  <div className="space-y-2">
                    {[
                      { action: 'Jump', gesture: 'Arms Up', mapped: true },
                      { action: 'Crouch', gesture: 'Knee Bend', mapped: true },
                      { action: 'Punch', gesture: 'Arm Extend', mapped: false },
                    ].map((mapping, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-purple-900/10 border border-purple-500/10">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${mapping.mapped ? 'bg-[#22C55E]' : 'bg-gray-600'}`} />
                          <span className="text-white text-sm">{mapping.action}</span>
                        </div>
                        <span className="text-gray-400 text-xs font-mono">{mapping.gesture}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sensitivity Sliders */}
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">Sensitivity</div>
                  {['Motion', 'Threshold'].map((label, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">{label}</span>
                        <span className="text-[#8B5CF6] font-mono">{85 - i * 10}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full"
                          style={{ width: `${85 - i * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
