import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router/router'

Vue.use(VueAxios, axios)

const API_URL = 'http://localhost:8000'

const AuthModule = {
	state: {
		status: '', 
		token: localStorage.getItem('token') || '', 
		user : {}
	},
	mutations: {
		auth_request(state) { 
			state.status = 'loading' 
		}, 
		auth_success(state, token, user) { 
			state.status = 'success'
			state.token  = token
			state.user 	 = user 
		}, 
		auth_error(state) { 
			state.status = 'error' 
		}, 
		logout(state) { 
			state.status = ''
			state.token  = '' 
		}
	},
	actions: {
		async login(context, user) {
			// console.log(user)
			const url = `${API_URL}/api/v1/auth/token/`

			try 
			{
				context.commit('auth_request')

				let { data } = await axios.post(url, user)
				localStorage.setItem('token', data.token)
				axios.defaults.headers.common['Authorization'] = data.token

				context.commit('auth_success', data.token, data.user)
				router.push('/dashboard')
			}
			catch (e) 
			{
				context.commit('auth_error')
				localStorage.removeItem('token')
				console.error(e)
			}
		},
		logout(context) { 
			context.commit('logout')
			localStorage.removeItem('token')
			delete axios.defaults.headers.common['Authorization']
		}
	},
	getters: {
		isLoggedIn(state) {
			return !!state.token
		}, 
		authStatus(state) {
			return state.status
		}
	}
}

export default AuthModule
