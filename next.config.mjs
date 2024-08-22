/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    images: {
        domains: ["assets.pokemon.com"],
  },
};

export default nextConfig;
