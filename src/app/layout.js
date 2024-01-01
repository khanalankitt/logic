import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'
import Footer from './(components)/footer/page'
import NavBar from './(components)/navbar/page'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Logic Gates Visualizer',
  description: `Unleash the power of logic gates! 
  ⚡️ This free visualizer lets you explore digital circuits in real-time.  
  Watch outputs change instantly
  and master key concepts like AND, OR, and XOR.  
  Perfect for students, educators, engineers, and curious minds - 
  start building the future of logic today! ✨`
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <hr />

        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
