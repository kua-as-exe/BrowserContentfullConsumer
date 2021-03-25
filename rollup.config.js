// Rollup plugins
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    output: [
        {file: 'build/js/main.min.js', format: 'es'}
    ],
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        babel({
        exclude: 'node_modules/**',
        }),
    ],
};