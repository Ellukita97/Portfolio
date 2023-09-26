import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import MenuPage from '@/components/MenuPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portafolio 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <MenuPage/>
        {children}
      </body>
    </html>
  )
}
