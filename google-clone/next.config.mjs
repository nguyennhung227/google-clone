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
    API_KEY: "AIzaSyDpkEuzh7_jDAfpL1Q_TsHTQ8Kbc14Jlbc",
    CX: "a1437d969c31b47f6",
  },
};

export default nextConfig;
