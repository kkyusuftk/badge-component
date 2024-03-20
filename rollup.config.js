import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy'
import fs from 'fs';
import path from 'path';

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  treeshake: {
    annotations: true
  },
  output: {
    dir: "dist",
    format: "es",
    preserveModules: true
  },
  external: ['vue', 'vue-property-decorator'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    babel({ babelHelpers: 'runtime', extensions: ['.ts', '.tsx'] }),
    // outputting the css file in the dist directory
    scss({
      output: (css, styles) => {
        fs.mkdir(path.join('', 'dist/styles'), (err) => {
          fs.writeFile('./dist/styles/output.css', css, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('CSS File outputted')
            }
          });
        });
      }
    }),
    copy({
      targets: [
        { src: 'src/styles/variables.scss', dest: 'dist/styles' },
      ]
    })
  ]
}
