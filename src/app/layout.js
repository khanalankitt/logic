import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'
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
      <head>
        <meta property="og:image" content="/preview.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <NavBar/>
        <hr />
       
            {children}
       
      </body>
    </html>
  )
}
