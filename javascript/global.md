# glabol 对象

### URI编码方法

**encodeURI** 与 **encodeURIComponent**
```
    var uri = 'https://www.worx.com/illegal value.html#start'
    encodeURI(uri) = 'https://www.worx.com/illegal%20value.html#start';
    encodeURIComponent(uri) = 'https%3A%2F%2Fwww.worx.com%2Fillegal%20value.html%23start'
```
**decodeURI** 与 **decodeURICOmponent** 


### Math 对象

**min()** 与 **max()** 获取一组数据的极值
```
var max = Math.max(1,2,3,4,5) => 5
var min = Math.min(1,2,3,4,5) => 1
获取数组极值
var val= [1,2,3,4,5];
max = Math.max.apply(Math,val) => 5
```
**舍入方法**
```
    Math.ceil() 向上取整
    Math.floor() 向下取整
    Math.round() 四舍五入
```
**random()** 随机数 [0,1)
```
   通常用法： rando = Math.floor(Math.random() * 可能值得数量 + 期望的最小值)
   eg: 【3,8] 可能值的数量为 6 最小值为3
   Math.floor(Math.random()* 6 + 3)
```
**abs()** 绝对值
```
    Math.abs(-1) = 1
```