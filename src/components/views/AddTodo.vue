<template>

	<div class="container">

		<form class="form-inline todo-form" @submit="addTodo">
			<label for="todo" class="mb-2 mr-sm-2">Todo:</label>
			<input type="text" v-model="todo.title" class="form-control mb-2 mr-sm-2" id="todo" placeholder="Add Todo..." />
			<button type="submit" class="btn btn-info mb-2">Save</button>
		</form>

	</div>

</template>

<script>

// import uuid from 'uuid';

export default {
	name: "AddTodo",
	data() {
		return {
			todo: {
				title: '',
				completed: false
			}
		}
	},
	methods: {
		addTodo(e) {
			e.preventDefault()

			// send up to parent
			this.$store.dispatch('saveTodos', this.todo)

			// clear the form
			// this.todo.title = ''
		}
	}
}

</script>

<style scoped>
	
.todo-form {
	position: relative;
	top: 20px;
}

</style>
