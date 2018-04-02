# Function

### 函数的概念
```
    1. 函数实际上是一个对象，每个函数都是Function的实例；
    2. 函数名是一个指向函数对象的指针，不会与某个函数绑定；
```

### 函数的声明
```javascript
    函数声明
    function sum(a,b){
        return a + b
    }
    函数表达式
    var sum = function(a,b){
        return a + b;
    }
    Function 构造函数
    var sum = new Function('a','b','return a + b') //不推荐 影响性能，解析代码，解析传入构造函数中的字符串
```

### 函数声明与函数表达式的区别
```javascript
    console.log(sum(1,2)); // 正常执行，函数声明会提升，
    // javascript引擎第一遍会把函数声明放到源代码顶部，之后再执行调用
    function sum(a,b){
        return a + b;
    }

    // Uncaught TypeError: sum is not a function
    console.log(sum(1,2));
    var sum = function(a,b){
        return a + b;
    }
```

### 函数覆盖
```javascript
    function sum(a,b){
        return a + b;
    }
    function sum(a,b){
        return a * b;
    }
    sum(2,3) // 6 最后一个会覆盖前面的

    var sum1 = sum  // 不带()的函数名 是访问函数指针，可以理解为copy一份
    sum1(2,3) // 6
    sum = null   // sum的原始值改变，不影响另一个函数，所以访问的事是指针
    sum1(2,3) // 6
```

### 作为值的函数
```javascript
    // 1. 函数可以作为值来使用
    function doSomething(name,addname){
        return addname(name)
    }
    function addName(name){
        return 'tracy' + name;
    }
    var tt = doSomething('Tre',addName) // tracyTre

    // 2. 函数也可以作为另一个函数的结果返回
    function compare(name){
        return function(obj1,obj2){
            var val1 = obj1[name];
            var val2 = obj2[name];
            if(val1 < val2){
                return -1
            }else if(val1 > val2){
                return 1
            }else{
                return 0
            }
        }
    }
    var data = [{name:'tracy',age: 18},{name:'mark',age: 27}];
    data.sort(compare('name'));
    data.sort(compare('age'));
```

### 函数的内部属性

```javascript
    // 1. arguments 类数组对象,arguments拥有一个属性callee，指针，指向该函数本身
    function factorial(num){
        if(num <=1 ){
            return 1
        }else{
            return num * factorial(num-1)
        }
    }
    // 等价于 
    function factorial(num){
        if(num <=1 ){
            return 1
        }else{
            return num * arguments.callee(num-1)
        }
    }

    // 2. this 指向函数执行的环境对象，全局的为window

    // 3. caller 保存着调用当前函数的函数的引用，全局作用域中为null
    eg: function a(){
        b()
    }
    function b(){
        console.log(b.inner())
        // console.log(arguments.callee.caller()) 解耦 b
    }
    a(); // 输出的是 a()的源码，

    // 注意： 严格模式下，arguments.callee 、caller都会报错，
```

### 函数的属性和方法
- 属性：
>* 1. length 函数参数的数量 无参数时为0
>* 2. prototype 保存所有实例方法，基本上都是挂在prototype上。 prototy不可枚举，即不可以for...in列举出来

- 方法：
>* 1. apply() 两个参数： this，函数运行的作用域， arr，数组，可以是arguments
>* 2. call() 多个参数： this，所有的参数都必须列举出来 传入
```javascript
    apply(),call() //扩展函数运行的作用域
    var color = 'red'
    var o = { color: 'blue'}
    function getColor(){
        console.log(this.color)
    }
    getColor() // red;
    var oSayColor = getColor.bind(o)
    oSayColor() // blue

```