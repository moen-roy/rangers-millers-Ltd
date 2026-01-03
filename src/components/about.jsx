"use client"

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <p className="text-[#7ec96f] font-semibold mb-2">QUALITY MAIZE MILLING</p>
            <h2 className="text-4xl font-black text-[#1a3a2a] mb-6">Your trusted milling partner</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At IMARA PREMIUM MAIZE MILL, we specialize in producing top-quality maize flour that meets the highest
              industry standards. Our commitment to excellence ensures that every grain is milled with precision and
              care, delivering the finest products to our customers. We not only cater to households but also provide
              bulk supplies for businesses in the food industry. With a focus on quality and customer satisfaction, we
              strive to be your trusted partner in maize milling. Experience the best with IMARA PREMIUM MAIZE MILL!
            </p>
            <a href="#footer" className="text-[#7ec96f] font-semibold hover:underline">
              Get in touch
            </a>
          </div>

          {/* Right side - Image */}
          <div>
            <img src="/images/maize-field-corn-crops.jpg" alt="Maize Field" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
