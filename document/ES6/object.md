# 对象的扩展

### 字面量语法的扩展
- 属性值的简写
>* 消除变量与属性名之间的重复书写
```javascript
    let person = {
        name: name,
        age: age
    }
    person = {
        name,
        age
    }
```
- 对象方法的简写
>* 区别在于简写的方法可以使用 super 关键字
``` javascript
    let person = {
        name,
        sayName(){
            console.log(this.name)
        }
        // sayName:function(){
        //    console.log(this.name)
        // }
    }
```

- 可计算属性名 
>* 允许属性名中存在变量、表达式,它的内容被转化成字符串
>* 需要使用方括号
```javascript
    let person = {};
    person['last name'] = 'jojo' // 属性名中存在空格 合法
    let firstName = 'guo';
    person[firstName+'zilin'] ='guozilin' //合法
```

### 新增方法
- Object.is()
>* 接受两个参数，如果两个参数相等，则返回 true
>* 与全等运算符类似，区别在于 +0、-0与 NaN 的判断
```javascript
    console.log(-0 === +0) //true
    console.log(Object.is(+0,-0)) //false

    console.log(NaN === NaN) //false
    console.log(Object.is(NaN,NaN))  //true

    console.log('5' === 5) //false
    console.log(Object.is('5',5)) //false
```

- Object.assign()
>* 一个对象接收来自另一个对象的属性和方法
>* 接受一个目标对象和任意多个源对象，最终返回目标对象
>* 如果多个源对象中存在同名的属性名，则排位靠后的覆盖前面的
>* 该方法不能复制源对象的访问器属性
```javascript
    let receiver = {}
    Object.assign(receiver,{name:'tracy',age:'27'},{name:'mark',sayName(){console.log(this.name)}})
    receiver = {
        name: 'mark',
        age: 27,
        sayName(){
            console.log(this.name)
        }
    }
```

### 重复的属性名
- ES5 在严格模式下，属性名重复会报错
- ES6 中不再进行重复性检查，每组重复最后都会取最后一个值
``` javascript
    let person = {
        name: 'tracy',
        name: 'mark'
    }
    person.name => 'mark'
```

### 自有属性的枚举顺序
- Object.getOwnPropertyNames()
- Reflect.ownkeys()
- Object.assign()
``` javascript
    let obj = {
        a:1,
        0:1,
        c:1,
        2:1,
        b:1,
        1:1
    }
    obj.d = 1
    Object.getOwnPropertyNames(obj)
    // ["0", "1", "2", "a", "c", "b", "d"]
```
- 属性排序的基本规则
>* 数字键按升序排列
>* 字符串键按照它加入对象的顺序排列
>* 所有 Symbol 键按照它加入对象的顺序排列