# prototype

### 理解原型对象

- 创建一个新函数，总会根据特定的规则为该函数创建一个prototype属性，该属性指向原型对象
- 默认情况下，所有的原型对象都会获得一个constructor属性，该属性指向prototype属性所在函数的指针
- 该指针叫[[Prototype]] 没有标准的方法去访问，但是浏览器中会支持一个叫 __proto__ 的属性
- 该连接存在于实例与构造函数的原型对象之间，并不存在与实例与构造函数之间
```
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
- Person.prototype.constructor 指向了Person
- Person 的两个实例均不包含属性和方法，但仍然可以调用 person1.name
- 这是通过属性查找实现的

#### isPrototype()

- 通过该方法确定实例与对象之间是否存在某种关系
- Person.prototype.isPrototypeOf(person1) => true
- 这个描述该怎么说清楚？

#### getPrototypeOf()

- Object.getPrototypeOf(person1) == Person.prototype => true
- 该方法返回的对象实际上就是这个对象的原型
- 直接获取到属性的值 Object.getPrototypeOf(person1).name => 'tracy'

#### 当代码读到某个对象的属性时，都会执行一次搜索，目标是给定的属性名字

- 首先会在实例本身中搜索，是否包含给定属性，如果有则返回该属性的值，停止搜索
- 如果在实例中没有找到该属性，则会在指针指向的原型对象中继续查找给定的属性名
- 这是多个对象实例共享原型所保存属性和方法的基本原理

#### 通过对象实例可以访问保存在原型中的值，但不可以通过对象实例改写原型中的值

- 如果在实例中添加一个与原型中相同的属性，实例的属性值会覆盖原型中的属性值
```
person1 = new Person();
person2 = new Person();
person1.name = 'mark';
person1.say() => 'mark' // 并不会改变原型中的属性值
person2.say() => 'tracy'
```
- 使用delete 操作符则可以完全删除实例属性，从而让我们能够重新访问原型中的属性
```
person1 = new Person();
person1.name = 'mark';
person1.name = null;
person1.say() => null
delete person1.name 
person1.say() => 'tracy'; // 访问原型中的值
```

#### hasOwnProperty()
- 使用hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。只有存在实例中才会返回true
```
person1 = new Person();
person1.name = 'mark';
person2 = new Person();
person1.hasOwnProperty('name') => true // 实例具备name属性
person2.hasOwnProperty('name') => false // name属性在原形对象中
```

#### 原型与in操作符
- in 单独使用 in 操作符会在通过对象能够访问给定属性时返回true，无论该属性存在于实例中还是原型中。
```
var person1 = new Person();
person1.name = 'mark'
'name' in person1 => true // 来自实例
var person2 = new Person()
'name' in person2 => true // 来自原型

```
- in 与 hasOwnProperty() 一起使用可以判断属性是不是来自于原型
```
function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object)
}
var person1 = new Person();
person1.name = 'mark'
hasPrototypeProperty(person1,'name') => false;
hasPrototypeProperty(person1,'age') => true;
```
- for...in 可枚举出对象实例，原型中所有的可枚举的，可通过对象访问的属性
```
for(key in person1){
    console.log(key) => name,age,job,say()
}
不可枚举的属性和方法有：toSting(),hasOwnProperty(),propertyIsEnumberable(),toLocaleString(),valueOf()
ES6新增：constructor,prototype,(并不是所有浏览器均实现)
```
- 获取对象实例中所有的可枚举属性-- Object.keys()
```
var keys = Object.keys(Person.prototype) => [name,age,job,say] // 原型中的可枚举属性
var person1 = new Person() 
var p1Keys = Object.keys(person1) => [] // 该实例中并没有属性
person1.name = 'mark'
var p2Keys = Object.keys(person1) => ['name'] // 该实例中实现了一个 name 属性
```

#### 更简单的原型语法
```
function Friend(){}
Friend.prototype = {
    name: 'tracy',
    age: 27,
    job: 'doctor',
    say: function(){
        console.log(this.name)
    }
}
```
- 优点：代码更少更精简
- 缺点： constructor 属性不再指向 Friend（因为每创建一个函数，同时也会创建它的 constructor 属性）
```
var jojo = new Friend()
jojo instanceof Object => true
jojo instanceof Friend => true
jojo.constructor  => Object
```
- 通过指定 constructor 属性可以确保该属性能访问到正确的值
```
Friend.prototype = {
    constructor: Friend,
    ...
}
该操作会重置 constructor属性，导致它的[[Enumberable]] 变为 true,原生的 constructor 是不可以枚举的
var jo = new Friend()
for(key in jo){
    console.log(k)
    // constructor,name,job,age,say
}
当然可以通过ES6的方法设置 constructor 属性为不可枚举类型
Object.defineProperty(Friend.prototype,'constructor',{
    enumberable: false,
    value: Friend
})
```

#### 原型的动态性

- 先创建实例，再去改写原型中的方法，在实例中依旧可以访问到新的方法
```
var kevi = new Friend()
Friend.prototype.hi = {
    console.log('hi')
}
kevi.hi() => 'hi'
```

- 先创建实例，再去改写原型对象，则会切断构造函数与最初原型的联系
```
var kk = new Friend();
Friend.prototype = {
    constructor: Friend,
    name: 'kk',
    age: 30
}
kk.say() // error
实例中的指针仅指向原型，而不是指向构造函数
```

#### 原生对象的原型

- 例如： Array.prototype.push(),String.prototype.subString()...
- 可以在原生对象的原型中修改或者添加方法
```
String.prototype.sayHello = function(){
    console.log('hello')
}
var str = 'dog';
str.sayHello() => 'hello'
```
- 一般情况下，不建议修改原生对象的原型

#### 原型对象的问题

- 所有的实例都会默认取得所有的相同的属性和方法
- 当属性中包含一个引用类型值的时候，修改实例中的值，则会影响到所有的实例
```
function P(){}
P.prototype = {
    constructor: P,
    name: 'ppp'
    firends: ['ooo','qqq']
}
var p1 = new P()
var p2 = new P()
p1.friends.push('sss'),
console.log(p2.friends) => ['ooo','qqq','sss']
p1.friends === p2.friends => true
```
- 一般情况下，很少单独使用原型模式创建对象