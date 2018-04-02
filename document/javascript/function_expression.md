# 函数表达式

- 定义函数方式：函数声明，函数表达式，Function 构造函数
- 函数声明： function 关键字，函数名称，函数体 => 函数声明提升
```javascript
say()
// 执行代码之前会先读取函数声明
function say(){
    console.log('hi')
}
```
- 函数表达式 var func = function(a,b){//函数体}
- function 关键字号楼面没有标识符的称为匿名函数，它的 name 属性为空字符串
- 函数表达式 使用前必须先赋值
```javascript
say() // error: say is not a function
var say = function(){
    console.log('hi')
}
```

### 递归
- 一个函数通过名字调用自身
```javascript
function factorial(num){
    if(num <= 1){
        return 1
    }else{
        return num * factorial(num - 1)
    }
}
// 当下面这样调用时，会有问题
var newFactorial = factorial;
factorial = null;
newFactorial(3); // factorial 非函数
```
- 通过 arguments.callee 解决
```javascript
function factorial(num){
    if(num <= 1){
        return 1
    }else{
        // 解除了对函数名 factorial 的依赖
        return num * arguments.callee(num - 1)
    }
}
// 然而在严格模式下，访问 callee 是不允许的
```
- 通过命名一个函数表达式解决
```javascript
var factorial = (function f(num){
    if(num <= 1){
        return 1
    }else{
        return num * f(num - 1)
    }
})
```

## 闭包

- 指的是有权访问另一函数作用域中的变量的函数
- 创建方式： 在一个函数内部，创建另一个函数


#### 函数调用时发生了什么？
- 某个函数被调用，首先会创建一个执行环境，及相应的作用域链
- 