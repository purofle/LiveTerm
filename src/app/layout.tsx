import { Metadata, Viewport } from 'next'
import React from 'react'
import config from '../../config.json'

export const viewport: Viewport = {
  initialScale: 1.0,
  width: 'device-width',
  maximumScale: 1.0,
}

export const metadata: Metadata = {
  title: config.title,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
          <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
