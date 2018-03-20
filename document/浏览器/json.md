# JSON

- json 语法可以表示三种类型的值
- 简单值 字符串，布尔值，数值，null
- 对象 
- 数组
- 不支持变量、函数、对象实例

### 示例
```
var book = {
    title   : 'javascript',
    authors : ['guozl','mark'],
    edition : true,
    year    : 2015,
    month   : null
}
```
### 序列化 JSON.stringify()
- JSON.stringify(book) => {"title":"javascript","authors":["guozl","mark"],"edition":true,"year":2015,"month":null}
- JSON.stringify(book,['title','edition']) => {"title":"javascript","edition":true}
- JSON.stringify(book,'',4)  带4个字符的缩进 最大是10个
```
{
    "title": "javascript",
    "authors": [
        "guozl",
        "mark"
    ],
    "edition": true,
    "year": 2015,
    "month": null
}
```
- JSON.stringify() 第二个参数为一个函数
```
JSON.stringify(books,function(key,value){
    switch(key){
        case 'authors':
            return value.join(',');
        case 'edition':
            return false;
        case 'year':
            return 2018
        default:
            return value
    }
},'----')
======>>>>>>>>
{
----"title": "javascript",
----"authors": "guozl,mark",
----"edition": false,
----"year": 2018,
----"month": null
}
```
- toJSON() 给对象自定义 toJSON 方法
```
var books = {
    title   : 'javascript',
    authors : ['guozl','mark'],
    edition : true,
    year    : 2015,
    month   : null,
    toJSON: function(){
        return this.title
    }
}
console.log(books.toJSON()) =>  javascript
console.log(JSON.stringify(books)) => 'javascript'
```
- JSON.stringify() 序列化对象的顺序为
    1. 如果该对象存在 toJSON() 方法而且可以通过它取得有效值，则调用该方法，否则放回对象本身
    2. 如果提供了第二个参数，应用这个函数进行过滤，
    3. 对第二步的返回值进行序列化
    4. 如果提供第三个参数，执行相应的格式化


### 解析 JSON.parse()
```
var book = '{"title":"javascript","authors":["guozl","mark"],"edition":true,"year":2015,"month":null}';
JSON.parse(book)
=>
{
    title   : 'javascript',
    authors : ['guozl','mark'],
    edition : true,
    year    : 2015,
    month   : null
}
```
- JSON.parse() 也可以接受两个参数，第二个参数为函数，被称为还原函数
```
JSON.parse(book,function(key,value){
        if(key === 'title' || key === 'authors'){
            return undefined
        }else{
            return value
        }
    })
```
- 如果还原函数返回 undefined 则表示要删除该项