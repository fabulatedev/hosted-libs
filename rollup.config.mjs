import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';


export default (async () => ({
  input: 'main.js',
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ],
  output: {
    file: 'rjv_main.js',
    format: 'iife',
    name: 'ReactJson',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  }

}))();
