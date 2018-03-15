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
