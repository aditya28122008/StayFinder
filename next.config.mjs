/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "indiathrills.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.alphonsostories.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverActions: {
      bodySizeLimit: "10mb", // Adjust the size limit as needed
    }
  },
};

export default nextConfig;
