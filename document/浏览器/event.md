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
    }
}
```

### 组织默认事件
- preventDefault() 阻止特定时间的默认行为
- stopPropagation() 取消事件冒泡或者捕获
- cancelBubble() IE 取消冒泡时间