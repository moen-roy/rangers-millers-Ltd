"use client"

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1a3a2a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-black mb-4">IMARA PREMIUM</h3>
            <p className="text-gray-300">Quality maize milling and animal feeds in Kiambu County</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#7ec96f] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#7ec96f] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#7ec96f] transition">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              <a href="tel:+254724169987" className="hover:text-[#7ec96f] transition">
                +254 724 169 987
              </a>
            </p>
            <p className="text-gray-300">
              <a href="mailto:imaramaizemill@gmail.com" className="hover:text-[#7ec96f] transition">
                imaramaizemill@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mt-2">Kiambu County, Kenya</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IMARA PREMIUM MAIZE MILL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
