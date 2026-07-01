import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mahalakshmi — Aspiring Data Scientist & AI Enthusiast',
  description:
    'Economics graduate turned aspiring Data Scientist. I combine Economics, Data Science and Artificial Intelligence to build intelligent solutions that solve real business problems.',
  keywords: [
    'Data Scientist',
    'Economics',
    'Machine Learning',
    'Artificial Intelligence',
    'Business Analytics',
    'Portfolio',
    'Mahalakshmi',
  ],
  authors: [{ name: 'Mahalakshmi' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Mahalakshmi — Aspiring Data Scientist & AI Enthusiast',
    description:
      'Turning economic knowledge into business impact with Data Science and AI.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0F1F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
