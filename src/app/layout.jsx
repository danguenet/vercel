import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Dan Guenet',
    default:
      'Dan Guenet - Aspiring Vercel Employee',
  },
  description:
    'I’m Dan, an aspiring Vercel Employee. I have an extensive background in go-to-market operations and I have a lot to offer. I look forward to chatting!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
