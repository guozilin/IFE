console.log(__dirname,__filename);

var HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
    entry: {
        index : './src/index.js',
        demo : './src/demo.js',
        config : './libs/config.js'
    }, //入口文件
    output: {
        path: __dirname + '/dist',
        filename:  'js/[name].bundle.js'
        // filename: 'js/[id].bundle.js', //0,1
        // filename: 'js/[chunkhash].bundle.js' 
        // filename : 'js/[name]-[hash].bundle.js' 
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template:'./index.html',
            //filename: 'index-[hash].html', //打包生成的文件名，还可以加目录，默认没有写的时候是index.html
            filename : 'tmpl/index.html',
            // inject: 'head',  //js也在head引入
            // inject: 'body',  //js也在body引入
            // inject: false //buyinru 
            inject: true,
            title: '你们想学习webpack吗？',
            date: '2017-09-14 14:43:10',
            userName: 'guozl',
            age: 26,
            hash: true,
            chunks: ['index','config']
        }
    )],
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            include: [path.resolve(__dirname,'src')],
            use: {loader: 'babel-loader'}
        },{
            test: /\.js$/,
            exclude: /(node_modules)/,
            include: [path.resolve(__dirname,'src')],
            use: {loader: 'babel-loader',}
        },{
            test: /\.css$/,
            use:{loader: "css-loader"}//添加对样式表的处理
        }]
    }
};