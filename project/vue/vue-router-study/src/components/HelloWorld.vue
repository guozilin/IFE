<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<h2>Ecosystem</h2>
		<!-- <router-view/> -->
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	beforeRouteEnter ( to, from, next ) {
		//does NOT have access to `this` component instance}
		console.log( 'component before enter' )
		next( vm => {
			console.log( vm )
		} )
	},
	beforeRouteUpdate ( to, from, next ) {
		// params 参数时 会触发
		//has access to `this` component instance}
		console.log( 'component before update' )
		next()
	},
	beforeRouteLeave ( to, from, next ) {
		//has access to `this` component instance}
		console.log( 'component before leave' )
		if ( global.confirm( 'are you sure?' ) ) {
			next()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
</style>
