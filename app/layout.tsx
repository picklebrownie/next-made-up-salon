import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Made Up Salon',
  description: 'Renew your Doo at this Made Up Salon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
