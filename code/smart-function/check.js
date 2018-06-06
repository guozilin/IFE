// 污染全局变量
var checkName = function () {
	console.log('name')
}
var checkEmail = function () {
	console.log('email')
}
var checkPassword = function () {
	console.log('password')
}
// 进化1
var formCheck = {
	checkName: function () {
		console.log('name')
	},
	checkEmail: function () {
		console.log('email')
	},
	checkPassword: function () {
		console.log('password')
	}
}
// or  复用性 扩展性差
checkForm = function () {}
checkForm.checkName = function () {}
checkForm.checkEmail = function () {}
checkForm.checkPassword = function () {}

// 进化2
var CheckForm = function () {
	return {
		checkName: function () {
			console.log('name')
		},
		checkEmail: function () {
			console.log('email')
		},
		checkPassword: function () {
			console.log('password')
		}
	}
}
// 调用  a与CheckForm已经无任何关系 因为CheckForm返回的是一个新对象 与 CheckForm 自身无关
// var a = new CheckForm()
// a.checkName()

// console.log(CheckForm.prototype, a.prototype)
// 进化3
var CheckForm = function () {
	// this new创建实例后每个对象都会对 this 进行复制，拥有自己的一套方法  浪费
	this.checkName = function () {
		console.log('name')
	}
	this.checkEmail = function () {
		console.log('email')
	}
	this.checkPassword = function () {
		console.log('password')
	}
}
var a = new CheckForm()
// a.checkName()
// console.log(CheckForm.prototype, a.prototype)

// 进化4 
var checkform = function () {}
checkform.prototype.checkName = function () {}
checkform.prototype.checkEmail = function () { }
checkform.prototype.checkPassword = function () {}

// or 
checkform.prototype = {
	checkName: function () {
		console.log('name')
	},
	checkEmail: function () {
		console.log('email')
	},
	checkPassword: function () {
		console.log('password')
	}
}

// 进化5
checkform.prototype = {
	checkName: function () {
		console.log('name')
		return this
	},
	checkEmail: function () {
		console.log('email')
		return this
	},
	checkPassword: function () {
		console.log('password')
		return this
	}
}
var b = new checkform()
b.checkEmail().checkName().checkPassword()