# Array 

### 数组检测

```javascript
   xx instanceof Array  => boolean

   Array.isArray(xx) => boolean

```
### 数组转字符串

```javascript
    xx.toLocaleString() 
    xx.toString()
    xx.valueof() //实际返回依旧是数组
    xx.join('some')
    // 数组中的null，undefined 会以空字符串返回
```

### 栈方法

```javascript
    var arr = [1,2]
    arr.push(3); //[1,2,3]  push 末端增加
    arr.push(4,5) //[1,2,3,4,5]
    // pop 末端删除
    var last = arr.pop() // last = 5 ;arr = [1,2,3,4]


    // 巧用length增加和删除
    var a = [1,3]
    a[a.length]=5 // a= [1,3,5] a.length = 3
    a.length = 2 // a = [1,3]
```

### 队列方法

```javascript
    var arr = [1,2]
    var first = arr.shift() // 取得第一项 first = 1, arr = [2]
    var arr.unshift(3,4) // 顶端插入  推入两项 arr = [3,4,2]
```

### 重排序方法

```javascript
    var a = [1,2,13,14,5]
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

```javascript
    var a = [1,23]
    var b = a.concat();  
    b=[1,23]  //copy
    var c =a.concat(3,5) 
    // c =[1,23,3,5]
    
    var d = a.slice(1,2) // (start,end)
    var e = a.slice(-2,-1) // (-2+length,-1+length)
    // start > end => []

    var o = a.splice(0,1) // 删除 (从第几项开始删 删几个)
    var p = a.splice(0,0,2) // 插入，从第几项开始删，删几个，插入的项
    var q = a.splice(2,3,3) // 从第二项开始删，删3项 插入一项 “3”
```

### 位置方法
```javascript
    xx.indexof() // 从头向后找
    xx.lastIndexOf() // 从最后向前找
    // 均接受两个参数 一必填，数组中是否包含某一项，有返回索引，无则返回-1
```
### 迭代方法

```javascript
    var arr = [1,2,3,4]
    var ev = arr.every((item,index,arr) => item > 2)
    // 如果数组每一项都大于2则返回true 反之返回false

    var  so = arr.some((item,index,arr) => item ==3 )
    // 数组中只要有一项满足条件 即返回true，均不满足返回false

    var fl = arr.filter((item,index,arr) => item > 2)
    // 返回一个满足条件的新数组

    var ma = arr.map( (item,index,arr) => item * 2 )
    // 返回一个新数组，适用于两个数组一一对应的时候

    arr.forEach((item,index,arr)=>{console.log(item,index,arr)})
    // 与for循环一样使用

```

### 归并方法
```javascript
    var a = [1,2,3,4];
    var b = a.reduce((prev,cur,index,arr) => prev + cur)
    b = 1 + 2 + 3 + 4
    reduce(),reduceRight()
    var c = a.reduceRight((prev,cur,index,arr) => prev + cur, 10)
    // 4个参数，前一个值，当前值，当前索引，数组本身
    c = 10 + 1 + 2 + 3 + 4

```