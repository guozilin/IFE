<template>
  <div class="parent-component">
	  <array-com :news="newsList"></array-com>
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
			newsList: []
		}
	},
	mounted () {
		setTimeout(()=>{
			this.newsList = ['哈哈','嘿嘿','呦呦','窃窃']
		},5000)
	}
}

</script>
<style lang='stylus' scoped>
</style>