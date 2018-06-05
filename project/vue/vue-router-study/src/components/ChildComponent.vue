<template>
	<div class="child-component">
		<ul>
			<li v-for="(item,index) of list" :key="index">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ChildComponent',
	props: {
		list: Array
	},
	mounted(){
		console.log(this.list)
	}
}
</script>

