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
  title: 'Samsun Site ve Tesis Yönetimi | Kutlukent',
  description:
    'Kutlukent, Samsun genelinde site, apartman ve tesis yönetimi hizmetleri sunar. Şeffaf yönetim, düzenli operasyon ve profesyonel çözüm ortaklığıyla yaşam alanlarınızı güvenle yönetir.',
  icons: {
    icon: '/images/favicon-seffaf.png?v=1',
    shortcut: '/images/favicon-seffaf.png?v=1',
    apple: '/images/favicon-seffaf.png?v=1',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${montserrat.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}