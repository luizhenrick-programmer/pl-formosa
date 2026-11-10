'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV } from '@/lib/data';
import { IMG } from '@/lib/images';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const on = (h: string) => (h === '/' ? path === '/' : path.startsWith(h));
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <div className="tb"><span>Acompanhe nossas redes: Instagram · Facebook · YouTube · X</span><span>Buscar · Doação</span></div>
      <header className={'nav' + (open ? ' open' : '')}>
        <Link href="/" aria-label="PL Formosa — início"><Image {...IMG.pl} alt="Partido Liberal" priority /></Link>
        <button type="button" className="burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav aria-label="Principal">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className={on(i.href) ? 'on' : ''} aria-current={on(i.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{i.label}</Link>
          ))}
        </nav>
        <Link className="btn g" href="/filie-se">FILIE-SE</Link>
      </header>
      <Link href="/filie-se" className="strip"><b>Filie-se ao PL 22.</b> Faça parte da nossa história em Formosa!</Link>
    </>
  );
}
