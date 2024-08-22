/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
       unoptimized: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "assets.pokemon.com"
          }
          
        ],
  },
};

export default nextConfig;
