/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  distDir: '.next',
  // Remove any eslint configurations from here
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 20000000,
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
              if (!module.context) return 'vendor';
              const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              return match ? `npm.${match[1].replace('@', '')}` : 'vendor';
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