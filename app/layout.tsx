import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins', display: 'swap' });
export const metadata: Metadata = {
  title: { default: 'PL Formosa-GO — Partido Liberal', template: '%s | PL Formosa-GO' },
  description: 'Site do Partido Liberal de Formosa, Goiás: lideranças, notícias e filiação.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body><div className="pg"><Header /><main id="conteudo">{children}</main><Footer /></div></body>
    </html>
  );
}
