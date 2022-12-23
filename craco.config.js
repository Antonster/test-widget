const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/index.js'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/index.js'),
      '@components': path.resolve(__dirname, 'src/components/index.js'),
      '@data': path.resolve(__dirname, 'src/data/index.js'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index.js'),
      '@services': path.resolve(__dirname, 'src/services/index.js'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles/index.js'),
      '@utils': path.resolve(__dirname, 'src/utils/index.js'),
      '@views': path.resolve(__dirname, 'src/views/index.js'),
    },
  },
};
