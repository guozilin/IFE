# 基本数据类型

### Boolean 类型
```javascript
    1. var bool = new Boolean(false);
    bool 是一个boolean对象， typeof bool => Object

    2. var result = false
    result 是一个布尔值  typeof result => Boolean
```

### Number 类型
```javascript
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
```javascript
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
            str.substring(3) = 'lo world'
            str.substring(3,7) = 'lo w'
            str.substring(-4) = 'hello world' str.substing(0)
            str.substring(4,1) = 'ell' => str.substring(1,4)
    
    5. 字符串位置
        5.1 indexOf()
            从字符串开始向后查找，可以忽略前面的部分 indexOf('o',2)
        5.2 lastIndexOf()
            从字符串末尾向前查找，可以忽略后面部分 lastIndexOf('o',8)
        存在则返回第一次出现的位置，不存在则返回 -1
    
    6. 去空格
        trim() 去掉字符串左右两端的空格 tab
        var str = '    snum eb s '
        str.trim() = 'snum eb s'
        返回字符串副本，不改变原字符串
        此外还有trimRight() trimLeft()
    
    7. 大小写转化
        toLocaleUpperCase()
        toUpperCase()
        toLocaleLowerCase()
        toLowerCase()
    
    8. 字符串的额匹配
        8.1 search
            返回子字符串第一次出现的位置，总是从前向后找,m没有则是-1
        8.2 match
            与正则的exec()方法类似；
            var text = 'cat,bat,sat,fat'
            var pat = /.at/
            pat.exec(text) == text.match(pat) = ["cat", index: 0, input: "cat ,bat,sat,fat", groups: undefined]
            区别： 当进行全局匹配时 pat2 = /.at/g
                match 只返回数组，没有index，也没有input 而exec则依旧是  ["cat", index: 0, input: "cat ,bat,sat,fat", groups: undefined]

        8.3 replace
            替换字符串：text.replace(/at/,'cond') => 'ccond,bat,sat,fat'
                    text.replace(/at/g,'cond') => 'ccond,bcond,scond,fcond'
        8.4 split()
            拆分字符串，返回数组
            text.split(',') => ['cat','bat','sat','fat']
            可指定返回的数组长度 长度为<0的 则无效参数，依旧返回整个数组
            text.split(',',2) => ['cat','bat']
        
        9. localeCompare() 比较两个字符串在字母表中的位置
            eg: var str = 'bat'
                str.localeCompare('abc') = 1
                str.localeCompare('cab') = -1
                str.localeCompare('bat') = 0
                str.loacleCompare('BAT') = -1 //因不同地区而异
```