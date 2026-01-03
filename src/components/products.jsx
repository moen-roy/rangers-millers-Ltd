"use client"
import maizeFlourImage from '../assets/images/packages.png'
import AnimalFeedImage from '../assets/images/animal-feed-grains.jpg'
export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#7ec96f] font-semibold text-center mb-2">QUALITY MAIZE FLOUR</p>
        <h2 className="text-4xl font-black text-[#1a3a2a] text-center mb-12">Freshly milled for your needs</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Premium Maize Flour */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src={maizeFlourImage}
              alt="Premium maize flour package"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-black text-[#1a3a2a] mb-2">Premium maize flour</h3>
              <p className="text-gray-600">Finest quality maize flour available.</p>
            </div>
          </div>

          {/* Animal Feed Products */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={AnimalFeedImage} alt="Animal feed products" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-black text-[#1a3a2a] mb-2">Animal feed products</h3>
              <p className="text-gray-600">Quality feeds for livestock health.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
