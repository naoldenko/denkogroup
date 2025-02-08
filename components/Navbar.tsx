'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-20">
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:opacity-85 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="text-black hover:opacity-85 transition-opacity">
              About
            </Link>
            <Link href="/companies" className="text-black hover:opacity-85 transition-opacity">
              Companies
            </Link>
            <Link href="/news" className="text-black hover:opacity-85 transition-opacity">
              News
            </Link>
            <Link href="/contact" className="text-black hover:opacity-85 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 