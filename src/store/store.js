import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './AuthModule'
import EventModule from './EventModule'
import TodoModule from './TodoModule'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		authModule: AuthModule,
		eventModule: EventModule,
		todoModule: TodoModule
	}
})

export default store
