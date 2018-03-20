# 事件处理程序

### 跨浏览器的事件处理程序
```
var EventUtil = {
    addHandler: function(ele,type,handle){
        if(ele.addEventListener){
            ele.addEventListener(type,handle,false)
        }else if(ele.attachEvent){
            ele.attachEvent('on'+type,handle)
        }else{
            ele['on'+type] = handle
        }
    },
    removeHandler : function(ele,type,handle){
        if(ele.removeEventListener){
            ele.removeEventListener(type,handle,false)
        }else if(ele.detachEvent){
            ele.detachEvent('on'+type,handle)
        }else{
            ele['on'+type] = handle
        }
    },
    getEvent : function(event){
        return event ? event : window.event
    },
    getTarget : function(event){
        return event.target || event.srcElement
    },
    preventDefault : function(event){
        if(event.preventDefault){
            event.preventDefault()
        }else{
            event.returnValue = false
        }
    },
    stopPropagation : function(event){
        if(event.stopPropagation){
            event.stopPropagation()
        }else{
            event.cancleBubble = true
        }
    },
    getMouseButton  : function(event){
        if(document.impementadtion.hasFeature('MouseEvent','2.0')){
            return event.button
        }else{
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                   return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDetail : function(event){
        if(event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta)
        }else{
            return -event.detail * 40
        }
    }
}
```

### 阻止默认事件
- preventDefault() 阻止特定时间的默认行为
- stopPropagation() 取消事件冒泡或者捕获
- cancelBubble() IE 取消冒泡时间

### 鼠标与滚轮事件
- 鼠标事件有9种 click,dbclick,mousedown,mouseup,mouseenter,mouseleave,mousemove,mouseover,mouseout
- 除了 mouseenter 与 mouseleave，其余鼠标事件均会冒泡
- 鼠标点击事件触发的顺序
    1. mousedown
    2. mouseup
    3. click
    4. mousedown
    5. mouseup
    6. click
    7. dbclick

### 键盘与文本事件
- 键盘事件有三种
    1. keydown 任意键触发，长按会连续触发
    2. keypress 字符键触发，长按连续触发
    3. keyup 释放键盘键时触发
- 当发生键盘事件时，event对象中会包含一个 keyCode，charCode
- 文本事件只有一种 textInput 文本显示给用户之前更容易拦截文本

### HTML5事件
- contextmenu 事件 自定义右击菜单
```
EventUtil.addHandle(window,'load',function(event){
    var div = document.getElementById('my-div');
    EventUtil.addHandle(div,'contextmenu',function(event){
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);
        var menu = document.getElementById('menu-demo');
        menu.style.left = event.clientX + 'px';
        menu.style.top = event.clienxY + 'px';
        menu.style.visibility = 'visible'
    })
    EventUtil.addHandle(document,'click',function(event){
        document.getElementById('menu-demo').style.visibility = 'hidden';
    })
})
```
- beforeunload 事件 关闭页面前，弹窗，告知用户页面即将关闭，是否确认
- DOMContentLoaded 事件 DOM 树加载完后之后触发，不管 js，css，图片是否加载完成
- readystatuschange 事件 主要监听 document.readystatus 的变化
    1. uninitialized(未初始化)
    2. loading (正在加载中)
    3. loaded (加载完毕)
    4. interactive (可以操作对象了，但还没加载完成)
    5. complete (完成)
- pageshow 和 pagehide 事件  监听页面关闭打开
- hashchange 事件 监听 URL #后的 hash 的 变化 可以接受到新的 url 与之前的 url event.oldURL,event.newURL

### 历史状态管理
- history.pushState(状态对象,新状态的标题,可选的相对 URL)
- history.pushState({name:'Mark'},'Mark home','person.html')
- 执行 pushState()后，新的状态信息会加入历史状态栈，浏览器会变成新的 URL，但浏览器不会真的向服务器发送请求
- 第二个参数目前尚无浏览器支持，只能先传一个空字符串
- pushState()后，回退按钮也可以使用， 按下回退会触发 window 对象的 popstate 事件
```
EventUtil.addHandler(window,'popstate',function(event){
    var state = event.state
    if(state){
        processState(state)
    }
})
```
- 更新当前状态 replaceState() 不会新增状态，只会重写当前状态
- history.replaceState({name:'mark'},'mark home')


### 触摸事件
- touchstart
- touchmove
- touchend
- touchcancel
- 执行顺序：
    1. touchstart
    2. mouseover
    3. mousemove
    4. mousedown
    5. mouseup
    6. click
    7. touched