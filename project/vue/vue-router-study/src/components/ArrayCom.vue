<template>
	<div class="array-test">
		<div class="list" v-for="item of list" :key="item.id">
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
		// list: {
		// 	default: () => {
		// 		return [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		// 	}
		// }
	},
	data () {
		return {
			// list: [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		}
	},
	components: {
		ChildComponent
	},
	computed: {
		list(){
			return [{ id: 1, name: 'hhhh', child: [1, 2, 3, 4] }, { id: 2, name: 'mmmm', child: [5, 6, 7, 8] }]
		}
	},
	// watch:{
	// 	list(){
	// 		console.log(999)
	// 	}
	// },
	methods: {
		changeList () {
			this.list.push({ id: 3, name: 'kkkk', child: [11, 22, 33, 44] })
			console.log(this.list)
		},
		
	}


}

</script>
<style lang='stylus' scoped>
</style>