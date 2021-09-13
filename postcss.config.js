module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['last 2 versions'],
      cascade: true,
    },
    cssnano: {
      preset: 'default',
    },
  },
};
