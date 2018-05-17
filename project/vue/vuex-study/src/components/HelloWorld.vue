<template>
	<div class="hello">
		{{counter}}
		<br>
		{{fullName}}
		<p>{{textA}}</p>
		<p>{{textPlus}}</p>
		<p>{{textC}}</p>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
			counter: (state) => state.count,
			textA: (state)=> state.a.text,
			textC: (state)=> state.c.text

		}),
		// ...mapGetters(['fullName']),
		...mapGetters({
			fullName: 'fullName',
			textPlus: 'a/textPlus'
		})
		// fullName(){
		// 	return this.$store.getters.fullName
		// }

		// 从modules a 里取值
		// textA(){
		// 	return this.$store.state.a.text
		// },


		
	},
	mounted () {
		console.log(this.$store)
		// this.$store.state.count = 3  错误
		// this.$store.commit('updateCount',{num: 3,num2: 'mutaions的第二个参数'})

		// let i = 0;
		// setInterval(()=>{
		// 	// 同步修改
		// 	this.$store.commit('updateCount',{
		// 		num: i++,
		// 		num2: 'mutaions的第二个参数'
		// 	})
		// },1000)

		// this.$store.dispatch('updateCountAsync',{
		// 	num: 1,
		// 	time: 2000
		// })
		
	},
	methods: {
		...mapActions(['updateCountAsync','a/add','a/updateCounter','b/updateModuleAtext']),
		// updateText 是子模块里的mutations vuex默认将mutations 放进全局的命名空间
		// ...mapMutations(['updateCount','updateText']),
		// 可以设置 modules 的 namespaced: true
		...mapMutations(['updateCount','a/updateText'])
		
	},
	mounted () {
		// this.updateCountAsync({
		// 	num: 5,
		// 	time: 2000
		// })
		let i = 10
		// setInterval(()=>{
		// 	this.updateCount({
		// 		num : i++,
		// 		num2: 20
		// 	})
		// },1000)
		// 全局时可以直接调用
		// this.updateText('update A text')
		this['a/updateText']('update A text')
		// 调用module里的actions
		this['a/add']()

		this['a/updateCounter']()
		// b 没有加命名空间 可以直接调用 
		this['b/updateModuleAtext']()

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
