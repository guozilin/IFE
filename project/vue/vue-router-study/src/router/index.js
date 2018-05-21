import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'

Vue.use(Router)

export default () => {
	return new Router({
		routes: [{
			path: '/',
			redirect: '/app'
		}, {
			path: '/app',
			name: 'app', // 也可以根据 name 进行路由跳转  <router-link :to="{name: 'app'}"></router-link>
			component: HelloWorld,
			meta: {
				title: '我是页面信息 title',
				description: 'description'
			}, // 保存页面信息 与路由无关的配置 都可以写在 meta 里 
			children: [{
				path: 'test',
				component: PageOne
			}] // 路由嵌套
		}, {
			path: '/page/:id',
			component: PageOne,
			// props: true, // 可以在组建内直接拿到 props 参数
			// props:{
			// 	id: '456'
			// }
			props: (route) => ({id: route.params.id})
		}, {
			path: '/page2',
			component: PageTwo
		}],
		mode: 'history',
		base: '/base/',
		linkActiveClass: 'active-link', // 包含当前路由的上层 例如当前路由为 /page/123 ,name 如有路由 /page 则拥有 该样式
		linkExactActiveClass: 'exact-active-link', // 当前匹配的 url 所对应的 class
		scrollBehavior: (to,from,savedPosition)=>{
			console.log(to,from)
			if(savedPosition){
				return savedPosition
			}else{
				return {x: 0, y: 0}
			}
		},
		// parseQuery(query){

		// },
		// stringifyQuery(obj) {

		// }
		fallback: true // 浏览器不支持前端的 history 路由时，自动转为 hash 路由
	})
}
// router 配置项
/* 
	routes ? : RouteConfig[];  
 	mode ? : RouterMode;       "hash" | "history" | "abstract"
	fallback ? : boolean;
	base ? : string;   默认在所有路由中 加入 /base/  神奇的是 在 url 中直接输入 url 依旧可以访问之前的路径 不强制
	linkActiveClass ? : string;
	linkExactActiveClass ? : string;
	parseQuery ? : (query: string) => Object;
	stringifyQuery ? : (query: Object) => string;
	scrollBehavior ? : ( to: Route, from: Route, savedPosition: Position | void ) => PositionResult | Promise < PositionResult > ;
*/

// 1 vue-router 默认使用 hash 路由 （浏览器 SEO 不会抓取）
