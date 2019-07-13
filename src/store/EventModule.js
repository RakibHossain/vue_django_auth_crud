const EventModule = {
	state: {
		name: '',
		count: 0
	},
	mutations: {
		CHANGE(state, name) {
			state.name = name
		},
		INCREMENT(state, step) {
			state.count += step
		}
	},
	actions: {
		change(context, name) {
			context.commit('CHANGE', name)
		},
		increment(context, step) {
			context.commit('INCREMENT', step)
		}
	},
	getters: {
		name(state) {
			return state.name
		},
		counter(state) {
			return state.count
		}
	}
}

export default EventModule
