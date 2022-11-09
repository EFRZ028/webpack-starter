const HtmlWebPack     = require('html-webpack-plugin')
const MiniCssExtract  = require("mini-css-extract-plugin");
const CopyPlugin      = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',

    //con output borra los codumentos existentes y los reescribe
    //sirve en casod e que quewrramos renombrar algun archivo
    output:{
        clean: true
    },
    module: {
        rules:[
            {
                test : /\.html$/,
                loader: 'html-loader',
                options:{
                    sources: false
                }
            },
            {
                test:    /\.css$/,
                exclude: /styles.css$/,
                use:     ['style-loader', 'css-loader']
            },
            {
                test : /styles.css$/,
                use:   [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }

        ]
    },

    optimization: {},

    //exportando y deifnicnedop propiedades del index
    plugins : [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
            //renombrar el archivo con un hash unico cada 
            // que generamos un nuevo cambio
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
           { from: 'src/assets/', to:'assets/' }
            ]
        })

    ]

}