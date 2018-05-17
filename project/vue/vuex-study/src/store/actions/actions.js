export default {
	// action 也是用来操作 mutations 的方法集 通常用来做异步操作
	updateCountAsync(store,data){
		setTimeout(() => {
			store.commit('updateCount',{
				num: data.num + 1000
			})
		}, data.time);
	}
}