const fs = require('fs')

const readFile = (fileName) => {
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,'utf8',(err,data)=>{
			// console.log(data)
			console.log(fileName)
			if(err) return reject(err)
			resolve(data)
		})
	})
}
// const gen = function * () {
// 	const a = yield readFile('./files/a.json')
// 	const b = yield readFile('./files/b.json')
// 	console.log(a)
// 	console.log(b)
// }
// const func = gen()
// func.next()
// func.next()

const asyncReadFile = async () => {
	const f1 = await readFile('./files/a.json')
	const f2 = await readFile('./files/b.json')
	console.log(f1.toString())
	console.log(f2.toString())
}
// asyncReadFile()

