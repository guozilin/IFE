<template>
	<div class="one-page">
		<h1>this is my first page </h1>
		<div style="height: 1800px"></div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'PageOne',
	data() {
		return {

		}
	},
	props: {
		id: String
	},
	components: {

	},
	methods: {

	},
	mounted() {
		console.log(this.id)
	},
	beforeRouteEnter(to, from, next) {
		//does NOT have access to `this` component instance}
		console.log('component before enter')
		next()
	},
	beforeRouteUpdate(to, from, next) {
		// params 参数时 会触发
		//has access to `this` component instance}
		console.log('component before update')
		next()
	},
	beforeRouteLeave(to, from, next) {
		//has access to `this` component instance}
		console.log('component before leave')
		next()
	}
}

</script>

<style scoped>


</style>
