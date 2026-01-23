import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { Eye, Brain, Zap, Cpu, Gauge } from 'lucide-react';

const techStack = [
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced image processing and feature extraction pipeline',
    color: '#8B5CF6',
  },
  {
    icon: Brain,
    title: 'Pose Estimation',
    description: 'Neural network trained on millions of human poses',
    color: '#22D3EE',
  },
  {
    icon: Zap,
    title: 'Machine Learning',
    description: 'Real-time inference optimized for consumer hardware',
    color: '#EF4444',
  },
  {
    icon: Cpu,
    title: 'Input Engine',
    description: 'Low-level system integration for instant response',
    color: '#22C55E',
  },
  {
    icon: Gauge,
    title: 'Optimization Layer',
    description: 'Multi-threaded processing with GPU acceleration',
    color: '#F59E0B',
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12] via-blue-900/10 to-[#0A0D12]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Powered by Advanced AI"
          subtitle="The technology stack that makes magic happen"
        />
        
        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <GlassCard key={index} hover={true} className="text-center group">
                <div className="space-y-4">
                  <div 
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${tech.color}20`,
                      boxShadow: `0 0 30px ${tech.color}40`
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>
                  
                  <h4 className="text-lg text-white">
                    {tech.title}
                  </h4>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
        
        {/* Architecture Diagram */}
        <GlassCard hover={false} className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-white mb-2">System Architecture</h3>
            <p className="text-gray-400 text-sm">End-to-end processing pipeline</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
            {[
              { label: 'Camera Input', color: '#8B5CF6' },
              { label: 'CV Processing', color: '#22D3EE' },
              { label: 'AI Model', color: '#EF4444' },
              { label: 'Input Mapping', color: '#22C55E' },
              { label: 'Game Output', color: '#F59E0B' },
            ].map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center">
                  <div 
                    className="w-20 h-20 rounded-lg mx-auto flex items-center justify-center mb-2 font-mono text-sm"
                    style={{
                      backgroundColor: `${step.color}20`,
                      border: `2px solid ${step.color}40`,
                      color: step.color
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap">{step.label}</div>
                </div>
                
                {i < 4 && (
                  <div className="hidden md:block mx-4">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
