/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
    ],
  },

  env: {
    API_KEY: "",
    TOKEN: "",
  },
};

export default nextConfig;
