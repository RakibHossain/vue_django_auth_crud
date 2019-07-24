import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './AuthModule'
import EventModule from './EventModule'
import TodoModule from './TodoModule'
import UserModule from './UserModule'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		authModule: AuthModule,
		eventModule: EventModule,
		todoModule: TodoModule,
		userModule: UserModule
	}
})

export default store
