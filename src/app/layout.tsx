import NavBar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br"
    title='Card Github'>
      
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
      
    </html>
  )
}
