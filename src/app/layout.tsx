import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Fetal Uzman', template: '%s | Fetal Uzman' },
  description: 'Gebelikte güvenli takip ve risk yönetimi için bilgi platformu.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  )
}
