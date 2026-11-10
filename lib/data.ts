export const NAV = [
  { href: '/', label: 'Início' }, { href: '/partido', label: 'O Partido' }, { href: '/liderancas', label: 'Lideranças' },
  { href: '/noticias', label: 'Notícias' }, { href: '/pl-jovem', label: 'PL Jovem' }, { href: '/pl-mulher', label: 'PL Mulher' }, { href: '/contato', label: 'Contato' },
];
export const CATS = ['Emendas', 'Formosa', 'Goiás', 'Brasil', 'Eventos'];
export const VALUES = [
  { icon: 'cross', t: 'Deus', d: 'Fé como alicerce de uma sociedade que respeita a vida e os valores cristãos.' },
  { icon: 'flag', t: 'Pátria', d: 'Amor ao Brasil, à nossa bandeira e ao futuro que queremos deixar para os nossos filhos.' },
  { icon: 'home', t: 'Família', d: 'A família como base de toda sociedade livre, forte e responsável.' },
  { icon: 'unlock', t: 'Liberdade', d: 'Liberdade individual, econômica e de expressão, com menos Estado e mais oportunidades.' },
];
export const MANIFESTO = [
  { t: 'Liberdade', d: 'Autonomia individual, econômica e de expressão, com respeito à propriedade privada.' },
  { t: 'Família', d: 'Núcleo formador de caráter, valores e responsabilidade.' },
  { t: 'Segurança', d: 'Mais policiamento, penas firmes e uma cidade onde se possa viver em paz.' },
  { t: 'Educação de qualidade', d: 'Gestão eficiente e formação que prepare o jovem para o futuro.' },
  { t: 'Inovação', d: 'Empreendedorismo e tecnologia gerando emprego e renda.' },
  { t: 'Representação', d: 'Mais jovens, mulheres e lideranças locais nos espaços de decisão.' },
];
export const PRESIDENTS = [
  { img: 'adriano', name: 'Adriano Pinheiro', role: 'Presidente do PL Formosa-GO', color: '#f6c80e' },
  { img: 'luiz', name: 'Luiz Abreu', role: 'Presidente do PLJ — PL Jovem', color: '#f6c80e' },
  { img: 'ivana', name: 'Ivana Engler', role: 'Presidente do PL Mulher', color: '#f48fb1' },
] as const;
export const GROUPS = [
  { id: 'senadores', t: 'Senadores', n: 3, c: 'Goiás' },
  { id: 'federais', t: 'Deputados Federais', n: 4, c: 'Goiás' },
  { id: 'estaduais', t: 'Deputados Estaduais', n: 4, c: 'Goiás' },
  { id: 'vereadores', t: 'Vereadores', n: 4, c: 'Formosa' },
];
export const POSTS = [
  { slug: 'emendas-para-formosa', cat: 'Emendas', title: '[Título: emendas para Formosa]' },
  { slug: 'acao-do-partido-em-formosa', cat: 'Formosa', title: '[Título: ação do partido em Formosa]' },
  { slug: 'pl-em-goias', cat: 'Goiás', title: '[Título: o PL em Goiás]' },
  { slug: 'pl-no-brasil', cat: 'Brasil', title: '[Título: o PL no Brasil]' },
  { slug: 'encontro-de-liderancas', cat: 'Eventos', title: '[Título: encontro de lideranças]' },
  { slug: 'agenda-do-partido', cat: 'Formosa', title: '[Título: agenda do partido]' },
];
