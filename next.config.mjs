/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Changed from 'standalone' to 'export'
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 20000000, // Reduced to 20MB
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 30,
            minChunks: 1,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;