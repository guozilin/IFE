# window 对象

### 全局作用域
```javascript
var age = 27
function say(){console.log(27)}
```
- 在全局作用域中声名变量和方法，或默认挂载到 window 上 window.age === age
- 直接定义的全局变量不可以通过 delete 删除，而使用window. 定义的，则可以删除
```javascript
var a = 123; delete a => false;
window.b = 123; delete b => true;
```