# 拖放事件

- 拖动某元素触发事件
    1. dragstart
    2. drag
    3. dragend
- 元素被拖动到一个有校目标上时
    1. dragenter
    2. dragover
    3. dragleave / drop

### dataTransfer 对象
- 从被拖动元素，向放置目标传递字符串格式的数据
- getData()  event.dataTransfer.getData('Text') /  event.dataTransfer.getData('url') || event.dataTransfer.getData('text/uri-list')
- setData()  event.dataTransfer.setData('text','some text') /  event.dataTransfer.getData('URL','http://www.baidu.com')

#### dataTransfer 的两个属性 dropEffect 与 effectAllowed
- 通过 dropEffect 与 effectAllowed 确定被拖动元素以及作为放置目标的元素可以接受什么操作
- dropEffect 被拖动元素能够执行那种放置属性
    1. none 不能把拖动元素放在这里，除文本框之外所有元素的默认值
    2. move  应该把拖动元素放在这里
    3. copy 应该把拖动元素复制到放置目标
    4. link 放置目标会打开拖动的元素，拖动的元素必须是一个链接，有 URL
- 使用 dropEffect 属性必须在 ondragenter 事件处理程序中针对目标设置它
- dropEffect 只有搭配 effectAllowed 属性才有用 ，effectAllowed 属性可能的值
    1. uninitialized 没有给被拖动元素设置任何放置目标，默认值
    2. none  被拖动元素不能有任何行为
    3. copy 只允许值为 copy 的 dropEffect
    4. move 只允许值为 move 的 dropEffect
    5. link 只允许值为 link 的 dropEffect
    6. copyLink 允许值为 copy 或者 link 的 dropEffect
    7. copyMove 允许值为 copy 或者 move 的 dropEffect
    7. linkMove 允许值为 link 或者 move 的 dropEffect
    8. all 允许任意的 dropEffect
- 设置可拖动元素 draggable 可拖动属性
```html
<img src="./img.png" draggable="false"> // 不可拖动元素
<img src="./img.png" draggable=" true"> // 可拖动元素
```

 #### dataTransfer 的其它属性和方法
 - addELement
 - clearData
 - setDragImage(img,x,y)
 - types