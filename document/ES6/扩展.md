### 字符串的扩展
- 判断字符串的内容
>* includes()
>* startWith()
>* endWith()

``` javascript
let str = 'string';
str.includes('s') => true;
str.includes('c') => false;
str.startWith('s') => true;
str.startWith('j') => false;
str.endWith('ng') => true;
str.endWith('n') => false;
str.repeat(3) => 'stringstringstring'
```
- 复制字符串
>* repeat(time)
``` javascript
let str = 'string';
str.repeat(3) => 'stringstringstring'
```
- 补全字符串长度
>* padStart()
>* padEnd()
``` javascript
let str = '123';
str.padStart(4,'0') => '0123'
str.padEnd(4,'0') => '1230'
// 不改变原始字符串 str = '123'
// 常用与 日期的天与月，例如：3月 可以很方便的转为'03'
// 用于补足字符串长度，这里设置的为字符串长度为4，不足4位的 在前面补0，或者在后面补0
```

### 数值的扩展
- 在 ES6 中二进制数据以 ob / 0B 开头
- 在 ES6 中八进制数据以 0o / 0O 开头
- 数值是不是非无穷大或者无穷小(有尽的) Number.isFinite() 
```JavaScript
console.log(Number.isFinite(15)) => true
console.log(Number.isFinite(NaN)) => false
console.log(Number.isFinite('true')) => false
console.log(Number.isFinite(2/0)) => false
console.log(Number.isNaN(2/0)) => false
console.log(Number.isNaN(0)) => false
console.log(Number.isNaN(NaN)) => true
```
- 判断是不是整数 Number.isInteger()
 ```JavaScript
console.log(Number.isInteger(15)) => true
console.log(Number.isInteger(15.0)) => true
console.log(Number.isInteger(15.1)) => false
console.log(Number.isInteger('123.0')) => false
console.log(Number.isInteger('123')) => false
// 参数必须是数值，否则一直为 false
```

- 极值： Number.MAX_SAFE_INTEGER = 2^53, Number.MIN_SAFE_INTEGER = -2^53
- 判断是否在极值中间的范围 Number.isSafeInteger()
```JavaScript
console.log(Number.isSafeInteger(15)) => true
console.log(Number.isSafeInteger('123')) => false
// 参数必须是数值，否则一直为 false
```

- 取整 Math.trunc()
```JavaScript
console.log(Math.trunc(15.8)) => 15
console.log(Math.trunc('123.8')) => 123
```
- 判断一个数是正数 负数 零 Math.sign()
```JavaScript
console.log(Math.sign(15.8)) => 1
console.log(Math.sign('123.8')) => 1
console.log(Math.sign(0)) => 0
console.log(Math.sign(-2)) => -1
console.log(Math.sign('-2')) => -1
console.log(Math.sign('foo')) => NaN
```

- 立方根 Math.cbrt()
```JavaScript
console.log(Math.cbrt(-1)) => -1
console.log(Math.cbrt(8)) => 2
console.log(Math.cbrt('8')) => 2
console.log(Math.cbrt('pp')) => NaN
```