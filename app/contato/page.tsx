import type { Metadata } from 'next';
import { PageHeader, FormCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Contato' };

export default function Contato() {
  return (
    <>
      <PageHeader k="CONTATO" title="Fale com o PL Formosa" lead="Sugestões, dúvidas ou atendimento: estamos à disposição." />
      <section className="sec"><div className="two">
        <div style={{ display: 'grid', gap: 16 }}>
          {[['Endereço', '[ENDEREÇO DA SEDE]'], ['Telefone / WhatsApp', '[TELEFONE / WHATSAPP]'], ['E-mail', '[E-MAIL]'], ['Redes sociais', 'Instagram · Facebook · YouTube · X']].map(([t, d]) => <div className="sc" key={t}><b>{t}</b><p>{d}</p></div>)}
        </div>
        <FormCard fields={['Nome completo', 'E-mail', 'Assunto']} area cta="ENVIAR MENSAGEM" consent={false} />
      </div></section>
    </>
  );
}
