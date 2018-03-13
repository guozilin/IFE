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

**isPrototype()**

- 通过该方法确定实例与对象之间是否存在某种关系
- Person.prototype.isPrototypeOf(person1) => true
- 这个描述该怎么说清楚？

**getPrototypeOf()**
- Object.getPrototypeOf(person1) == Person.prototype => true
- 该方法返回的对象实际上就是这个对象的原型
- 直接获取到属性的值 Object.getPrototypeOf(person1).name => 'tracy'

#### 当代码读到某个对象的属性时，都会执行一次搜索，目标是给定的属性名字
- 首先会在实例本身中搜索，是否包含给定属性，如果有则返回该属性的值，停止搜索
- 如果在实例中没有找到该属性，则会在指针指向的原型对象中继续查找给定的属性名
- 这是多个对象实例共享原型所保存属性和方法的基本原理

#### 通过对象实例可以访问保存在原型中的值，但不可以通过对象实例改写原型中的值
