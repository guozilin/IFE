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
