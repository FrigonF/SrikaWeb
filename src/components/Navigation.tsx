export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-sm border-b border-[#1F2937]">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold text-[#E5E7EB]">
            SRIKA
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Product
            </a>
            <a href="#features" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Pricing
            </a>
            <a href="#alpha-beta" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Alpha & Beta
            </a>
            <a href="#docs" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Docs
            </a>
            <a href="#about" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="px-6 py-2 bg-[#4F46E5] text-white text-sm font-medium rounded-lg hover:bg-[#4338CA] transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
