export function MutedFooter() {
  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Docs', href: '#docs' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-[#1F2937] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-[#E5E7EB] mb-4">SRIKA</div>
            <p className="text-sm text-[#9CA3AF]">
              Body-native interface
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-[#E5E7EB] mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-[#1F2937] text-center text-sm text-[#9CA3AF]">
          © {new Date().getFullYear()} SRIKA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
