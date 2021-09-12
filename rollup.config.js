import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser'; // {}外すとエラーが起こる

export default {
  input: 'dist/assets/js/script.js',
  output: {
    file: 'dist/assets/js/script.min.js',
    format: 'iife',
    name: 'script',
  },
  plugins: [resolve(), commonjs(), terser()],
};
