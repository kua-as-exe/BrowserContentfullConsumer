//import { rollup } from 'rollup';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from 'rollup-plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

//import resolve from 'rollup-plugin-node-resolve';

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    replace({
        'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
        presets: ["@babel/preset-react"],
    }),
    nodePolyfills(),
    nodeResolve({
        extensions: [".js"],
    }),
    //resolve(),
    commonjs({
        include: 'node_modules/**'
    }),
    json(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ]
};