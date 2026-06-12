import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Lora } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '900'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Kutlukent | Samsun Site ve Tesis Yönetimi',
  description:
    'Samsun merkezli Kutlukent Site ve Tesis Yönetimi. Şeffaf yönetim, aidat takibi, teknik operasyon ve dijital süreç yönetimi çözümleri.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${montserrat.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}