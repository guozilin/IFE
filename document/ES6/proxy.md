 # Proxy(代理) 和 Reflect(反射)

- Proxy 是一种可以拦截并改变底层 JavaScript 引擎操作的包装器
- Reflect 对象的默认特性与相同的底层操作一致

### 创建一个代理
- new Proxy()接受两个参数，目标与处理程序
``` javascript
    let obj = {};
    let result = new Proxy(obj,{})
    result.name = 'tracy'
    console.log(obj.name) // 'tracy'
```
>* result 是一个代理，代理 obj 这个对象，代理的操作会转发给原始对象
>* result.name 实际上与 obj.name 引用的都是 obj.name

{
    供应商 => Proxy => 用户
}