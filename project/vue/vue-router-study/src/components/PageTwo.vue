<template>
	<div class="two-page">
		<ul>
			<router-link :to="'/page/2/'+item.path" tag="li" v-for="item of urls" :key="item.id">{{item.path}}</router-link>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'

export default {
	name: 'PageTwo',
	data() {
		return {
			urls: [{id:1,path:'cu'},{id:2,path:'ai'},{id:3,path:'ni'},{id:4,path:'sb'},{id:5,path:'smm'}]
		}
	},
	props: {
		id: String,
		level: String
	},
	components: {
		...({
			ids: (state)=>state.id,
			levels: (state)=> state.level
		})
	},
	mounted () {
		console.log(this.$route)
		console.log(this.id)
		console.log(this.level)
	},
	beforeRouteUpdate(to, from, next) {
		this.ids = this.id
		// console.log(to,from)
		// params 参数时 会触发
		//has access to `this` component instance}
		
		console.log('component before update')
		console.log(this.$store,'route')
		next()
	},
}
</script>

<style scoped>
</style>
