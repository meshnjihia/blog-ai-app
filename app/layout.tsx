import Footer from './(shared)/footer/Footer'
import Navbar from './(shared)/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

export const metadata = {
  title: 'ai-powered blog',
  description: 'blog app created using ai technologies',
}

const font = Nunito({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
