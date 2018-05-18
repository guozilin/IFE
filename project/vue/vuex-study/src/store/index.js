import Vuex from 'vuex'
import defaultState from './state/state'

import mutations from './mutations/mutations'

import getters from './getters/getters'

import actions from './actions/actions'

// const store = new Vuex.Store({
// 	state: {
// 		count: 0
// 	},
// 	mutations: {
// 		updateCount(state,num){
// 			state.count = num
// 		}
// 	}
// })
//  step 2 
// export default () => {
// 	return new Vuex.Store({
// 		state: {
// 			count: 0
// 		},
// 		mutations: {
// 			updateCount(state, num) {
// 				state.count = num
// 			}
// 		}
// 	})
// }
const isDev = process.env.NODE_ENV === 'development'

export default () => {
	const store = new Vuex.Store({
		strict: isDev,
		state: defaultState,
		mutations,
		getters,
		actions,
		modules: {
			a:{
				namespaced: true,
				state:{
					text: 'this is module A'
				},
				mutations: {
					updateText(state,str){
						state.text = str
					}
				},
				getters:{
					textPlus(state,getters,rootState){
						return `${state.text}  ${rootState.b.text}`
					}
				},
				actions:{
					// state commit rootState 指的是 ctx
					// add(ctx){}
					add({state,commit,rootState}){
						commit('updateText','long long string')
					},
					updateCounter({commit}){
						// 命名空间内 调用全局的方法
						commit('updateCount',{num: 1000},{root: true})
					}
				}
			},
			b: {
				namespaced: true,
				state: {
					text: 'this is module B'
				},
				actions: {
					updateModuleAtext({commit}){
						commit('a/updateText', 'module b update a text',{root: true})
					}
				}
			}
		}
	})

	if(module.hot){
		module.hot.accept([
			'./state/state',
			'./mutations/mutations',
			'./getters/getters',
			'./actions/actions'
		],()=>{
			const newState 	   = require('./state/state').default
			const newMutations = require('./mutations/mutations').default
			const newGetters   = require('./getters/getters').default
			const newActions   = require('./actions/actions').default

			store.hotUpdate({
				state: newState,
				mutations: newMutations,
				getters: newGetters,
				actions: newACtions
			})
		})
	}
	return store
}
