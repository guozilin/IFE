import Vuex from 'vuex'


export default () => {
	return new Vuex.Store({
		state: {
			id: '',
			level: 'spot'
		},
		mutations: {
			updateParams(state, {id,level}) {
				state.id = id
				state.level = level
			}
		}
	})
}
