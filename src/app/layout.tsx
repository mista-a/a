import Header from '@/layouts/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <div className='bg-amber-400 p-6 flex flex-col h-dvh'>
          <Header />
          <div
            // w-[calc(100vw_-_48px)]
            className={`${inter.className} bg-gray-50 text-black`}
          >
            {children}
          </div>
          <div></div>
        </div>
      </body>
    </html>
  )
}
