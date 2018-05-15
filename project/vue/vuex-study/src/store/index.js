import Vuex from 'vuex'
import defaultState from './state/state'

import mutations from './mutations/mutations'

import getters from './getters/getters'

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
	return new Vuex.Store({
		strict: isDev,
		state: defaultState,
		mutations,
		getters

	})
}
