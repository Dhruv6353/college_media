/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.dicebear.com",
      "images.pexels.com",
      "platform-lookaside.fbsbx.com",
      "static.xx.fbcdn.net",
      "cdn1.vectorstock.com",
      "scontent.famd3-1.fna.fbcdn.net",
     
     ],
  },
};

module.exports = nextConfig;