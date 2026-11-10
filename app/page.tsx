import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/images';
import { VALUES, POSTS } from '@/lib/data';
import { Icon, Hd, Presidents, NewsCard, Featured, FormCard } from '@/components/ui';

const STATS = ['Filiados', 'Apoiadores', 'Ações em Formosa', 'Bairros visitados'];
const SHORTCUTS = [
  { i: 'users', t: 'Filie-se ao PL', d: 'Cadastre-se e faça parte do partido.', h: '/filie-se' },
  { i: 'book', t: 'Formação política', d: 'Cursos e capacitação para lideranças.', h: '/partido' },
  { i: 'flag', t: 'Direção municipal', d: 'Conheça quem comanda o PL em Formosa.', h: '/liderancas' },
  { i: 'mail', t: 'Fale conosco', d: 'Sugestões e atendimento.', h: '/contato' },
];
const GALLERY = ['Evento em destaque', 'Encontro de lideranças', 'Caminhada nos bairros', 'Apoio ao comércio local', 'Ação social', 'Diálogo com a comunidade'];
const DOTS = [[150, 120], [250, 100], [210, 190], [120, 200]];

export default function Home() {
  return (
    <>
      <section className="hero">
        <small>PARTIDO LIBERAL · FORMOSA — GOIÁS</small>
        <h1>O futuro de Formosa se constrói <span>agora.</span></h1>
        <p>Deus, Pátria, Família e Liberdade. Conheça quem lidera o PL em Formosa e faça parte desta transformação.</p>
        <div className="row"><Link className="btn" href="/filie-se">QUERO ME FILIAR</Link><Link className="btn o" href="/liderancas">Conheça a liderança</Link></div>
        <Image {...IMG.hero} priority sizes="(max-width:1200px) 100vw, 1200px" alt="Luiz Abreu, Adriano Pinheiro e Ivana Engler" />
        <div className="cap">
          <div><b>Luiz Abreu</b>Presidente do PLJ</div>
          <div className="m"><b>Adriano Pinheiro</b>Presidente do PL Formosa-GO</div>
          <div><b>Ivana Engler</b>Presidente do PL Mulher</div>
        </div>
      </section>
      <div className="stats">{STATS.map((s) => <div key={s}><b>[0000]</b>{s}</div>)}</div>
      <section className="sec"><div className="g4">
        {SHORTCUTS.map((s) => <Link key={s.t} href={s.h} className="sc"><i><Icon n={s.i} /></i><b>{s.t}</b><p>{s.d}</p></Link>)}
      </div></section>
      <section className="sec dk">
        <Hd k="NOSSOS PILARES" lead="Os valores que guiam cada ação do PL em Formosa.">Deus, Pátria, Família e <span>Liberdade</span></Hd>
        <div className="g4">{VALUES.map((v) => <div className="pl" key={v.t}><i><Icon n={v.icon} s={34} /></i><b>{v.t}</b><p>{v.d}</p></div>)}</div>
      </section>
      <section className="sec">
        <Hd k="LIDERANÇA" lead="Presidentes do partido, da juventude e das mulheres.">Quem lidera o <span>PL Formosa</span></Hd>
        <Presidents />
      </section>
      <section className="sec gr"><div className="two">
        <Image {...IMG.adriano} className="who" alt="Adriano Pinheiro" />
        <div>
          <Hd k="PRESIDENTE DO PL FORMOSA" lead="[Frase de apresentação: trajetória e compromisso com Formosa.]">Conheça <span>Adriano Pinheiro</span></Hd>
          <div className="k" style={{ marginBottom: 12 }}>PROPOSTAS &amp; PAUTAS</div>
          {[1, 2, 3, 4, 5].map((n) => <div className="pt" key={n}><b>0{n}</b><div>[Pauta {n}]<span>[Descrição curta da proposta ou bandeira.]</span></div></div>)}
          <Link className="btn" href="/liderancas">SIGA O PRESIDENTE</Link>
        </div>
      </div></section>
      <section className="sec dk">
        <Hd k="PRESENÇA" lead="Coordenações em cada região da cidade e da zona rural.">O PL em <span>todo Formosa</span></Hd>
        <div className="chd"><span>Todas as regiões</span>{Array.from({ length: 8 }).map((_, i) => <span key={i}>[BAIRRO]</span>)}</div>
        <div className="two">
          <div className="mp"><svg viewBox="0 0 400 300" role="img" aria-label="Mapa de Formosa (espaço reservado)">
            <path d="M40 120L110 40L230 30L330 90L360 190L280 260L150 270L60 210Z" fill="#0f4fa0" stroke="#f6c80e" strokeWidth="3" />
            {DOTS.map(([x, y]) => <circle key={x} cx={x} cy={y} r="9" fill="#f6c80e" />)}
            <text x="200" y="152" fill="#fff" fontSize="16" textAnchor="middle">[MAPA DE FORMOSA]</text></svg></div>
          <div className="g2">{[1, 2, 3, 4].map((n) => <div className="rep" key={n}><div className="av">C</div><b>[NOME]</b><span>Coordenação de bairro</span><small>[BAIRRO / REGIÃO]</small></div>)}</div>
        </div>
      </section>
      <section className="sec lt">
        <Hd k="BLOG" lead="Emendas, ações do partido em Formosa e novidades de Goiás e do Brasil.">Últimas <span>notícias</span></Hd>
        <div className="nwx"><Featured /><div className="ls">{POSTS.slice(1, 4).map((p) => <NewsCard key={p.slug} p={p} />)}</div></div>
        <p style={{ marginTop: 28 }}><Link className="btn g" href="/noticias">VER TODAS AS NOTÍCIAS</Link></p>
      </section>
      <section className="sec">
        <Hd k="GALERIA" lead="Encontros, caminhadas e ações do PL junto à população.">Momentos que constroem <span>Formosa</span></Hd>
        <div className="gal">{GALLERY.map((g) => <div className="ph" key={g}>[{g}]</div>)}</div>
      </section>
      <section className="sec dk"><div className="fm">
        <div><Hd k="FILIAÇÃO" lead="Cadastre seu contato e a nossa equipe fala com você.">Faça parte do <span>PL 22</span></Hd></div>
        <FormCard fields={['Nome completo', 'WhatsApp', 'Bairro']} cta="QUERO SER PL 22" />
      </div></section>
      <section className="sec"><div className="g3">
        <Link href="/pl-jovem" className="sub"><Image {...IMG.plj} alt="PLJ" /><div><b>PL Jovem — Formosa</b><span>Subdomínio em breve: plj.[seudominio]</span></div></Link>
        <Link href="/pl-mulher" className="sub"><Image {...IMG.plm} alt="PL Mulher" /><div><b>PL Mulher — Formosa</b><span>Subdomínio em breve: plmulher.[seudominio]</span></div></Link>
      </div></section>
    </>
  );
}
