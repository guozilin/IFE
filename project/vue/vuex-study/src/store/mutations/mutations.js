export default {
	// mutations 只可以接受两个参数 如果传多个值 则第二个值则是对象
	// updateCount(state,num){
	// 	state.count = num
	// }
	updateCount(state, {num,num2}) {
		console.log(state,'1')
		state.count = num
	}

}