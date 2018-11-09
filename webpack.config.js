/**
 * This Webpack config is used for bundling files for the demo.
 */

const webpack = require("webpack");
const path = require('path');

console.info('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));

module.exports = {
    // devtool: "source-map",
    entry: {
        "index": ["./src/index.tsx"]
    },
    optimization: {
        minimize: true,
        usedExports: true
    },
    output: {
        path       : path.join(__dirname, '/docs'),
        filename   : '[name].js',
        chunkFilename   : '[name].chunk.js',
        publicPath : ''
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            // 'react': 'preact-compat',
            // 'react-dom': 'preact-compat'
        }
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader']
            }
        ]
    }
};