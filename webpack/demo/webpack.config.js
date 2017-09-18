console.log(__dirname,__filename);
module.exports = {
    entry: './index.js', //入口文件
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js',
    }
};