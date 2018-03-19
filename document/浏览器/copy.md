# 操作剪切板

- beforecopy
- copy
- beforecut
- cut
- beforepaste
- paste

### 通过访问 clipboardData 对象访问剪切板中的数据
- IE 浏览器中 通过 window 对象访问 window.clipboardData
- 其它浏览器中通过 event 对象访问 event.clipboardData
- getData() 参数为 'text' 或者 'URL'
```
function getClipboardData(event){
    var clipboardData = event.clipboardData || window.clipboardData;
    return clipboardData.getData('text')
}
```
- setData() 
```
function setClipboardData(event,value){
    if(event.clipboardData){
        return event.clipboardData.setData('text/plain',value)
    }else if(window.clipboardData){
        return window.clipboardData.setData('text',value)
    }
}
```
- clearData()