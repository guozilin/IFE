# Array 

### 数组检测

```
   xx instanceof Array  => boolean

   Array.isArray(xx) => boolean

```
### 数组转字符串

```
    xx.toLocaleString() 
    xx.toString()
    xx.valueof() //实际返回依旧是数组
    xx.join('some')
    // 数组中的null，undefined 会以空字符串返回
```

### 栈方法

```
    let arr = [1,2]
    arr.push(3); //[1,2,3]  push 末端增加
    arr.push(4,5) //[1,2,3,4,5]
    // pop 末端删除
    let last = arr.pop() // last = 5 ;arr = [1,2,3,4]


    // 巧用length增加和删除
    let a = [1,3]
    a[a.length]=5 // a= [1,3,5] a.length = 3
    a.length = 2 // a = [1,3]
```

### 队列方法

```
    let arr = [1,2]
    let first = arr.shift() // 取得第一项 first = 1, arr = [2]
    let arr.unshift(3,4) // 顶端插入  推入两项 arr = [3,4,2]
```

### 重排序方法

```
    let a = [1,2,13,14,5]
    a.reverse() => [5,4,3,2,1]
    a.sort() => [1,13,14,2,5]
    sort()会首先调用toString() 在进行比较
    sort(compare) 可以接受一个比较函数(两个参数)
    第一个参数放在前 则返回负数 升序
    第一个在后 则返回正数  倒序
    function compare(val1,val2){
        return val1 - val2
    }
```

### 操作方法

```
    let a = [1,23]
    let b = a.concat()  b=[1,23]  copy
    let c =a.concat(3,5) c =[1,23,3,5]
    
    let d = a.slice(1,2) (start,end)
    let e = a.slice(-2,-1) (-2+length,-1+length)
    start > end => []

    let o = a.splice(0,1) // 删除 (从第几项开始删 删几个)
    let p = a.splice(0,0,2) // 插入，从第几项开始删，删几个，插入的项
    let q = a.splice(2,3,3) // 从第二项开始删，删3项 插入一项 “3”
```

### 位置方法
```
    
    xx.indexof()
```