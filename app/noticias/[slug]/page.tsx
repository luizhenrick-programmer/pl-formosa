import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS } from '@/lib/data';
import { PageHeader, NewsCard, Fil } from '@/components/ui';

type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: POSTS.find((p) => p.slug === slug)?.title ?? 'Notícia' };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <>
      <PageHeader k={post.cat.toUpperCase()} title={post.title} lead="Publicado em [DATA] · Por [AUTOR]" />
      <section className="sec"><div className="art">
        <div className="ph" style={{ height: 360, marginBottom: 28 }}>[FOTO DA MATÉRIA]</div>
        <p>[Primeiro parágrafo da matéria: o que aconteceu, onde e quando.]</p>
        <p>[Segundo parágrafo: detalhes, falas e dados relevantes para Formosa.]</p>
        <p>[Terceiro parágrafo: próximos passos e como a população pode participar.]</p>
        <p style={{ marginTop: 32 }}><Link className="btn g" href="/noticias">Voltar às notícias</Link></p>
      </div></section>
      <section className="sec lt"><h2>Leia também</h2>
        <div className="g3">{POSTS.filter((p) => p.slug !== slug).slice(0, 3).map((p) => <NewsCard key={p.slug} p={p} />)}</div>
      </section>
      <Fil />
    </>
  );
}
