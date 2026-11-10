import type { Metadata } from 'next';
import { Soon } from '@/components/ui';

export const metadata: Metadata = { title: 'PL Jovem' };
export default function PLJovem() { return <Soon logo="plj" name="PL Jovem Formosa" sub="plj.[seudominio]" />; }
