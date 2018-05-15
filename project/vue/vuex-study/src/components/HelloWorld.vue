<template>
	<div class="hello">
		{{counter}}
		<br>
		{{fullName}}
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	computed: {
		// count(){
		// 	return this.$store.state.count
		// },
		// ...mapState(['count']),
		// ...mapState({
		// 	counter: 'count'
		// }),
		...mapState({
			counter: (state) => state.count
		}),
		...mapGetters(['fullName'])
		// fullName(){
		// 	return this.$store.getters.fullName
		// }
	},
	mounted () {
		console.log(this.$store)
		let i = 0;
		setInterval(()=>{
			// 同步修改
			this.$store.commit('updateCount',i++)
		},1000)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
