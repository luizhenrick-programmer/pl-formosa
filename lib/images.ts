const B = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const IMG = {
  hero: { src: B + '/img/hero.jpg', width: 2000, height: 1000 },
  pl: { src: B + '/img/pl.png', width: 124, height: 134 },
  plj: { src: B + '/img/plj.png', width: 225, height: 225 },
  plm: { src: B + '/img/plm.jpg', width: 447, height: 447 },
  adriano: { src: B + '/img/adriano.jpg', width: 640, height: 689 },
  luiz: { src: B + '/img/luiz.jpg', width: 640, height: 690 },
  ivana: { src: B + '/img/ivana.jpg', width: 640, height: 690 },
} as const;
