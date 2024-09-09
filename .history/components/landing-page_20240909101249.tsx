'use client'

import { useState } from 'react'
import Link from 'next/link'
// Remove the following line:
// import Image from 'next/image'
import { Menu, X, ChevronRight, Users, Info, Home, DollarSign, Newspaper } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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
              Powering Digital Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Join us in building the foundation for the digital future
            </p>
            <Button asChild size="lg">
              <Link href="/invest-now">
                Invest Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              7-OKS is dedicated to developing state-of-the-art data centers across emerging markets, 
              bridging the digital divide and accelerating economic growth through robust digital infrastructure.
            </p>
            <div className="text-center">
              <Button variant="outline" asChild size="lg">
                <Link href="/about">
                  Learn More About Us <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
            <Button variant="outline" asChild size="lg">
              <Link href="/team">
                Meet the Team <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Insights</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest thoughts on the data center industry and digital infrastructure in emerging markets.
            </p>
            <Button variant="outline" asChild size="lg">
              <Link href="/blog">
                Read Our Blog <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-lg mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} 7-OKS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">
      {icon}
      <span>{children}</span>
    </Link>
  )
}

function HighlightCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}