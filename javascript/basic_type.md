# 基本数据类型

### Boolean 类型
```
    1. var bool = new Boolean(false);
    bool 是一个boolean对象， typeof bool => Object

    2. var result = false
    result 是一个布尔值  typeof result => Boolean
```

### Number 类型
```
    1. var num = new Number(10);
    num 是一个Number对象 typeof num => Object

    2. toString() 
    var n  = 10;
    n.toString(10) or n.toString() => 10
    n.toString(2) 1010二进制
    n.toString(8),n.toString(16)

    3.toFixed() 保留几位小数
    n.toFixed(2) = 10.00

    3.toExponential() 指数表示法
    n.toExponential(2) = 1.00e + 1

    4.toPrecision() 按最合理的选择toFixed还是toExponential()

```

### String 类型
```
    1. var str = new String('12345');
    typeof str => Object

    2. length 字符串长度
    3. concat() 拼接字符串 str.concat(' 54321') = '12345 54321'
    
    4. 切割字符串
        var str = 'hello world';
        4.1 slice()
            str.slice(3) = 'lo world'
            str.slice(3,7) = 'lo w'
            str.slice(-3) = 'rld'
            str.slice(3,-4) => str.slice(3,-4 + str.length) = 'lo w'

        4.2 substr()
            str.substr(3) = 'lo world'
            str.substr(3,7) 'lo worl'  第二个参数为 返回的字符串长度
            str.substr(-3) = 'rld'
            str.substr(3,-7) = ''
            str.substr(-3,2) = str.substr(-3+str.length ,2) = 'ld'

        4.3 substring()


```