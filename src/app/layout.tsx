import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

import './globals.css'
import { siteDescription, siteName } from '@/lib/site-config'
import Header from '@/components/sections/header'

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} flex min-h-screen w-full flex-col bg-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
