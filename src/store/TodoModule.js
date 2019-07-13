import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const API_URL = 'https://jsonplaceholder.typicode.com'

const TodoModule = {
	state: {
		todos: [],
	},
	mutations: {
		SET_TODOS(state, todo) {
			state.todos = todo
		},
		ADD_TODOS(state, todo) {
			state.todos.push(todo)
		},
		COMPLETE_TODO(state, todo) {
			todo.completed = !todo.completed
		},
		EDIT_TODO(state, todo) {
			var todos = state.todos
			todos.splice(todos.indexOf(todo), 1)
		},
		REMOVE_TODO(state, todo) {
			var todos = state.todos
			todos.splice(todos.indexOf(todo), 1)
		}
	},
	actions: {
		async getTodos(context) {
			const url = `${API_URL}/todos?_limit=5`
			try 
			{
				let { data } = await axios.get(url)
				context.commit('SET_TODOS', data)
			} 
			catch (e) 
			{
				console.error(e)
			}
		},
		// getTodos(context) {
		// 	const url = `${API_URL}/todos?_limit=5`
		// 	axios.get(url).then(response => {
		// 		context.commit('SET_TODOS', response.data)
		// 	}).catch(err => console.log(err))
		// },
		async saveTodos(context, todo) {
			const url = `${API_URL}/todos`
			try 
			{
				await axios.post(url)
				context.commit('ADD_TODOS', todo)
			}
			catch (e) 
			{
				console.error(e)
			}
		},
		// saveTodos(context, todo) {
		// 	const url = `${API_URL}/todos`
		// 	axios.post(url).then(
		// 		context.commit('ADD_TODOS', todo)
		// 	).catch(err => console.log(err))
		// },
		completeTodo(context, todo) {
			context.commit('COMPLETE_TODO', todo)
		},
		editTodo(context, todo) {
			context.commit('EDIT_TODO', todo)
		},
		removeTodo(context, todo) {
			context.commit('REMOVE_TODO', todo)
		}
	},
	getters: {
		todos(state) {
			return state.todos
		}
	}
}

export default TodoModule
