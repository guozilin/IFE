# Object

## 属性类型
**1.数据属性**

   - [[Configurable]] 能否通过delete删除属性，能否被修改，默认值true
   - [[Enumberable]] 能否通过for...in 循环返回属性 默认true
   - [[Writable]] 能否修改属性的值
   - [[Value]] 属性的数据值 ，写入属性的时候默认值为undefined
   - 修改默认属性必须使用 Object.defineProperty()

```
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

**2.访问器属性**

   - [[Configurable]] 能否通过delete删除属性，能否被修改，默认值true
   - [[Enumberable]] 能否通过for...in 循环返回属性 默认true
   - [[Get]] 读取属性时调用的方法 默认值undefined
   - [[Set]] 写入属性时调用的方法 默认值undefined
```
'use strict';
var book = {
    _year: 2017,
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

**3.定义多个属性**
```
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

**读取属性的特性**

Object.getOwnPropertyDescriptor(属性所在对象,描述符)，返回值是一个对象
```
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

