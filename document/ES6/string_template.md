## 模板字面量
- ECMAScript 基础的语法糖
- 免受注入攻击

>* 多行字符串
>* 基本的字符串格式化
>* HTML 转义

#### 基础语法
``` javascript
let msg = `hello world`; => 'hello world'
    msg = `hello \` world`; => 'hello ` world'
    msg = `hello " " world`; => 'hello " " world'
    msg = `hello \ world`; => 'hello  world'

let multiline = `
<div>
    <div>你好 Tracy </div>
</div>`.trim();
// 反撇号中的所有空白符也都属于字符串的一部分

let multi = `multiline \n string `
// 也可以显式的使用 \n 进行换行
```

#### 字符串占位符
- 在模板字面量中，可以插入一个合法的 JavaScript 表达式，并将其结果放到字符串中
- ${ string }
``` javascript
let name = 'tracy',msg = `hello,${name}`;
msg => 'hello,tracy';
// 表达式
let count = 10, price = 0.25,msg = `${count} books cost ${(count * price).toFixed(2)} yuan.`
msg=> '10 books cost 2.50 yuan.'
```
