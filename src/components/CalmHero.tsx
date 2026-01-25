export function CalmHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Very subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B]/20 to-[#0F172A]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E5E7EB] tracking-tight leading-[1.1]">
            The Body-Native Interface
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto">
            SRIKA turns human posture into real-time digital input using AI-powered motion understanding.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors"
            >
              Get Started
            </a>
            
            <a
              href="#pricing"
              className="px-6 py-3 rounded-md border border-[#1F2937] text-[#E5E7EB] hover:border-[#374151] transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
