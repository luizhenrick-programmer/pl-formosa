import type { Metadata } from 'next';
import Link from 'next/link';
import { MANIFESTO } from '@/lib/data';
import { Icon, Hd, PageHeader, Fil } from '@/components/ui';

export const metadata: Metadata = { title: 'O Partido' };
const TIMELINE = [['1985', 'Fundação do Partido Liberal'], ['[ANO]', 'Chegada do PL a Formosa'], ['[ANO]', '[Marco importante do partido em Formosa]'], ['2026', 'PL Formosa, PLJ e PL Mulher organizados']];

export default function Partido() {
  return (
    <>
      <PageHeader k="O PARTIDO" title="Conheça o Partido Liberal" lead="Nossa história, nossos valores e o compromisso do PL com Formosa." />
      <section className="sec"><div className="two">
        <div>
          <Hd k="HISTÓRIA">Do Brasil para <span>Formosa</span></Hd>
          <p>Em 25 de junho de 1985, o Diário Oficial da União publicou o Manifesto, o Programa e os Estatutos do Partido Liberal, fundado dois dias antes no Rio de Janeiro. Hoje, o PL (número 22) está presente em todo o país, e Formosa faz parte dessa história.</p>
        </div>
        <div className="tl">{TIMELINE.map(([a, b], i) => <div key={i}><b>{a}</b><br />{b}</div>)}</div>
      </div></section>
      <section className="sec lt">
        <Hd k="MANIFESTO" lead="Seis compromissos que orientam o PL Formosa.">O que nos <span>move</span></Hd>
        <div className="g3">{MANIFESTO.map((m, i) => <div className="sc" key={m.t}><div className="num">0{i + 1}</div><b>{m.t}</b><p>{m.d}</p></div>)}</div>
      </section>
      <section className="sec dk">
        <Hd k="IDENTIDADE">Missão, visão e <span>valores</span></Hd>
        <div className="g3">
          <div className="pl"><b>Missão</b><p>[Texto da missão do PL Formosa.]</p></div>
          <div className="pl"><b>Visão</b><p>[Texto da visão do PL Formosa.]</p></div>
          <div className="pl"><b>Valores</b><p>Deus, Pátria, Família e Liberdade.</p></div>
        </div>
      </section>
      <section className="sec"><div className="two">
        <div className="ph" style={{ height: 340 }}>[FOTO DA DIREÇÃO / EVENTO]</div>
        <div>
          <Hd k="PL EM FORMOSA">Juntos por Formosa, <span>Goiás</span> e Brasil</Hd>
          <p>[Texto institucional sobre a atuação do PL em Formosa, suas frentes de trabalho e conquistas.]</p>
          <Link className="btn g" href="/liderancas">Conheça a liderança</Link>
        </div>
      </div></section>
      <section className="sec lt">
        <Hd k="DOWNLOADS" lead="Identidade visual, fotos e documentos do partido.">Materiais <span>oficiais</span></Hd>
        <div className="g3">{['Logos e identidade visual', 'Fotos oficiais', 'Estatuto do partido'].map((t) => <div className="pl" key={t}><i><Icon n="dl" s={34} /></i><b>{t}</b><p>Baixar arquivos</p></div>)}</div>
      </section>
      <Fil />
    </>
  );
}
