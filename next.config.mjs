/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
      optimizeCss: true,
    },
    webpack: (config, { isServer }) => {
      // Enable tree shaking and minification
      config.optimization.minimize = true;
      
      if (!isServer) {
        // Split chunks for client bundles
        config.optimization.splitChunks = {
          chunks: 'all',
          minSize: 20000,
          maxSize: 24000000, // Keep chunks under 24MB
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `npm.${packageName.replace('@', '')}`;
              },
              chunks: 'all',
              minChunks: 1,
            },
          },
        };
      }
      return config;
    },
  };
  
  export default nextConfig;