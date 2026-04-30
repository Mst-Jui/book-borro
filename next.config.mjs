/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  plugins: {
    '@tailwindcss/postcss': {},
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      },
      {
        protocol: "http",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
