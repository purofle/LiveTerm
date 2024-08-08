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
      <body>{children}</body>
    </html>
  )
}
