const fs = require('fs')
const axios = require('axios')

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
	console.log(f1.toString())
	console.log(f2.toString())
}
function getStockSymbol(name){
	console.log('stock name '+  name)
	return Symbol(name)
}
function getStockPrice(symbol){
	console.log(symbol)
	return 123
}
// asyncReadFile()
async function getData(name) {
	const symbol = await getStockSymbol(name)
	const stockPrice = await getStockPrice(symbol)
	return stockPrice
}

// getData('goo').then((res)=>console.log(res))
function timeout(ms){
	return new Promise(resolve=>{
		console.log(resolve,'resolve')
		setTimeout(resolve,ms)
	})
}

async function asyncPrint(value,ms,ms1){
	await timeout(ms)
	console.log(ms)

	await timeout(ms1)
	console.log(ms1)
}

// asyncPrint('nihaoya', 2000,1000)

async function foo(){}

const fo = async ()=> {}
// fo = async function(){}
const f = {
	async foo(){

	}
}
// f.foo()

class Stock {
	constructor(){

	}
	async getData(){}
}
const st = new Stock()
// st.getData()

const githubUser = async (name) => {
	let user = {}
	await axios.get('https://api.github.com/users/'+name).then(res=>{
		// console.log(res)
		user = res.data
	})
	return user
}
const githubFollowers = async () => {
	let user = []
	await axios.get('https://api.github.com/users/guozilin/followers').then(res => {
		// console.log(res.data)
		user = user.concat(res.data)
	})
	return user
}

const getUserFollowers = async () => {
	const followers = await githubFollowers()
	// console.log(followers)
	const user = followers[0].login
	const rs = await githubUser(user)
	// githubFollowers()
	console.log(rs)
}
getUserFollowers()