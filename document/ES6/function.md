## 函数

### 默认参数
- ES5中实现参数默认值
```javascript
function add(a,b,callback){
    b = b || 10; // 当b=0时，依旧会是 b=10
    callback = callback || function(a,b){}
    callback(a,b)
} 
```
- ES6中实现默认参数
```javascript
function add(a,b=2,callback=function(){}){
   
} 
add(1)
add(1,3)
add(1,3,function(){
    // dosometning()
})
// 如果不想使用某个默认值，则将其置为 null
add(1,null,callback)

// 在 ES6中 默认参数之后可以是非默认参数，但是在 TS 中不可以
function(a,b=2,c){
    // ts 中参数不合法
    // es6 中合法
}

```