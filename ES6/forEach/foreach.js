const colors = ['blue', 'yellow', 'red']

colors.forEach((color,index,item)=>{
	console.info(index + '-' + color + '-' + item)
})

const numbers  = [1,2,3,4,5]
let sum = 0
numbers.forEach(number => {
	sum += number
});
console.log(sum)
