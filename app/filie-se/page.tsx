import type { Metadata } from 'next';
import { Hd, PageHeader, FormCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Filie-se' };
const WHY = [['Voz ativa', 'Participe das decisões e leve as demandas do seu bairro.'], ['Formação política', 'Acesso a cursos e capacitação para novas lideranças.'], ['Rede de apoio', 'Faça parte de uma comunidade com PL Jovem e PL Mulher.']];

export default function FilieSe() {
  return (
    <>
      <PageHeader k="FILIAÇÃO" title="Filie-se ao PL 22" lead="Preencha seus dados e a equipe do PL Formosa entra em contato com você." />
      <section className="sec"><div className="two">
        <div>
          <Hd k="POR QUE SE FILIAR">Faça parte de uma <span>Formosa mais livre</span></Hd>
          <div style={{ display: 'grid', gap: 16 }}>{WHY.map(([t, d]) => <div className="sc" key={t}><b>{t}</b><p>{d}</p></div>)}</div>
        </div>
        <FormCard fields={['Nome completo', 'WhatsApp', 'E-mail', 'Bairro', 'Data de nascimento']} cta="QUERO SER PL 22" />
      </div></section>
    </>
  );
}
