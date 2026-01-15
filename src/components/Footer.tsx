export function Footer() {
  return (
    <footer className="py-12 bg-[#0F172A] border-t border-[#1F2937]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-xl font-semibold text-[#E5E7EB] mb-3">
              SRIKA
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-md">
              AI-powered full-body motion input for gaming, fitness, XR, and training.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#E5E7EB] mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#docs" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#E5E7EB] mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1F2937] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} SRIKA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
