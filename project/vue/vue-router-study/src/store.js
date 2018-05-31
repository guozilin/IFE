import Vuex from 'vuex'


export default () => {
	return new Vuex.Store({
		state: {
			id: '',
			level: 'spot'
		},
		mutations: {
			// updateCount(state, num) {
			// 	state.count = num
			// }
		}
	})
}
