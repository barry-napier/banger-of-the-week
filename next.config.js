/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "ideal-barnacle-7v7wrqq7j5whj96-3000.app.github.dev", // Codespaces
      ],
    },
  },
};

module.exports = nextConfig;
