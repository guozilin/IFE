# entry --入口文件

1.单入口文件 
```
entry: './src/index.js'
```
2.多入口文件 
```
1).
entry: ['./src/index.js','./src/demo.js']

2).
entry : {
    index : './src/index.js',
    demo : './src/demo.js'
}
```

3.filename --输出的文件名

    1).唯一文件名 ： 'index.bundle.js',
    2).多个文件名 ： '[name].bundle.js'   [id].bundle.js     [name]-[hash].bundle.js     [chunkhash].bundle.js


```
module.exports = {
    entry: {
        index : './src/index.js',
        demo : './src/demo.js'
    }, //入口文件
    output: {
        path: __dirname + '/dist',
        // filename:  '[name].bundle.js'
        // filename: '[id].bundle.js', //0,1
        // filename: '[chunkhash].bundle.js' 
        filename : '[name]-[hash].bundle.js' 
    }
};
```