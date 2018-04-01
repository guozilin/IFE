# Symbol

- Symbol 生成一个独一无二的值
- 与 string number boolean undefined null 构成了 ES6 的基本类型
- 通过 let a = Symbol 的方式创建
- 通过 typeof 方法检测 Symbol 的类型 'symbol'
- 可以为每一个 Symbol 变量添加一段描述，不可访问，存储在[[Description]]属性中
``` javascript
    let firstName = Symbor('我是名字');
    let person = {}
    person[firstName] = 'Tracy';
    console.log('firstName' in person) // false 不可访问
    console.log(person[firstName]) // 'Tracy'
    console.log(firstName) // Symbol('我是名字')
    console.log(typeof firstName) // symbol
```