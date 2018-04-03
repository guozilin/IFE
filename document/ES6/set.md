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

``` JavaScript
    let set = new Set(['red', 'green', 'blue']);
    for (let item of set.keys()) {
        console.log(item);
    }
    for(let i of set.values()){
        console.log(i)
    }
    for (let item of set.entries()) {
        console.log(item);
    }
    // forEach 还可以接受第二个参数，表示绑定处理函数内部的this对象
    set.forEach((value, key, obj) => {
        console.log(key + ' : ' + value + ':' + obj)
    })
```
- Set 遍历的应用
>* 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员,转化成数组
``` javascript
    {
        let arr = [3, 5, 2, 2, 5, 5];
        let unique = [...new Set(arr)];
    }
    {
        let set = new Set(['red', 'green', 'blue']);
        let arr = [...set];
    }
```
>* 数组的map和filter方法也可以间接用于 Set 
``` javascript
    {
        let set = new Set([1,2,3])
        set = new Set([...set].filter(i => i > 1))
        // {2,3}
    }
    {
        let set = new Set([1,2,3,4])
        set = new Set([...set].map(i => i * 2))
        // {2,4,6,8}
    }
```
>* 使用 Set 可以很容易地实现并集(Union)、交集(Intersect)和差集(Difference)
``` javascript
    let a = new Set([1,2,3,4]), b = new Set([3,4,5,6])
    let union = new Set([...a,...b])
    // {1,2,3,4,5,6}
    let intersect = new Set([...a].filter(i => b.has(i)))
    // {3,4}
    let diff1 = new Set([...a].filter(i => !b.has(i))) //{1,2}
    let diff2 = new Set([...b].filter(i => !a.has(i))) //{5,6}

    let diff = new Set([...diff1, ...diff2]) // {1,2,5,6}
```
>* 改变原 Set 结构
``` javascript
    {
        let set = new Set([1,2,3])
        set = new Set([...set].map(i => i * 2))
        // {2,4,6}
    }
    {
        let set = new Set([1,2,3])
        set = new Set(Array.from(set,i => i * 2))
        // {2,4,6}
    }
```