import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import ScrollIndicator from '@/components/ScrollIndicator'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Denko Group',
  description: 'Tech, Healthcare, and Entertainment',
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
  },
  openGraph: {
    title: 'Denko Group',
    description: 'Tech, Healthcare, Entertainment',
    url: 'https://denkogroup.com',
    images: [
      {
        url: 'https://denkogroup.com/denko-group-logo.png',
        width: 1200,
        height: 630,
        alt: 'Denko Group Logo'
      }
    ],
    type: 'website',
    siteName: 'Denko Group'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denko Group',
    description: 'Tech, Healthcare, Entertainment',
    images: ['https://denkogroup.com/denko-group-logo.png'],
    site: '@denkogroup'
  },
  linkedin: {
    title: 'Denko Group',
    description: 'Tech, Healthcare, Entertainment',
    images: ['https://denkogroup.com/denko-group-logo.png']
  },
  instagram: {
    title: 'Denko Group',
    description: 'Tech, Healthcare, Entertainment',
    images: ['https://denkogroup.com/denko-group-logo.png'],
    'instagram:creator': '@denkogrp',
    'instagram:site': '@denkogrp'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className={`${poppins.className} bg-[#ff3f3f] text-white`}>
        {children}
        <Footer />
        <ScrollIndicator />
      </body>
    </html>
  )
} 