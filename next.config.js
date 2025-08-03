/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Properly handle CSS imports
  transpilePackages: [],
  
  // Configure asset paths
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  
  // Static HTML export configuration
  output: 'export',
  
  // Configure image optimization for Next.js Image component
  images: {
    unoptimized: true,
  },
  
  // Enable SWC for faster builds
  experimental: {
    swcTraceProfiling: true,
  },
  
  // Webpack configuration to handle our CSS and JS files
  webpack: (config, { isServer }) => {
    // Add support for importing CSS
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    
    return config;
  },
}

module.exports = nextConfig
