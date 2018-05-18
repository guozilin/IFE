# Map

```
{
    // map 的 key 可以是任意数据结构
    let map = new Map()
    let arr = [1,2,3]
    map.set(arr,456)
    map.get(arr)
}
```
```
{
    let map = new Map([['a',123],['b',456]])
    map.size
    map.get(key)
    map.delete(key)
    map.clear()
}
```
```
{
    遍历与 set 一致
}
```
[Set语法](https://github.com/guozilin/documents/blob/master/document/ES6/set.md)

# weakMap
```
{
    // key 值必须是对象 与 Weakmap 类似
    let wsm = new WeakMap()

}

{
    let map = new Map();
    let array = [];
    map.set('t',1)
    array.push({t:1})
    console.info(map,array)

    console.info(map.has('t'),array.find(i=>i.t))

    map.set('t',2)
    array.forEach(i=>i.t? i.t=2:'')
    console.info(map,array)
    
    map.delete('t')
    let i = array.findIndex('t')
    array.split(i,1)
    console.info(map,array)
    
}
{
    let set = new Set()
    let arr = []

    set.add({t:1})
    arr.push({t:1})
    console.info(map,arr)
     
    set.has({t:1}) //false 对象不相等 在 set 里；可以将对象保存为变量 再去查找
    arr.find(i=>i.t)

    set.forEach(i=>i.t?i.t=2:'')
    arr.forEach(i=>i.t? i.t=2:'')

    set.forEach(i=>i.t?set.delete(i.t):'')
    let i = arr.findIndex('t')
    arr.split(i,1)
    console.info(set,arr)
}
{
    // Map Set Object

    let item = {t:1}
    let map = new Map()
    let set = new Set()
    let obj = {}

    map.set('t',1)
    set.add(item)
    obj['t'] = 1
    console.info(set,map,obj)

    console.info({
        map:map.has('t'),
        set:set.has(item),
        o  :'t' in obj

    })

    map.set('t',2)
    item.t = 2;
    obj['t'] = 2
    console.info(set,map,obj)

    map.delete('t')
    set.delete(item)
    delete obj['t']
    console.info(set,map,obj)
    

}
```
能使用 map 不使用 array

数据的唯一性  使用 set
