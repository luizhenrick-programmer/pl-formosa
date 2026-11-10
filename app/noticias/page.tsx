import type { Metadata } from 'next';
import { CATS, POSTS } from '@/lib/data';
import { PageHeader, Featured, NewsCard, Fil, FormCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Notícias' };

export default function Noticias() {
  return (
    <>
      <PageHeader k="BLOG" title="Notícias do PL Formosa" lead="Emendas, ações do partido em Formosa e o que acontece em Goiás e no Brasil." />
      <section className="sec">
        <div className="chips">{['Todas', ...CATS].map((c, i) => <span key={c} className={i === 0 ? 'on' : ''}>{c}</span>)}</div>
        <div className="aside">
          <div>
            <div style={{ marginBottom: 28 }}><Featured /></div>
            <div className="g3">{POSTS.map((p) => <NewsCard key={p.slug} p={p} />)}</div>
            <div className="chips" style={{ marginTop: 34 }}><span className="on">1</span><span>2</span><span>3</span><span>Próxima</span></div>
          </div>
          <aside>
            <div className="box"><b>Categorias</b>{CATS.map((c) => <div key={c}>{c}</div>)}</div>
            <div className="box"><b>Instagram @[perfil]</b><div className="ph" style={{ height: 160 }}>[FEED]</div></div>
            <div className="box"><b>Receba as notícias</b><FormCard fields={['Seu e-mail']} cta="ASSINAR" consent={false} /></div>
          </aside>
        </div>
      </section>
      <Fil />
    </>
  );
}
