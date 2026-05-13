import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRoute — AI Sentiment Routing for Customer Feedback',
  description: 'Analyze customer feedback sentiment and automatically route to the right team with priority scoring. Built for SaaS customer success managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="166d07c6-bbc0-4832-81c8-056b81a9206e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
