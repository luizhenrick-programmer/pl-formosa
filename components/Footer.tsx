import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/lib/images';

export default function Footer() {
  return (
    <>
      <footer className="ft">
        <div><Image {...IMG.pl} alt="Partido Liberal" /><br />PL 22 · Partido Liberal<br />Formosa — Goiás<br />Juntos por Formosa. Juntos por Goiás. Juntos pelo Brasil!</div>
        <div><b>Institucional</b><Link href="/partido">O Partido</Link><br /><Link href="/liderancas">Lideranças</Link><br /><Link href="/noticias">Notícias</Link><br /><Link href="/contato">Contato</Link></div>
        <div><b>Siga o PL</b>Instagram<br />Facebook<br />YouTube<br />X (Twitter)</div>
        <div><b>Contato</b>[ENDEREÇO DA SEDE]<br />[TELEFONE / WHATSAPP]<br />[E-MAIL]</div>
      </footer>
      <div className="cp">© 2026 PL Formosa-GO · Protótipo de identidade visual</div>
    </>
  );
}
