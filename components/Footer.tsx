import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* <div>
            <h4 className="font-bold mb-4">Companies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://sereenminds.com" className="text-black hover:text-[#ff3f3f] transition-colors duration-300 relative group">
                  <span>Sereen</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3f3f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="https://thedenkoagency.com" className="text-black hover:text-[#ff3f3f] transition-colors duration-300 relative group">
                  <span>The Denko Agency</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3f3f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="https://noctuse.com" className="text-black hover:text-[#ff3f3f] transition-colors duration-300 relative group">
                  <span>Noctuse</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3f3f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://linkedin.com/company/denkogroup" 
                  className="text-black hover:text-[#ff3f3f] transition-colors duration-300 relative group"
                >
                  <span>LinkedIn</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3f3f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://instagram.com/denkogrp" 
                  className="text-black hover:text-[#ff3f3f] transition-colors duration-300 relative group"
                >
                  <span>Instagram</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3f3f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-black">
              <li>hello@denkogroup.ca</li>
              <li>Toronto, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-black text-sm">
          <p>&copy; {new Date().getFullYear()} Denko Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 