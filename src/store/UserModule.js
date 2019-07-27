import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const API_URL = 'http://localhost:8000'

const UserModule = {
	state: {
		users: [],
		edit_user: []
	},
	mutations: {
		GET_USERS(state, user) {
			state.users = user
		},
		ADD_USER(state, user) {
			state.users.push(user)
		},
		EDIT_USER(state, user) {
			state.edit_user = user
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
		async editUser(context, user) {
			const url = `${API_URL}/api/v1/user/edit/`+ user.username +'/'
			try 
			{
				let { data } = await axios.get(url)
				let user = data.user_info
				context.commit('EDIT_USER', user)
			} 
			catch (e) 
			{
				console.error(e)
			}
		},
		async updateUser(context, user) {
			const url = `${API_URL}/api/v1/user/update/`+ user.username +'/'
			// console.log(url)
			try 
			{
				await axios.put(url, user)
				context.commit('REMOVE_USER', user)
				context.commit('ADD_USER', user)
			}
			catch (e) 
			{
				console.error(e)
			}
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
		},
		edit_user(state) {
			return state.edit_user
		}
	}
}

export default UserModule
