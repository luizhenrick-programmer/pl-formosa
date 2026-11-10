// Em produção no GitHub Pages, o workflow define NEXT_PUBLIC_BASE_PATH (ex.: /pl-formosa).
// Localmente fica vazio e o site roda normalmente em http://localhost:3000
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};
export default nextConfig;
