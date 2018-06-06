<template>
	<div class="array-test">
		<!-- <h2 v-for="i of news" :key="i.id">{{i.name}}</h2> -->
		<div class="list" v-for="item of news" :key="item.id">
			<h4>{{item.name}}</h4>
			<child-component :list="item.child"></child-component>
		</div>
		<button type="button" @click="changeList">change list</button>
	</div>
</template>

<script>
import ChildComponent from './ChildComponent'
export default {
	name: 'ArrayCom',
	props: {
		news: Array
		// list: {
		// 	default: () => {
		// 		return [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		// 	}
		// }
	},
	data () {
		return {
			// newsList: this.news
			// list: [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		}
	},
	components: {
		ChildComponent
	},
	computed: {
		// lists: {
		// 	get () {
		// 		let a = [], i = 0
		// 		for (let value of this.newsList) {
		// 			let item = {}
		// 			item.id = i
		// 			item.name = value
		// 			item.child = [1, 2, 3, i]
		// 			i++;
		// 			a.push(item)
		// 		}
		// 		return a
		// 	},
		// 	set (l) {
		// 		console.log(l)
		// 		this.lists.push({ id: 4, name: 'kkkk', child: [11, 22, 33, 44] })
		// 	}
		// lists () {
		// 	let a = [], i = 0
		// 	for (let value of this.news) {
		// 		let item = {}
		// 		item.id = i
		// 		item.name = value
		// 		item.child = [1, 2, 3, i]
		// 		i++;
		// 		a.push(item)
		// 	}
		// 	return a
		// return [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		// }
		// }
	},

	methods: {
		changeList () {
			const ne = { id: 4, name: 'kkkk', child: [11, 22, 33, 44] }
			this.$emit('update', ne)
			// let _index = 0
			// for(let item of this.lists){
			// 	if(item.id === 2){
			// 		break
			// 	}
			// 	_index ++ 
			// }
			// // this.$set(this.lists, _index, ne)
			// this.lists.splice(_index, 1, ne)
			// console.log(this.lists)
		},

	},
	mounted () {
		console.log(this.news)
	}


}

</script>
<style lang='stylus' scoped>
</style>