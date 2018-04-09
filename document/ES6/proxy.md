 # Proxy(代理) 和 Reflect(反射)

- Proxy 是一种可以拦截并改变底层 JavaScript 引擎操作的包装器
- Reflect 对象的默认特性与相同的底层操作一致
>* Proxy 可以理解成，在目标对象之前架设一层“拦截”，
>* 外界对该对象的访问，都必须先通过这层拦截，
>* 因此提供了一种机制，可以对外界的访问进行过滤和改写。
>* Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

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
### Proxy 支持的拦截操作

- get(target, key, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']
>* 如果一个属性不可配置（configurable）和不可写（writable），则该属性不能被代理，通过 Proxy 对象访问该属性会报错
```javascript
    const target = Object.defineProperties({}, {
        foo: {
            value: 123,
            writable: false,
            configurable: false
        },
    });

    const handler = {
        get(target, propKey) {
            return 'abc';
        }
    };

    const proxy = new Proxy(target, handler);

    proxy.foo // error
```
- set(target,key,value,receiver) 拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值
>* 如果目标对象自身的某个属性，不可写或不可配置，那么set方法将不起作用
```javascript
    const obj = {};
    Object.defineProperty(obj, 'foo', {
        value: 'bar',
        writable: false,
    });

    const handler = {
        set: function(obj, prop, value, receiver) {
            obj[prop] = 'baz';
        }
    };

    const proxy = new Proxy(obj, handler);
    proxy.foo = 'baz';
    proxy.foo // "bar"
```
- has(target, key)：拦截key in proxy的操作，返回一个布尔值。
- deleteProperty(target, key)：拦截delete proxy[key]的操作，返回一个布尔值。
- ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- getOwnPropertyDescriptor(target, key)：拦截Object.getOwnPropertyDescriptor(proxy, key)，返回属性的描述对象。
- defineProperty(target, key, propDesc)：拦截Object.defineProperty(proxy, key, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
- getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
- isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
- setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
>* 接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组
``` javascript
    const target = function () { return 'I am the target'; };
    const handler = {
        apply: function () {
            return 'I am the proxy';
        }
    };

    const p = new Proxy(target, handler);

    p()
    // 变量p是 Proxy 的实例，当它作为函数调用时（p()），就会被apply方法拦截，返回一个字符串

    const twice = {
        apply (target, ctx, args) {
            return Reflect.apply(...arguments) * 2;
        }
    };
    function sum (left, right) {
        return left + right;
    };
    const proxy = new Proxy(sum, twice);
    proxy(1, 2) // 6
    proxy.call(null, 5, 6) // 22
    proxy.apply(null, [7, 8]) // 30
    // 每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截
    // 直接调用Reflect.apply方法，也会被拦截
    Reflect.apply(proxy, null, [9, 10]) // 38

```
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
