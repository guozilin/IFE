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
        if(document.impementadtion.hasFeature('MouseEvent','2.0)){
            return event.button
        }else{
            switch(event.button){
                case: 0:
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