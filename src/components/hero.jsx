"use client"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-[#1a3a2a] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/packages-NvPHtU31xA9kN9TN2CVwsJ9exADsVT.png)",
            backgroundSize: "350px 650px",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-5xl md:text-6xl font-black mb-4 text-balance">Pure maize goodness</h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">Elevate your meals with quality maize flour</p>
        <button className="bg-[#7ec96f] hover:bg-[#6ab85a] text-white font-bold py-3 px-8 rounded transition">
          <a href="#products" className="hover:text-[#7ec96f] transition">
            VIEW PRODUCTS
          </a>
        </button>
      </div>
    </section>
  )
}
