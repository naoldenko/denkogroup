'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AnimatedText() {
  const textRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Animation for each text line
    if (textRef.current) {
      const lines = textRef.current.querySelectorAll('.animate-line')
      const highlights = textRef.current.querySelectorAll('.highlight')
      const shapes = textRef.current.querySelectorAll('.shape')
      
      // Main text animation
      gsap.fromTo(
        lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      )
      
      // Highlight words animation
      gsap.fromTo(
        highlights,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          delay: 0.8,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      )
      
      // Background shapes animation
      gsap.fromTo(
        shapes,
        { 
          opacity: 0,
          x: (i) => i % 2 === 0 ? -100 : 100,
          rotation: (i) => i % 2 === 0 ? -90 : 90,
        },
        {
          opacity: 0.8,
          x: 0,
          rotation: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      )
    }
  }, [])
  
  return (
    <section className="py-24 bg-[#ff3f3f] text-white overflow-hidden relative">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape absolute top-[10%] right-[5%] w-32 h-32 rounded-full border-2 border-white/20"></div>
        <div className="shape absolute top-[40%] left-[10%] w-48 h-48 rounded-full border-2 border-white/10"></div>
        <div className="shape absolute bottom-[15%] right-[15%] w-24 h-24 rounded-full border-2 border-white/20"></div>
        <div className="shape absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-white/5"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={textRef}>
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight overflow-hidden">
            <span className="block animate-line">Denko Group is a <span className="highlight relative inline-block">boutique</span></span>
            <span className="block animate-line">startup consultancy focused on</span>
            <span className="block animate-line"><span className="highlight relative inline-block">tech</span>, <span className="highlight relative inline-block">healthcare</span>,</span>
            <span className="block animate-line">and <span className="highlight relative inline-block">entertainment</span> founders.</span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-95 animate-line max-w-3xl leading-relaxed">
            We partner with visionary founders to transform innovative ideas into successful businesses, providing strategic guidance and hands-on support at every stage of growth.
          </p>
          
          <div className="animate-line pt-4">
            <div className="inline-block relative overflow-hidden">
              <div className="w-20 h-1 bg-white/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 