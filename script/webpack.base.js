const path = require('path');
const 

const filePath = function (path) {
    return path.resolve(__dirname,path);
}

module.exports = {
    entry: filePath('../src/index.ts'),
    output: {
        path: filePath('../dist'),
        filename: 'dno.js'
    },
    resolve: {
        extensions: ['ts']
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins:[]
}