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
>* arr 指的是`${a+b} nihao ${a*b}.`中去掉表达式之外的字符串组成的数组 [""," nihao ",". "]
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
>* 上例中：arr 的组成中包含第一个占位符的空字符串
>* 两个占位符之间的字符串
>* 第二个占位符后的**字符串或者空字符串**
>* arr.length 与 value.length 的关系为 arr.length - 1 = value.length
- 标签模板的一个重要功能就是 HTML 标签过滤
``` javascript
let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    s += templateData[i];
  }
  return s;
}
```

#### 在模板字面量中使用原始值
- String.raw()
- String.raw方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。
``` javascript
String.raw`Hi\n${2+3}!`;
=> "Hi\n5!"

`Hi\n${2+3}!`;
Hi
5
// 使用频率很低

```

