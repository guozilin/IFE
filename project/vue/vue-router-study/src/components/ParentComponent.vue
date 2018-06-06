<template>
  <div class="parent-component">
	  <array-com :news="lists" @update="changeData"></array-com>
  </div>
</template>

<script>
import ArrayCom from './ArrayCom'
export default {
	name: 'ParentComponent',
	props: {
	},
	components: {
		ArrayCom
	},
	data(){
		return {
			newsList: ['哈哈','嘿嘿','呦呦','窃窃'],
			lists: []
		}
	},
	computed:{
		// lists(){
			
		// }
	},
	methods:{
		uodateList(){
			let i = 0
			for (let value of this.newsList) {
				let item = {}
				item.id = i
				item.name = value
				item.child = [1, 2, 3, i]
				i++
				this.lists.push(item)
			}
		},
		updateData(data){
			// for(let item of this.lists){
			// 	if(item.id === data.){
			// 		break
			// 	}
			// 	_index ++ 
			// }
			// this.$set(this.lists, _index, ne)
			this.lists.push(data)
		},
		changeData(data){
			console.log(999)
			console.log(data)
			this.lists.push(data)
		}
	},
	mounted () {
		this.uodateList()
		// setTimeout(()=>{
		// 	this.newsList = ['哈哈','嘿嘿','呦呦','窃窃']
		// },5000)
	}
}

</script>
<style lang='stylus' scoped>
</style>