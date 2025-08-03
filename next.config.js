/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static HTML export configuration
  output: 'export',
  
  // Configure image optimization for Next.js Image component
  images: {
    unoptimized: true,
  },
  
  // Trailingslash is recommended for static exports
  trailingSlash: true,
  
  // Configure base path if necessary
  // basePath: '',
}

module.exports = nextConfig
