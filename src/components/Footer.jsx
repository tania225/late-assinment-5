import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
     <footer className="w-full bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Left Column: Logo & Description */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack Logo"  />
           
          </div>

          <p className="text-sm text-gray-500 max-w-sm">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500 pt-2">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>

        {/* Product Column */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Product</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;