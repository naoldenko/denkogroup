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
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: 'any'
      }
    ],
    apple: {
      url: '/favicon_io/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png'
    },
    other: [
      {
        rel: 'manifest',
        url: '/favicon_io/site.webmanifest'
      }
    ]
  }
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