<template>
	<div class="array-test">
		<h2 v-for="(i,k) of newsList" :key="k">{{i}}</h2>
		<div class="list" v-for="item of lists" :key="item.id">
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
			newsList: this.news
			// list: [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		}
	},
	components: {
		ChildComponent
	},
	computed: {
		lists: {
			get () {
				let a = [], i = 0
				for (let value of this.newsList) {
					let item = {}
					item.id = i
					item.name = value
					item.child = [1, 2, 3, i]
					i++;
					a.push(item)
				}
				return a
			},
			set (l) {
				console.log(l)
				this.lists.push({ id: 4, name: 'kkkk', child: [11, 22, 33, 44] })
			}

			// return [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		}
	},
	// watch:{
	// 	newsList(){
	// 		console.log(999)
	// 	}
	// },
	methods: {
		changeList () {
			this.lists.push({ id: 4, name: 'kkkk', child: [11, 22, 33, 44] })
			console.log(this.lists)
		},

	},
	hhh () {
		// console.log(this.news)
	}


}

</script>
<style lang='stylus' scoped>
</style>