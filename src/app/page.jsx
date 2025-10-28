"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Products from "@/components/products"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Footer />
    </main>
  )
}
