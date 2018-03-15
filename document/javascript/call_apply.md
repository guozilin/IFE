# call() 与 apply()

- call 和 apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作
- call 和 apply 都是为了改变某个函数运行时的 context 即上下文而存在的，换句话说，就是为了改变函数体内部 this 的指向。因为 JavaScript 的函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。
```
var domNodes =  Array.prototype.slice.call(document.getElementsByTagName("*"));
这样domNodes就可以应用Array下的所有方法了。
```
- 二者的作用完全一样，只是接受参数的方式不太一样
- 都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。或者说thisObj『继承』了obj的属性和方法。
- 唯一区别是apply接受的是数组参数，call接受的是连续参数。


```
obj.call(thisObj, arg1, arg2, ...);
obj.apply(thisObj, [arg1, arg2, ...]);

猫吃鱼，狗吃肉，奥特曼打小怪兽。

有天狗想吃鱼了

猫.吃鱼.call(狗，鱼)

狗就吃到鱼了

猫成精了，想打怪兽

奥特曼.打小怪兽.call(猫，小怪兽)
```