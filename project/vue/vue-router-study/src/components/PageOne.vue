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
	mounted(){
		console.log(this.id)
	}
}
</script>

<style scoped>
</style>
