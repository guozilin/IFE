## 函数

### 默认参数
- ES5中实现参数默认值
```javascript
    function add(a,b,callback){
        b = b || 10; // 当b=0时，依旧会是 b=10
        callback = callback || function(a,b){}
        callback(a,b)
    } 
```
- ES6中实现默认参数
```javascript
    function add(a,b=2,callback=function(){}){
    
    } 
    add(1)
    add(1,3)
    add(1,3,function(){
        // dosometning()
    })
    // 如果不想使用某个默认值，则将其置为 null
    add(1,null,callback)

    // 在 ES6中 默认参数之后可以是非默认参数，但是在 TS 中不可以
    function(a,b=2,c){
        // ts 中参数不合法
        // es6 中合法
    }

```
### 默认参数对 arguments 对象的影响
- ES5 中，命名参数的值改变会同步到 arguments 对象上（非严格模式）
``` javascript
    function add(a,b){
        console.log(a === arguments[0])
        console.log(b === arguments[1])
        a = 4
        b = 5
        // 参数 a,b 值的变化 影响到了 arguments 对象
        console.log(arguments[0],arguments[1]) // 4,5
    }
    add(1,2)
```
- ES5 中 严格模式
``` javascript
    function add(a,b){
        'use strict'
        console.log(a === arguments[0])
        console.log(b === arguments[1])
        a = 4
        b = 5
        // 参数 a,b 值的变化 不影响 arguments 对象
        console.log(arguments[0],arguments[1]) // 1,2
    }
    add(1,2)
```
- ES6中，如果一个函数使用了默认参数，arguments 对象的行为与严格模式保持一致
``` javascript
    function add(a,b=10){
        console.log(arguments.length); // 非默认（实际传人的）参数的长度
        console.log(arguments[0] === a)
        console.log(arguments[1] === b) // 当只传入一个参数时为 false，两个参数为 true
    }
    add(1)
```

### 默认参数表达式
- 默认参数可以通过函数执行获取值
``` javascript
    function getValue(){
        return 6
    }
    function add(a,b=getValue()){
        return a + b
    }
    add(1) // 7
    add(1,2) // 3

    {
        let value = 10;
        function getValue(){
            return value++
        }
        function add(a,b=getValue()){
            return a + b;
        }

        add(1) // 11
        add(1,3) // 4
        add(1) // 12
        add(1) // 13
    }
```
- 可以使用先定义的参数，作为后定义参数的默认值
``` javascript
    function add(a,b=a){
        return a + b
    }
    add(2) //4
```
- 默认参数的临时死区 TDZ
``` javascript
    // 这时的 b 尚未初始化，存在于 TDZ 中
    function add(a = b,b){
        return a + b
    }
    add(2) //4
```
>* 函数体、函数参数的作用域 与 TDZ 是相互独立的
>* 参数的默认值不可以访问函数内部声明的变量

### 不定参数
- 在函数的命名参数前添加三个点
- 该参数是一个数组
- 通过这个数组名可以访问里面的每一项
- 函数的 length 指的是命名参数的数量，不定参数不在length 的范围内
```javascript
    function pick(obj,...keys){
        let result = Object.create(null)
        for(let i=0,len=keys.length; i< len; i++){
            result[keys[i]] = obj[keys[i]]
        }
        return result 
    }
    // pick.length = 1
```
>* 每个函数有且只能有一个不定参，而且一定要放在最后
>* 不定参不可以用在字面量 setter 中

- 对 arguments 对象的影响
```javascript
    function check(...args){
        console.log(args.length)
        console.log(arguments.length)
    }
    check(1,2,3)
    check(1)
```
>* arguments 总是包含所有传入的参数

- 构造函数中也可以使用默认参数与 不定参
```javascript
    let add = new Function('a','b=a','return a+b')
    let pick = new Function('...args','return agrs[0]')
```