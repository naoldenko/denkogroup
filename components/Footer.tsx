import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold mb-4">Companies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://sereenminds.com" className="text-white hover:opacity-85 transition-opacity">
                  Sereen
                </Link>
              </li>
              <li>
                <Link href="https://thedenkoagency.com" className="text-white hover:opacity-85 transition-opacity">
                  The Denko Agency
                </Link>
              </li>
              <li>
                <Link href="https://noctuse.com" className="text-white hover:opacity-85 transition-opacity">
                  Noctuse
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://linkedin.com/company/denkogroup" 
                  className="text-white hover:opacity-85 transition-opacity"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link 
                  href="https://instagram.com/denkogroupofficial" 
                  className="text-white hover:opacity-85 transition-opacity"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white">
              <li>hello@denkogroup.ca</li>
              <li>Toronto, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Denko Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 