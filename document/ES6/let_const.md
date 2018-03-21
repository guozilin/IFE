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
- 存在于函数内部
- 块中 （一对 {} 之间的区域）

#### let 声明
- 基本用法与var 相同，用来声明变量，可以把变量的作用域限定在当前代码块中
- let 声明的变量不会被提升
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
>* 用 const 声明对象后，可以修改其属性值
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