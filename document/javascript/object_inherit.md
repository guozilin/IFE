# 继承

- ECMAScript 目前支持实现继承，主要依靠原型链实现

## [原型链](https://github.com/guozilin/guozilin.github.io/blob/master/document/javascript/prototype.md?_blank)实现继承
- 构造函数、原型、实例
- 每个构造函数都有一个原型对象
- 原型对象都包含一个指向构造函数的指针
- 实例都包含一个指向原型对象内部的指针
```
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
}
function SubType(){
    this.subprototype = false;
}
// SubType继承SuperType
SubType.prototype = new SuperType() 
// 继承实现的本质是重写原型对象，代之以一个新类型的实例。
SubType.prototype.getSubValue = function(){
    return this.subproperty;
}
var newSub = new SubType();
newSub.getSuperValue() => true;

```
#### 原型与实例的关系
- newSub instanceof SuperType => true
- newSub instanceof SuBType => true
- newSub instanceof Object => true
- newSub 是Object、SuperType 或SubType 中任何一个类型的实例

#### 给原型定义方法
- 子类型需要重写超类型中的某个方法，或者添加超类型中不存在的某个方法，重写或添加的方法一定要放在替换原型的语句之后 (如上例中 SubType.prototype.getSubValue 在 SubType.prototype.getSubValue 之后)
- 通过原型链实现继承时，不能使用对象字面量创建原型方法。因为这样做就会重写原型链
```
//继承了SuperType
SubType.prototype = new SuperType();

//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
    getSubValue : function (){
        return this.subproperty;
    },
    someOtherMethod : function (){
        return false;
    }
};
现在的原型包含的是一个Object 的实例，而非SuperType 的实例，Subtype 与 SuperType 已经没有关系了
```
#### 原型链的问题
- 包含引用类型值的原型属性会被所有实例共享
```
function Super(){
    this.color = ['red','blue']
}
function Sub(){}
Sub.prototype = new Super()
var s1 = new Sub()
var s2 = new Sub()
s1.color.push('yellow');
console.log(s2.color) = ['red','blue','yellow']
```
- 创建子类型时不能向超类型的构造函数中传递参数

## 借用构造函数实现继承

- 在子类型构造函数的内部调用超类型构造函数
```
function SuperType(){
    this.color = ['red','black']
}
function Sub(){
    // 调用超类型 SuperType 的方法 借用 call 实现了 this 绑定
    SuperType.call(this)  or SuperType.apply(this)
}
var cat = new Sub()
cat.coloe.push('yellow') => cat.color = ['red','black','yellow']
cat2 = new Sub()
cat2.color = ['red','black']
```
- 传递参数，借用构造函数可以在子类型构造函数中向超类型传递参数
```
function SuperType(name){
    this.name = name
}
function Sub(name,age){
    SuperType.call(this,name)  or SuperType.apply(this,name)
    this.age = age
}
var cat = new Sub('tracy',27)
cat.name = 'tracy'
cat.age = 27
```
- 问题1：方法都在构造函数中定义，函数复用无从谈起
- 问题2：超类型中定义的方法，在子类型中是不可见的，结果是所有的类型都必须使用构造函数模式
- 注： 很少单独使用 借用构造函数实现继承

## 组合继承

- 原型链与借用构造函数相结合
- 使用原型链实现属性和方法的继承，通过借用构造函数实现对实例属性的继承
```
function Super(name){
    this.name = name;
    this.color = ['red','yellow']
}
Super.prototype.say = function(){
    console.log(this.name)
}
// 继承属性
function Sub(name,age){
    Super.call(this,name);
    this.age = age
}
// 继承方法
Sub.prototype = new Super('tracy',27)
Sub.prototype.constructor = Sub
Sub.prototype.sayAge = function(){
    console.log(this.age)
}
var p1 = new Sub();
p1.color.push('black') => ['red','yellow','black']
p1.say() => 'tracy'
p1.sayAge() => 27
```
- javascript 中最常用的继承模式

## 原型式继承