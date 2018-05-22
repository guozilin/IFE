// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuex from 'vuex'
import App from './App'
import router from './router'
import createStore from './store'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = createStore()
// 动态注册一个模块
store.registerModule('c', {
	state: {
		text: 'my name is module c'
	}
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>',
	data() {
		return {}
	},
	// 页面初始化 触发
	beforeCreate() {
		console.log(this,'beforeCreate')
	},
	// 页面初始化 触发
	created(){
		console.log(this,'created')
	},
	// 页面初始化 触发
	beforeMount() {
		console.log(this, 'beforeMount')
	},
	// 页面初始化 触发
	mounted() {
		console.log(this, 'mounted')
	},
	beforeUpdate() {
		console.log(this, 'beforeUpdate')
	},
	updated() {
		console.log(this, 'updated')
	},
	activated(){
		console.log(this,'activated')
	},
	deactivated(){
		console.log(this,'deactivated')
	},
	beforeDestroyed(){
		console.log(this,'beforeDestroyed')
	},
	destroyed(){
		console.log(this,'destroyed')
	}
	
})
