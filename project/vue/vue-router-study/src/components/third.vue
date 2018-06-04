<template>
	<div class="third">
		<h3>I'm third component</h3>
		<component v-bind:is="currentTabComponent"></component>	
		<button @click="change">change component</button>
	</div>
</template>

<script>
import Vue from 'vue'
Vue.component('component1',{
	template: `<h6> component 1</h6>`
})
Vue.component('component2',{
	template: `<h6> component 2</h6>`
})
Vue.component('component3',{
	template: `<h6> component 3</h6>`
})
Vue.component('component4',{
	template: `<h6> component 4</h6>`
})
export default {
	name: 'ThirdComponent',
	data(){
		return {
			id: 1,
		}
	},
	computed:{
		currentTabComponent(){
			return 'component' + this.id.toString()
		}
	},
	methods:{
		change(){
			this.id = 2
		}
	},
	mounted(){
		console.log(this)
		// this.change()
	}
}

</script>
