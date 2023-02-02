import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",  //CommonJS
      sourcemap: true
    },
    {
      file: "build/index.esm.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ 
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
      sourceMap: true,
      inlineSources: true,
      exclude: [
        '**/__tests__',
        '**/tests',
        '**/__mocks__',
        '**/mocks',
        '**/jest-setup.*',
        '**/setupTests.*',
        '**/*.test.*',
        '**/*.stories.*',
        '**/story.*'
      ] 
    }),
    postcss({
      plugins: [],
      minimize: true
    })
  ]
};