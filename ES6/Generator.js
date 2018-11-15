function* hello(){
	yield 'hello'
	yield 'world'
	return 'ending'
}
const a = hello()
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(typeof(a))
function* foo(){
	yield 123 + 2
}
let b = foo()
console.log(b.next())
console.log(b.next())


