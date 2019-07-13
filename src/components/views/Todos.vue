<template>

	<div class="container">

		<AddTodo></AddTodo>

		<table class="table table-striped">

			<thead>

				<tr>
					<th>Status</th>
					<th>ID</th>
					<th>Title</th>
					<th>Action</th>
				</tr>

			</thead>

			<tbody>

				<tr v-for="(todo, index) in todos" :key="todo.id">
					<td><input type="checkbox" @click="markComplete(todo)" /></td>
					<td>{{ ++index }}</td>
					<td v-bind:class="{'is-complete':todo.completed}">{{ todo.title }}</td>
					<td>
						<button class="btn btn-sm btn-success mb-2" @click="edit(todo)"><i class="fa fa-edit"></i></button>
						<button class="btn btn-sm btn-danger mb-2" @click="remove(todo)"><i class="fa fa-trash"></i></button>
					</td>
				</tr>

			</tbody>

		</table>

	</div>

</template>

<script>

import { mapGetters } from 'vuex'
import AddTodo from './AddTodo'

export default {
	name: 'Todos',
	components: {
		AddTodo
	},
	methods: {
		markComplete(todo) {
			// calling the function in actions
			this.$store.dispatch('completeTodo', todo)
		},
		edit(todo) {
			// calling the function in actions
			this.$store.dispatch('editTodo', todo)
		},
		remove(todo) {
			// calling the function in actions
			this.$store.dispatch('removeTodo', todo)
		}
	},
	mounted() {
		// calling the function in actions
		this.$store.dispatch('getTodos')
	},
	computed: mapGetters([
		'todos'
	]),
	// computed: {
	// 	todos() {
	// 		return this.$store.getters.todos
	// 	}
	// },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table {
	position: relative;
	top: 30px;
}

.is-complete {
	text-decoration: line-through;
}

</style>
