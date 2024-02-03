/** @type {import('next').NextConfig} */
const nextConfig = {
  //this how you use external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
