# DOM  扩展

### 选择符 API

- querySelector() 方法 接受一个 css 选择器，返回第一个匹配的元素，没有则返回 null
- querySelectorAll() 方法，接受一个 css 选择器，返回一组匹配的元素，没有则返回 []
- matchesSelector() 方法，接受一个 css 选择器，如果调用该方法的元素与该选择器匹配则返回 true，否则返回 false
```
由于浏览器实现不同，因此需要进行一次方法是否支持的判断
function matchesSelector(ele,selector){
    if(ele.matchesSelector){
        return ele.matchesSelector(selector)
    }else if(ele.msMatchesSelector){
        return ele.msMatchesSelector(selector)
    }else if(ele.mozMatchesSelector){
        return ele.mozMatchesSelector(selector)
    }else if(ele.webkitMatchesSelector){
        return ele.webkitMatchesSelector(selector)
    }else{
        throw new Error('not supported')
    }
}
```

### 与类相关的属性 

- getElementsByClassName() 传入一个或多个类名的字符串，返回一组匹配的元素，与getElementsByTagName(),getElementsByName()累似
- classList 属性
```
<div id="app" class="user name logo disabled">app</div>
<button id="btn">toggle app class</button>

var app = document.getElementById('app')
var btn = document.getElementById('btn')
app.classList.add('new-style')
app.classList.remove('user')
console.log(app.classList.contains('user'))
btn.onclick = function(){
    app.classList.toggle('disabled')
}
console.log(app.classList)
```

### 插入标记

- innerHTML 属性
- outerHTML 属性
- insertAdjacentHTML() 方法
```
ele.insertAdjacentHTML('beforebegin','hello world') // 作为前一个同辈元素插入
ele.insertAdjacentHTML('afterbegin','hello world') // 作为第一个的子元素插入
ele.insertAdjacentHTML('beforeend','hello world') // 作为最后一个元素插入
ele.insertAdjacentHTML('afterend','hello world') // 作为最后一个子元素插入
```