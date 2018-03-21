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

#### 标签模板
- 模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。
- 写法 tag`${a+b} nihao ${a*b}.`
>* 个人理解 tag 是一个函数
>* tag 的参数包含一个数组，一个不定参 tag(arr,...value)
>* arr 指的是`${a+b} nihao ${a*b}.`中去掉表达式之外的字符串组成的数组 [" nihao ","."]
>* ...value 指的是表达式${a+b}与${a*b},由于模板包含几个表达式是不确定的，因此用...value 表示更合适
``` javascript
function tag(arr,...value){
    var result = "";
    for(let i=0; i<value.length; i++){
        result += arr[i];
        result += value[i];
    }
    result += arr[arr.length-1];
    return result;
}
```