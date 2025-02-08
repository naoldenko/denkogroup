'use client'
import { useState, useEffect } from 'react'

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-50">
        <div 
          className="h-full bg-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll down indicator (visible only at top) */}
      <div className={`fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${scrollProgress > 0 ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-sm text-black/60 mb-2">Scroll</span>
        <div className="w-0.5 h-16 bg-black/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-scroll-down" />
        </div>
      </div>
    </>
  )
} 