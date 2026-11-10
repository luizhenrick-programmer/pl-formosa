import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/images';
import { PRESIDENTS, POSTS } from '@/lib/data';

const PATHS: Record<string, string> = {
  home: 'M3 11l9-8 9 8M5 10v10h14V10', flag: 'M5 21V4M5 4h12l-2 4 2 4H5', cross: 'M12 3v18M6 9h12',
  unlock: 'M5 11h14v10H5zM8 11V7a4 4 0 017-2.5', users: 'M16 20v-2a4 4 0 00-8 0v2M12 12a3 3 0 100-6 3 3 0 000 6',
  mail: 'M3 6h18v12H3zM3 7l9 7 9-7', book: 'M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19V5', dl: 'M12 3v12M7 11l5 5 5-5M4 21h16',
};
export const Icon = ({ n, s = 30 }: { n: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>
);
export const Hd = ({ k, lead, children }: { k: string; lead?: string; children: React.ReactNode }) => (
  <><div className="k">{k}</div><h2>{children}</h2>{lead && <p className="lead">{lead}</p>}</>
);
export const PageHeader = ({ k, title, lead }: { k: string; title: string; lead: string }) => (
  <div className="ph2"><div className="k">{k}</div><h1>{title}</h1><p>{lead}</p></div>
);
export const Fil = () => (
  <section className="fil">
    <div><h2>Faça parte do <span>PL Formosa</span></h2><p>Filie-se ao Partido Liberal e ajude a construir uma Formosa mais livre, segura e próspera.</p></div>
    <Link className="btn" href="/filie-se">QUERO ME FILIAR</Link>
  </section>
);
export const Presidents = ({ bio = false }: { bio?: boolean }) => (
  <div className="g3">
    {PRESIDENTS.map((p) => (
      <div className="pc" key={p.name}>
        <Image {...IMG[p.img]} alt={p.name} />
        <div><span style={{ color: p.color }}>{p.role}</span><h4>{p.name}</h4>
          {bio && <p>[Mini biografia e trajetória política.]</p>}
          <Link href="/liderancas">Conheça</Link></div>
      </div>
    ))}
  </div>
);
export const RepGroup = ({ t, n, c }: { t: string; n: number; c: string }) => (
  <>
    <h3 className="h3">{t}<em>{c}</em></h3>
    <div className="grid">
      {Array.from({ length: n }).map((_, i) => (
        <div className="rep" key={i}><div className="av">{t[0]}</div><b>[NOME]</b><span>{t.endsWith('s') ? t.slice(0, -1) : t}</span><small>[PARTIDO · CIDADE]</small><Link href="/liderancas">Ver perfil</Link></div>
      ))}
    </div>
  </>
);
type Post = (typeof POSTS)[number];
export const NewsCard = ({ p }: { p: Post }) => (
  <Link href={`/noticias/${p.slug}`} className="nw" style={{ display: 'block' }}>
    <div className="ph">[FOTO]</div><small>{p.cat.toUpperCase()} · [DATA]</small><h4>{p.title}</h4><p>[Resumo de duas linhas da matéria.]</p><b style={{ color: '#073a80', fontSize: 14 }}>Continue lendo</b>
  </Link>
);
export const Featured = ({ p = POSTS[0] }: { p?: Post }) => (
  <Link href={`/noticias/${p.slug}`} className="nw ft1" style={{ display: 'block' }}>
    <div className="ph">[FOTO DESTAQUE]</div><small>DESTAQUE · [DATA]</small><h4 style={{ fontSize: 28 }}>[Título da matéria principal]</h4><p>[Resumo da matéria em destaque.]</p><b style={{ color: '#073a80', fontSize: 14 }}>Continue lendo</b>
  </Link>
);
export const FormCard = ({ fields, cta, area = false, consent = true }: { fields: string[]; cta: string; area?: boolean; consent?: boolean }) => (
  <div className="fb">
    {fields.map((f) => <input key={f} className="in" type="text" placeholder={f} aria-label={f} />)}
    {area && <textarea className="in" placeholder="Mensagem" aria-label="Mensagem" />}
    {consent && <label><input type="checkbox" />Concordo em receber contato do PL Formosa, conforme a LGPD.</label>}
    <button type="button" className="btn">{cta}</button>
  </div>
);
export const Soon = ({ logo, name, sub }: { logo: 'plj' | 'plm'; name: string; sub: string }) => (
  <section className="soon">
    <Image {...IMG[logo]} alt={name} /><h1>{name}</h1>
    <p>Em breve, uma página só para o {name}, em {sub}.</p>
    <Link className="btn g" href="/">Voltar ao início</Link>
  </section>
);
