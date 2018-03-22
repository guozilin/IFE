## 块级作用域绑定

### var 声明及变量提升的机制
- 通过 var 声明的变量，无论在哪里声明，都会被当坐在当前作用域顶部声明的变量
``` javascript
function getValue(condition){
    if(condition){
        var value = 'blue'
        return value
    }else{
        console.log(value)
        //这里可以访问 value 其值为 undefined
        return null
    }
    console.log(value)
    //这里可以访问 value 其值为 undefined
}
```
- 事实上在预编译阶段，JavaScript 引擎会将getValue 函数修改成下面的样子
``` javascript
function getValue(condition){
    var value
    if(condition){
        value = 'blue'
        return value
    }else{
        console.log(value)
        //这里可以访问 value 其值为 undefined
        return null
    }
    console.log(value)
    //这里可以访问 value 其值为 undefined
}
```
- 函数内部 value 的声明被提升至函数顶部。

### 块级声明
- 声明在指定块的作用域之外无法访问的变量，也叫词法作用域
- 存在于函数内部
- 块中 （一对 {} 之间的区域）

#### let 声明
- 基本用法与 var 相同，用来声明变量，可以把变量的作用域限定在当前代码块中
- let 声明的 变量不会被提升
``` javascript
function getValue(condition){
    if(condition){
        let value = 'blue'
        return value
    }else{
        console.log(value)
        // Uncaught ReferenceError: value is not defined
        return null
    }
    console.log(value)
    // Uncaught ReferenceError: value is not defined
    // ES6 强制开启严格模式，严格模式'use strict',变量未声明不能引用，否则回报引用错误
}
```
- 禁止重声明
>* 同一个作用域内不能用 let 重新定义已经存在的变量
``` javascript
var count = 20;
//Uncaught SyntaxError: Identifier 'a' has already been declared
let count = 10;
```
>* 如果当前作用域嵌套在另一作用域之内
``` javascript
var count = 20;
if(condition){
    let count = 10;
}
```
####  const 声明
>* 使用 const 声明常量
>* const 声明的变量一旦被定义，则不可被更改
>* 通过 const 声明的常量必须进行初始化
``` javascript
const a = 10;
// Uncaught TypeError: Assignment to constant variable.
a = 20;
// Uncaught SyntaxError: Missing initializer in const declaration
const b 
```
- const 与 let 声明都是块级标识符，所以常量也只在当前作用域内有效，一旦执行到块外则立即销毁。
- const 声明的常量同样不会被提升至作用域顶部

#### const 声明对象
>* const 声明不允许修改其绑定，但是允许修改值
>* 用 const 声明对象后，可以修改其属性值
``` javascript
const person = {
    name: 'tracy'
}
person.name = 'mark' // 正常执行，可以改变 person 的 name 属性
person.age = 27 // 可以正常添加属性
// Uncaught SyntaxError: Identifier 'person' has already been declared
person = {
    name: 'tracy'
}

const books = [1,2,3]
books.push(4) => [1,2,3,4] // 正常
books = [2,3,4,5] // Uncaught SyntaxError: Identifier 'person' has already been declared

```
#### 临时死区( Temporal Dead Zone)
>* 标准文档中并没有明确 TDZ ，常用来描述let 与 const 的不提升效果
>* JavaScript 引擎在扫描代码的时候，要么将变量提升到作用域顶部，要么将声明放在 TDZ 中
>* 访问 TDZ 中的变量会触发错误
>* 只有执行过变量声明的语句后，变量才会从 TDZ 中移除，可以被正常访问
``` javascript
// 同一个块级作用域中
console.log(typeof value)//Uncaught ReferenceError: value is not defined
// 这时 value 还未从 TDZ 中移除
let value = 100;
// 不同的块级作用域中
console.log(typeof na) // undefined na未被声明 并不在临时死区中
if(condition){
    let na = 'named tracy'
}
```

#### 循环中的块级作用域绑定
- let 实现 for 循环的块级作用域
``` javascript
console.log(i) // 这里可以访问到 i = 10
for(var i=0;i<10;i++){
    console.log(i) // 0~9 输出
}
console.log(i) //这里也可以访问到i = 10
/* ===================== */
for(let i=0;i<10;i++){
    console.log(i) // 0~9 输出
}
console.log(i) //Uncaught ReferenceError: i is not defined
```
#### 循环中的函数
- 使用 var 声明，在循环中创建函数很困难，因为变量在循环外之后依旧可以访问
``` javascript
var funcs = [];
for(var i=0; i<10; i++){
    funcs.push(function(){
        return console.log(i)
    })
}
funcs.forEach(function(func){
    console.log(func)
    func() // 没有按预期输出0~9  而输出了10个10
})
```
>* 由于循环中每次迭代都共享着i，循环结束后 i=10,所以每次调用 console.log(i) 都是输出10
>* 为了解决这个问题，需要在循环中加入立即执行函数
``` javascript
var funcs = [];
for(var i=0; i<10; i++){
    funcs.push(
        (function(val){
            return console.log(val)
        }(i))
        // 立即执行函数
    )
}
funcs.forEach(function(func){
    func() // 预期输出0~9
})
```

#### 循环中的 let 声明
- 每次循环迭代都会创建一个新的变量，并以之前迭代中的同名变量名将其初始化。
``` javascript
let funcs = [];
for(let i=0; i<10; i++){
    funcs.push(function(){
        return console.log(i)
    })
}
funcs.forEach(function(func){
    func() // 按预期输出0~9 
})
```
- let 在 for...in 与 for...of 中，也与上述的行为一致。

#### 循环中的 const 声明
- 普通的 for 循环中，变量初始化用 const，但是改变变量值时会抛出错误
``` javascript
for(const i=0; i<10; i++){
    console.log(i)
}
i=0 => 0;
// i++ 出错 ，这个语句试图修改 const 声明的变量，所以会抛出错误
```
- const 在 for...in 与 for...of 中与 let 用法完全一致
``` javascript
var funcs = [],
    obj = {
        a: true,
        b: true,
        c: true
    };
for(let key in obj){
    funcs.push(function(){
        return console.log(key)
    })
}
funcs.forEach(function(func){
    func() // a,b,c
})
// const
let funcs = [];
let arr = [12,23,34];
for(const value of arr){
    funcs.push(function(){
        return console.log(value)
    })
}
funcs.forEach(function(func){
    func() // 12,23,34
})
```
#### 全局块作用域绑定
- let 在全局作用域中创建一个变量，这时候会直接挂载到 window 对象上，如果与 window 对象本身的属性重名，则会覆盖
``` javascript
var RegExp = 'hello';
console.log(window.RegExp)  => 'hello'
console.log(window.RegExp == RegExp)  => true
```
- const 与 let 创建的全局变量，不会覆盖 window 的属性，只是会遮蔽
``` javascript
let RegExp = 'hello';
console.log(RegExp) => 'hello'
console.log(window.RegExp) => RegExp 方法
console.log(window.RegExp == RegExp)  => false
```
#### 书写建议
>* 默认使用 const
>* 需要改变的使用 let
>* 大部分变量在初始化之后都不应被改变，预料之外的变量值是很多 bug 的源头