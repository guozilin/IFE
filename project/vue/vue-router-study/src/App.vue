<template>
	<div id="app">
		<img src="./assets/logo.png">
		<br>
		<router-link to="/app">Home</router-link>
		<router-link to="/page/123">page one</router-link>
		<router-link to="/page/456">page 456</router-link>
		<router-link to="/page2">page two</router-link>
		<!-- 全局页面切换动画 -->
		<transition> 
			<router-view/>
		</transition>
		<!-- <footer>
		<router-view name="a" />
		</footer> -->
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
/* footer{
	position: absolute;
	bottom: 0;
} */
a:visited,a,a:focus,a:hover {
	color: #333;
}
a.active-link{
	color: greenyellow
}
a.exact-active-link{
	color: darkcyan
}
.v-enter-active, .v-leave-active{
	transition: opacity .5s
}
.v-enter, .v-enter-to{
	opacity: 0;
}
</style>
