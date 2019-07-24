import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const API_URL = 'http://localhost:8000'

const UserModule = {
	state: {
		users: [],
	},
	mutations: {
		GET_USERS(state, user) {
			state.users = user
		},
		ADD_USER(state, user) {
			state.users.push(user)
		},
		EDIT_USER(state, user) {
			var users = state.users
			users.splice(users.indexOf(user), 1)
		},
		REMOVE_USER(state, user) {
			var users = state.users
			users.splice(users.indexOf(user), 1)
		}
	},
	actions: {
		async getUsers(context) {
			const url = `${API_URL}/api/v1/user/get/`
			try 
			{
				let { data } = await axios.get(url)
				let users = data.user_info
				context.commit('GET_USERS', users)
			} 
			catch (e) 
			{
				console.error(e)
			}
		},
		async saveUser(context, user) {
			// console.log(user)

			const url = `${API_URL}/api/v1/user/create/`
			try 
			{
				await axios.post(url, user)
				context.commit('ADD_USER', user)
			}
			catch (e) 
			{
				console.error(e)
			}
		},
		editUser(context, user) {
			context.commit('EDIT_USER', user)
		},
		async removeUser(context, user) {
			// console.log(user)

			const url = `${API_URL}/api/v1/user/delete/`+ user.username +'/'
			try 
			{
				await axios.delete(url)
				context.commit('REMOVE_USER', user)
			} 
			catch (e) 
			{
				console.error(e)
			}
		}
	},
	getters: {
		users(state) {
			return state.users
		}
	}
}

export default UserModule
