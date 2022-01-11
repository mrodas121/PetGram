const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
        entry: './src/index.js',
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin({
                    template: 'src/index.html'
                })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                            ]
                        }                        
                    }
                }
            ]
        },        
        mode: 'development',
        resolve: {
            extensions: ['.js', '.jsx'],
        },        
        devServer:{
            static: path.join(__dirname,'dist'),
            port: 3111,
            compress: true,
            historyApiFallback: true,
        }
}