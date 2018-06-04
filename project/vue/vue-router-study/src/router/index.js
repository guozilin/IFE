import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import PageOne from '@/components/PageOne'
// import PageTwo from '@/components/PageTwo'

Vue.use(Router)

export default () => {
	return new Router({
		routes: [{
			path: '/',
			redirect: '/app'
		}, {
			path: '/app',
			name: 'app', 
			component: () => import ('@/components/HelloWorld'),
			meta: {
				title: '我是页面信息 title',
				description: 'description'
			}, 
			beforeEnter(to, from, next) {
				console.log('before enter')
				next()
			}
		}, {
			path: '/page/:id',
			name: 'page',
			component: () => import ('@/components/PageTwo'),
			props: (route) => ({
				id: route.params.id
			})
		}, {
			path: '/page/:id/:level',
			name: 'pagetwo',			
			component: () =>
				import ('@/components/PageTwo'),
			props: (route) => ({
				id: route.params.id,
				level: route.params.level
			}),
			beforeEnter(to,from, next){
				// console.log(to,from,'routye')
				next()
			}
		},{
			path: '/third',
			component: () => import ('@/components/third'),
		}],

		base: '/base/',
		linkActiveClass: 'active-link', // 包含当前路由的上层 例如当前路由为 /page/123 ,name 如有路由 /page 则拥有 该样式
		linkExactActiveClass: 'exact-active-link', // 当前匹配的 url 所对应的 class
		scrollBehavior: (to, from, savedPosition) => {
			// console.log(to,from)
			if (savedPosition) {
				return savedPosition
			} else {
				return {
					x: 0,
					y: 0
				}
			}
		},
		
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

