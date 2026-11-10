import type { Metadata } from 'next';
import { Hd, PageHeader, Presidents, Fil } from '@/components/ui';
import Representantes from '@/components/Representantes';

export const metadata: Metadata = { title: 'Lideranças' };

export default function Liderancas() {
  return (
    <>
      <PageHeader k="LIDERANÇAS" title="Quem faz o PL em Formosa" lead="Presidentes, parlamentares e vereadores que representam o partido." />
      <section className="sec"><Hd k="DIREÇÃO">Presidentes</Hd><Presidents bio /></section>
      <section className="sec lt">
        <Hd k="REPRESENTANTES" lead="Senadores, deputados e vereadores do PL.">Nossos <span>representantes</span></Hd>
        <Representantes />
      </section>
      <Fil />
    </>
  );
}
