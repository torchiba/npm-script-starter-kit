const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/assets/images/**/*.{jpg,png,gif,svg,ico}'], {
  plugins: [
    imageminMozjpeg({quality: 75}),
    imageminPngquant({quality: '65-80'}),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/images\//, '../../dist/assets/images/');
  },
}).then(() => {
  console.log('Images optimized');
});
