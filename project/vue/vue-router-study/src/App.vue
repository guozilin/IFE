<template>
	<div id="app">
		<img src="./assets/logo.png">
		<br>
		<router-link to="/app">Home</router-link>
		<router-link to="/page1">page one</router-link>
		<router-link to="/page2">page two</router-link>
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
a:visited,a,a:focus,a:hover {
	color: #333;
}
a.active-link{
	color: greenyellow
}
a.exact-active-link{
	color: darkcyan
}
</style>
