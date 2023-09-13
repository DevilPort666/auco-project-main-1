/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['media.licdn.com', 'image.tmdb.org'],
      unoptimized: true,
    },
    output: 'export',
    basePath: process.env.ENVIRONMENT === "dev" ? "devilport666.github.io/auco-project-main-1": undefined,
}

module.exports = nextConfig
