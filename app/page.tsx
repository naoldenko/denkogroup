import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  return (
    <main>
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/denko-group-logo.png"
            alt="Denko Group"
            fill
            className="object-contain p-12"
            priority
          />
        </div>
      </section>
      
      <AnimatedText />
    </main>
  )
} 