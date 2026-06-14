import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Om Deshmukh — v4.0',
  description: 'Still becoming something interesting.',
  openGraph: {
    title: 'Om Deshmukh — v4.0',
    description: 'Still becoming something interesting.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-text font-sans antialiased min-h-screen">
        <Nav />
        <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          {children}
        </main>
        <footer className="max-w-3xl mx-auto px-6 py-10 border-t border-border mt-20">
          <p className="text-muted text-sm leading-relaxed">
            Currently at <span className="font-mono text-accent">v4.0</span>. Open to problems that would justify a major version bump.{' '}
            <a
              href="mailto:om@example.com"
              className="text-dim hover:text-text transition-colors underline underline-offset-2"
            >
              om@example.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
