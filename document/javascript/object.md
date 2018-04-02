# Object

## 属性类型
#### 1.数据属性

   - [[Configurable]] 能否通过delete删除属性，能否被修改，默认值true
   - [[Enumberable]] 能否通过for...in 循环返回属性 默认true
   - [[Writable]] 能否修改属性的值
   - [[Value]] 属性的数据值 ，写入属性的时候默认值为undefined
   - 修改默认属性必须使用 Object.defineProperty()

```javascript
    'use strict';
    var person = new Object();
    Object.defineProperty(person,'name',{
        writable: false,
        value: 'mark'
    })
    Object.defineProperty(person,'age',{
        configurable: false,
        value: '27'
    })
    // person.name = "Tracy"; // Cannot assign to read only property 'name' of objec  
    // delete person.age  //  Cannot delete property 'age' of #<Object>
    console.log(person)
```

#### 2.访问器属性

   - [[Configurable]] 能否通过delete删除属性，能否被修改，默认值true
   - [[Enumberable]] 能否通过for...in 循环返回属性 默认true
   - [[Get]] 读取属性时调用的方法 默认值undefined
   - [[Set]] 写入属性时调用的方法 默认值undefined
```javascript
'use strict';
var book = {
    year: 2017,
    edition: 1
}
Object.defineProperty(book,'year',{
    get: function(){
        return this._year
    },
    set: function(value){
        if(value> 2017){
            this.edition = value - this._year
            this._year = value;            
        }
    }
})
book.year = 2019;
book.edition = 2
```

#### 3.定义多个属性
```javascript
'use strict';

var person = new Object();
Object.defineProperties(person,{
    name:{
        writable: false,
        value: 'mark'
    },
    fullname:{
        get: function(){
            return this.name + ' Tracy'
        }
    }
})
```

#### 读取属性的特性

- Object.getOwnPropertyDescriptor(属性所在对象,描述符)，返回值是一个对象
```javascript
'use strict';
var book = {};
Object.defineProperies(book,{
    _year: {
        value: 2014
    },
    edition:{
        value:1
    },
    year: {
        get: function(){
            return this._year
        },
        set: function(value){
            if(value> 2014){
            this.edition = value - this._year
            this._year = value;            
        }
    }
})
var desc = Object.getOwnPropertyDescriptor(book,'_year')
desc.value => 2014
desc.configurable => false
```

## 创建对象
#### <span id="factory">1. 工厂模式</span>

- 主要解决了创建多个相似对象的问题
```javascript
function createPerson(name,age,job){
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.say = function(){
        console.log(this.name)
    }
}
var person1 = createPerson('tracy','27','engineer')
var person2 = createPerson('tracy2','37','doctor')
typeof(person1) => undefined 
//无法判断一个对象的类型
```

#### 2. 构造函数模式
- 没有显式的创建对象
- 直接将属性方法赋予this
- 没有return语句

```javascript
function Person(name,age,job){
    this.name = name
    this.age = age
    this.job = job
    this.say = function(){
        console.log(this.name)
    }
}
var person1 = new Person('tracy','27','doctor')
```
每个new操作符 都会经历下面四步
- 创建一个对象
- 将构造函数的作用域赋予新对象
- 执行构造函数的代码
- 返回新对象

person1 instanceof Object => true

person1 instanceof Person => true
```javascript
构造函数当作普通函数调用
Person('tracy','27','worker') => window.say() => 'tracy'
var o = new Object()
Person.call(o,'mark','27','worker') => o.say() => 'mark'
```

#### 3. 原型模式 --prototype

- 创建的每个函数都有一个prototype属性 
- 该属性是一个指针，只指向一个对象
- 该对象包含了所有实例共享的属性和方法
- 原型可以让所有的实例共享它包含的属性和方法
```javascript
function Person(){}
Person.prototype.name = 'tracy'
Person.prototype.age = 27
Person.prototype.job = 'doctor'
Person.prototype.say = function(){
    console.log(this.name)
}
var person1 = new Person() 
var person2 = new Person() 
person1.say() == person2.say() //true tracy
```
[理解原型-prototype](https://github.com/guozilin/guozilin.github.io/blob/master/document/javascript/prototype.md?_blank)


#### 4. 组合构造函数与原型模式

- 构造函数模式用于创建实例属性，原型模式用于创建公用的属性和方法
```javascript
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['tracy','alice']
}
Person.prototype = {
    constructor: Person,
    say: function(){
        sonsole.log(this.name)
    }
}
var p1 = new Person('koko',27,'doctor');
var p2 = new Person('jojo',26,'worker');
p1.friends.push('linky')
console.log(p2.friends); => ['tracy','alice']
p1.friends === p2.friends => false
p1.say() === p2.say() => true
```
- 使用最广泛、认同度最高的一种创建自定义类型的方法


#### 5. 动态原型模式

```javascript
function Person(name, age, job){
　　//属性
    this.name = name;
    this.age = age;
    this.job = job;
    //方法 仅会在需要时运行一次，一般是第一次运行时
    if (typeof this.sayName != "function"){
        Person.prototype.sayName = function(){
            alert(this.name);
        };
    }
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();
friend.sayName();
 // 第二次运行的时候，this指向的实例对象的原型已经有了sayName方法
```

#### 6. 寄生构造函数模式

- 该方法与[工厂模式](#factory)类似，通过在结尾加一个return重写调用构造函数的返回值
```javascript
function Person(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.say = function(){
        console.log(this.name)
    }
    return o
}
```
- 可用于不改变原始对象构造函数的情况下，增加额外的处理方法
```javascript
function SpecialArray(){
    var arr = new Array();
    arr.push.apply(arr,arguments);
    arr.toPipedString = function(){
        return this.arr.join('|')
    }
    return arr
}
var colors = new SpecialArray("red", "blue", "green");
colors.toPipedString() => 'red|blue|green'
```
- 问题一： 返回的对象与构造函数或者与构造函数的原型属性之间没有关系
- 问题二： 不能依赖instanceof 操作符来确定对象类型
- 注： 不建议使用

#### 7. 稳妥构造函数模式

- 没有公共属性
- 不引用 this 的对象
```javascript
function Person(name,age,job){
    var o = new Object();
    o.say = function(){
        console.log(name)
    }
    return o
}
```