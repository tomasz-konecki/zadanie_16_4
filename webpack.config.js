module.exports = {
    entry: './src/containers/App.js',
        output: {
        path:__dirname + '/build',
        filename: 'app.bundle.js'
    }
}


    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /\node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    };