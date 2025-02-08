import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import ScrollIndicator from '@/components/ScrollIndicator'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-garet'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Denko Group',
  description: 'Tech, Mental Health, and Entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-white text-black`}>
        {children}
        <Footer />
        <ScrollIndicator />
      </body>
    </html>
  )
} 