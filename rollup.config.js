import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  external: ['prop-types'],

  input: './src/index.ts',

  output: [
    {
      dir: './dist',
      format: 'esm',
      preserveModules: false,
      sourcemap: true,
    },
  ],

  plugins: [
    nodeResolve({
      extensions: ['.js', 'json', '.ts', '.tson'],
    }),
    // Convert CommonJS to ES6:
    commonjs(),
    // Transpile TS & TSX to JS:
    typescript(),
  ],
}
