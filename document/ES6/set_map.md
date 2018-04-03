# Set 与 Map 数据结构

## Set 
- Set 类似于数组，但是它的成员都是唯一的，没有重复的值
>* 通过调用 add() 可以向 Set 中添加
``` javascript
    let set = new Set()
    set.add(1)
    set.add(1)
    set.add('1')
    set.add(NaN)
    set.add(NaN)
    set.add({})
    set.add({})
    set // 1,'1',NaN,{},{}
    set.size // 5
```
>* Set 内部判断两个值是否相等，两个 NaN 相等
>* 对象永远不相等
>* 字符串与数字不做转化

- Set 本身是一个构造函数，用来生成 Set 数据结构
``` javascript
    let s = new Set();
    const arr = [1,2,3,3,3,3];
    arr.forEach((i)=>s.add(i))
    console.log(s) // 1,2,3
```
- Set 可以接受一个数组作为参数
``` javascript
    const set = new Set([1,2,3,4,,4,4,4])
    set // 1, 2, 3, 4, undefine
    // 可以用来做数组去重
    let arr = [1,2,3,3,4,5,4,5]
    arr = [...new Set(arr)]
    // [1,2,3,4,5]
```

### Set 的属性和方法
- Set 的属性
``` javascript 
    Set.prototype.constructor  // 默认 Set 函数
    Set.prototype.size // Set 实例的成员总数
```
- Set 的操作方法
>* add() 添加一个值，返回 Set 本身
>* delete() 删除某个值，返回一个 boolean
>* has() 是否包含某个值，返回 boolean
>* clear() 清除所有成员
``` javascript
    let s = new Set();
    s.add(1).add(2) // 1,2
    s.delete(1) //2
    s.has(1) // false
    s.has(2) // true
    s.clear() // 空
```
- 巧用 Set 做数组去重
```javascript
    const arr = [1,2,3,4,5,6,5,4,3,2,1];
    let newArr = Array.from(new Set(arr))
    // newArr = [...new Set(arr)]
    newArr // [1,2,3,4,5,6]
```

- Set 的遍历操作
>* keys()：返回键名的遍历器
>* values()：返回键值的遍历器
>* entries()：返回键值对的遍历器
>* forEach()：使用回调函数遍历每个成员

