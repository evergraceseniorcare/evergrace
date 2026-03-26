import './globals.css'
import Nav from './nav'
import Footer from './footer'

export const metadata = {
  title: 'EverGrace Senior Care | Irvine, Orange County',
  description: 'Bilingual companion care for Chinese-speaking seniors in Irvine and Orange County. Mandarin & Cantonese. Home visits, driving, cooking, hospital accompaniment and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
