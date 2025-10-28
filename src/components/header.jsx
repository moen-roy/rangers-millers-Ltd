"use client"

export default function Header() {
  return (
    <header className="bg-[#1a3a2a] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Ranges Millers on top */}
        <div className="text-center mb-2">
          <p className="text-sm font-semibold text-[#7ec96f]">Ranges Millers</p>
        </div>

        {/* Main header with title and nav */}
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-black">
              <span className="text-white">IMARA</span>
              <span className="text-white"> PREMIUM MAIZE MILL</span>
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 mt-6">
          <a href="#home" className="hover:text-[#7ec96f] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#7ec96f] transition">
            About
          </a>
          <a href="#products" className="hover:text-[#7ec96f] transition">
            Products
          </a>
          <a
            href="#footer"
            className="border border-white px-4 py-2 rounded hover:bg-[#7ec96f] hover:border-[#7ec96f] transition"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  )
}
