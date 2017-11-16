# webpack入门

webpack是前端一个工具,可以让各个模块进行加载,预处理,再进行打包。现代的前端开发很多环境都依赖webpack构建,angualr,vue官方就推荐使用webpack.

一、全局安装webpack 

    1.npm install webpack -g (默认安装最新版本，可以安装指定版本npm install webpack@2 -g )
    2.安装完成之后用webpack -v 查看webpack的版本

二、工作目录安装webpack

    1.npm init 初始化工作目录 生成package.json文件管理我们项目依赖的包(一路回车)。
    2.npm install webpack --save-dev

三、第一个打包文件
   
    1.在同一个目录下新建 index.html, webpack.config.js文件,
    dist文件夹（存放打包后的文件）src文件夹(存放源代码文件)
    
 ```
2. webpack.config.js是我们webpack的配置文件

module.exports = {
    entry: './src/index.js', //入口文件
    output: {
        path: __dirname + '/dist', //__dirname，就是当前webpack.config.js文件所在的绝对路径
        filename: 'index.demo.js', //打包后的文件名
    }
};
 ```
 ```
3.在index.html文件中引入打包后的文件
<script src="./dist/index.demo.js"></script>
 ```
 ```
4.在src中的index.js文件中写入js代码
function add(a,b){
    return a + b;
}
console.log(add(2,6));
document.write('<h1>'+add(2,6)+'</h1>');
 ```
    5.当前目录下运行 webpack  命令 这是dist文件夹会多出 index.demo.js文件（打包后的文件）

注： 在本地开发中一般会替换掉webpack.config.js 例如：复制一份重命名为webpack_dev.config.js，这是命令行运行时需要使用
webpack_dev中的配置 那么运行 webpack --config webpack_dev.config.js即可。
当然也可以在在package.json 中配置script对象 然后npm run dev即可
```
"scripts": {
"dev" : "webpack --config webpack_dev.config.js --progress --display-modules --colors --display-reasons"
},
```
