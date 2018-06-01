// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import createRouter from './router'
import Vuex from 'vuex'

import createStore from './store'

Vue.use(Vuex)



const store = createStore()



const router = createRouter()

// 路由钩子  全局的 校验数据
// router.beforeEach((to, from, next) => {
// 	//to and from are Route Object,next() must be called to resolve the hook}
// 	console.log('before each',to)
// 	next()
// })
// router.beforeResolve((to,form,next) =>{
// 	console.log('before resolve')
// 	next()
// })
// router.afterEach((to, form, next) => {
// 	console.log('after each')

// })


Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	store

})
