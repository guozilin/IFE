{
    let obj = {
        name: 'tracy',
        time: '1990-09-15',
        _t : 123
    }
    let monitor = new Proxy(obj,{
        // 代理原始对象属性的读取
        get(target,key,monitor){
            // return Reflect.get(target,key)
            return target[key].replace('1990','1999')
        },
        // 修改属性值的代理
        set(target,key,value,monitor){
            if(key === 'name'){
                // return target[key] = value
                return Reflect.set(target,key,value,monitor)
            }else{
                // return target[key]
                return Reflect.get(target,key)
            }
        },
        // 判断对象是否有某个属性 key in object
        has(target,key,monitor){
            // 只向外暴露 name 属性，其余的不暴露
            if(key === 'name'){
                return Reflect.has(target,key)
            }else{
                return false
            }
        },
        // 代理删除操作
        deleteProperty(target,key,monitor){
            if(key.indexOf('_')>-1){
                // delete target[key]
                // return true
                return Reflect.deleteProperty(target,key)
            }else{
                return Reflect.get(target,key)
                // return target[key]
            }
        },
        // 拦截 Object.keys(),Object.getOwnPropertyNames(),Object.getOwnPropertySymbols() 
        ownKeys(target,key,monitor){
            return Object.keys(target).filter(i=>i!='time')
        }
    })
    // delete monitor._t
    // delete monitor.name // 删除失败

    console.log(Object.keys(monitor)) // ["name", "_t"]
    
    console.info(monitor,obj)

}
{
    let obj = {
        name : 'mark',
        age  : 27
    }
    console.log(Reflect.get(obj,'name'))
    Reflect.set(obj,'age',28)
    console.log(obj)
}
{
    function validator(target,validator){
        return new Proxy(target,{
            _validator: validator,
            set(target,key,value,proxy){
                console.log(proxy)
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key]
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${value}到${key}`)
                    }
                }else{
                    throw Error(`${key} 属性不存在`)
                }
            }
        })
    }

    const personValidator = {
        name(val){
            return typeof val === 'string';
        },
        age(val){
            return typeof val === 'number' && val > 18;
        }
    }

    class Person {
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidator)
        }
    }

    let p = new Person('tray','5')
    p.hah = 123
    p.age = '12'
    console.log(p)
}