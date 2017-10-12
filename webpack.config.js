const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports ={
    devtool:'source-map',
    entry:'./src/app/main.ts',
    output: {
        path: path.resolve('./wwwroot/js/'),
        filename:'bundle.js',
        sourceMapFilename:'bundle.js.map',
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },

        ]
    },
    resolve:{
        extensions: ['.ts','.tsx','.js'],
        alias:{
            app: path.resolve(__dirname,'src/app')
        }
    },
    plugins:[
        new CopyWebpackPlugin([
            {from: 'src/static' , to:'../'}
        ])
    ]
};