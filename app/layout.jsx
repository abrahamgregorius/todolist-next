import { Inter } from 'next/font/google'
import { Providers } from './provider.jsx'
import './globals.css'
import Header from './_partials/Header/index.js'
import Footer from './_partials/Footer/index.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-do list app',
  description: 'My first NextJS app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header></Header>
            {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
