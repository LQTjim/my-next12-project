/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  trailingSlash: true, // 讓 `next export` 產生 index.html
  exportTrailingSlash: true, // 確保靜態輸出有 `index.html`
};

module.exports = nextConfig;
