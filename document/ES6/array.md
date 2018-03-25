# 数组

### 创建数组
- new Array() 的缺陷
>* 如果给 Array 构造函数传入一个数字，那么数组的 length 会被改写，但是数组的每一项均是 undefined
>* 如果给 Array 构造函数传入多个值，这些值都会作为该数组的元素
``` javascript
    var arr = new Array(3);
    arr.length = 3
    arr[0] = arr[1] = arr[2] => undefined

    var arr2 = new Array(2,3)
    arr2 = [2,3]
    // 此时的第一个参数不是该数组的 length

    // 如果想在函数内部让 arguments 类数组，调用数组的方法
    function a(){
        return [].slice.call(arguments,0)
    }
```
- Array.of()
>* 传入任意类型的、任意多的值，这些元素都会被转化成数组元素
``` JavaScript
    let item  = Array.of(1)   => item  = [1]
    let item2 = Array.of(1,2) => item2 = [1,2]
    let item2 = Array.of('1') => item2 = ['1']
```
- Array.from()
>* 将可迭代对象或者类数组对象转化为数组 主要是函数中的 arguments 以及 js 选择器返回的元素类数组
``` javascript
function doSomething(){
    let args = Array.from(arguments)
    // 使用 args 
}
// 这是的 pObj 并不是真正的数组，不可以调用 forEach 方法进行遍历
let pObj = document.getElementsByName('p'); // document.querySelectorAll('p')
let pArr = Array.from(pObj);
pArr.forEach((item)=>{
    // dosomething
})
```
>* 可以传递一个函数作为Array.from()第二个参数， 该函数将数组的每一个值转化成别的值，存放到新数组中
``` javascript
    function doSomething(a,b,c){
        console.log(arguments[1])
        return Array.from(arguments,(i)=> i+1)
    }
    let num = doSomething(1,2,3) => [2,3,4]

    let a = [1,2,34,56,67]
    let b = Array.from(a,(i)=>{
        if(i<30){
            return i + 30
        }
        return i
    })
    // b = [31,32,34,56,67]
```
>* Array.from() 可以传入第三个参数，作为映射函数的 this
```javascript
    let helper = {
        diff: 1,
        add(value){
            return this.diff + value
        }
    }
    function doThing(){
        return Array.from(arguments,helper.add,helper)
    }
    doThing(1,3,5,7) => [2,4,6,8]
```
>* Array.from() 可以将含有 Symbol.iterator 属性的对象转化成数组
``` javascript
    let num = {
        *[Symbol.iterator](){
            yield 1;
            yield 2;
            yield 3;
        }
    }
    let nums = Array.from(num,(i)=>i+3) // [4,5,6]

```
### 数组新增方法
- find() 与 findIndex()
>* 均接收两个参数，第一个为回调函数，第二个为可选参数（绑定回调函数的 this）
>* 如果找到满足条件的，回调函数应返回 true，find()与 findIndex()也会停止搜索
>* find()与 findIndex() 都是从前向后找，第一个满足及返回，不再继续找
>* 区别： find() 返回具体的值;  findIndex() 返回值所对应的索引
```javascript
    let numbers = [1,2,3,4,5,6]
    numbers.find(i => i == 2) //2
    numbers.findIndex(i => i == 2) // 1

    numbers.find(i => i == 7) // undefined
    numbers.findIndex(i => i == 7) // -1

    numbers.find(i => i % 2 ==0) //2
    numbers.findIndex(i => i %2 ==1)    
```
> 一般情况下，在数组中根据某个条件查找匹配元素，用 find() 与 findIndex() ;
> 查找与某个值匹配的元素 还是使用 indexOf() 与 lastIndexOf()

- fill()
>* 替换数组中的多个元素
>* 改变的是原始数组
```javascript
let nums = [1,2,3,4]
nums.fill(1) => [1,1,1,1]  // nums 的值也变为 [1,1,1,1]

nums.fill(2,1) => [1,2,2,2] // 从索引为1的开始用2填充，

nums.fill(3,0,2) => [3,3,2,2] // 从索引为0的开始以3填充，到索引为2的结束填充，不包含2
```
>* 如果传入的索引值为负数，则实际的索引值为 Array.length + 负数
- copyWithin()
>* 就收两个参数，第一个为开始填充的索引值，第二个为开始复制值的索引值
```javascript
    let nums = [10,20,30,40]
    nums.copyWithin(2,0) // 从30开始填充，以10开始复制的值 来填充 [10,20,10,20] 与 nums.copyWithIn(2)一样

    let n = [10,20,30,40,50]
    n.copyWithin(2,1,2) // 从30的位置开始替换，从20的位置开始复制，替换2个数 [10,20,20,40,50]
```
### 定型数组 
>* 目前尚未看明白