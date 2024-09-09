'use client'

import { useState } from 'react'
import { Menu, X, ChevronRight, Download, Users, Info, Home, DollarSign, Newspaper } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">7-OKS</Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" icon={<Home className="w-4 h-4" />}>Home</NavLink>
            <NavLink href="/about" icon={<Info className="w-4 h-4" />}>About</NavLink>
            <NavLink href="/team" icon={<Users className="w-4 h-4" />}>Team</NavLink>
            <NavLink href="/blog" icon={<Newspaper className="w-4 h-4" />}>Blog</NavLink>
            <NavLink href="/invest-now" icon={<DollarSign className="w-4 h-4" />}>Invest Now</NavLink>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <NavLink href="/" icon={<Home className="w-4 h-4" />}>Home</NavLink>
              <NavLink href="/about" icon={<Info className="w-4 h-4" />}>About</NavLink>
              <NavLink href="/team" icon={<Users className="w-4 h-4" />}>Team</NavLink>
              <NavLink href="/blog" icon={<Newspaper className="w-4 h-4" />}>Blog</NavLink>
              <NavLink href="/invest-now" icon={<DollarSign className="w-4 h-4" />}>Invest Now</NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section className="hero bg-gray-50 py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Powering Digital Infrastructure in Latin America
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Join us in building the foundation for the region's digital future
            </p>
            <Link
              href="/invest-now"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              Invest Now <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              7-OKS is dedicated to developing state-of-the-art data centers across Latin America, 
              bridging the digital divide and accelerating economic growth through robust digital infrastructure.
            </p>
            <div className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors duration-300"
              >
                Learn More About Us <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Investment Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <HighlightCard
                title="Market Potential"
                description="Tap into the rapidly growing Latin American data center market, projected to reach $9.5 billion by 2025."
              />
              <HighlightCard
                title="Strategic Locations"
                description="Prime locations in key urban centers, ensuring optimal connectivity and market reach."
              />
              <HighlightCard
                title="Sustainable Growth"
                description="Eco-friendly designs and operations, aligning with global sustainability trends and regulations."
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              Led by industry veterans with decades of experience in data center development and operations.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors duration-300"
            >
              Meet the Team <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Insights</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest thoughts on the data center industry and digital infrastructure in Latin America.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors duration-300"
            >
              Read Our Blog <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-