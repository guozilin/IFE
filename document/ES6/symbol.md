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

### Symbol 共享体系
- ES6 提供了一个可随时访问的 Symbol 注册表 
- 创建一个共享的 Symbol，通过 Symbol.for( key );
``` javascript
    let uuid = Symbol.for('uid');
    let obj = {}
    obj[uuid] = '12345'
    console.log(uuid) //Symbol(uid)
    console.log(obj[uuid]) // '12345'

    let uuid2 = Symbol.for('uid')
    console.log(uuid === uuid2) // true
    console.log(uuid2) //Symbol(uid)
    console.log(obj[uuid2]) // '12345'
```
>* Symbol.for('uid') 首先会在全局搜索 key 为 uid 的 Symbol
>* 如果存在则返回已有的 Symbol
>* 不存在则创建新的 Symbol 并返回

- Symbol.keyFor() 在全局注册表中检索 Symbol 有关的键
```javascript
    let uuid1 = Symbol.for('uid')
    let uuid2 = Symbol.for('uid')
    let uuid3 = Symbol('uid')
    console.log(Symbol.keyFor(uuid1)) // uid
    console.log(Symbol.keyFor(uuid2)) // uid
    console.log(Symbol.keyFor(uuid3)) // undefined
```
>* Symbol 注册表类似于一个全局作用域的共享环境
>* 建议在使用 Symbol 时，加上命名空间，减少命名冲突