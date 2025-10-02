import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deepak Kumar - AI/ML Researcher & Software Engineer',
  description: 'Deepak Kumar is a Master\'s student at Illinois Institute of Technology specializing in AI/ML, LLM inference optimization, and high-performance computing. Research focus on CUDA kernels, model quantization, and distributed systems.',
  keywords: ['AI/ML', 'LLM', 'CUDA', 'Machine Learning', 'Deep Learning', 'Research', 'Software Engineering'],
  authors: [{ name: 'Deepak Kumar' }],
  openGraph: {
    title: 'Deepak Kumar - AI/ML Researcher & Software Engineer',
    description: 'Research portfolio showcasing work in LLM inference optimization, CUDA kernels, and distributed systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 