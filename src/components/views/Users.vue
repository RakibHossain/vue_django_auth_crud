<template>

	<div class="container">

		<div class="user-form">

			<h1>Create User</h1>

			<form @submit="createUser">

				<div class="row">

					<div class="col-md-6">

						<div class="form-group">
							<label for="name">Name:</label>
							<input type="text" v-model="user.name" class="form-control" required placeholder="Enter your name" />
						</div>
						
					</div>

					<div class="col-md-6">

						<div class="form-group">
							<label for="username">Username:</label>
							<input type="text" v-model="user.username" class="form-control" required placeholder="Enter your username" />
						</div>
						
					</div>
					
				</div>

				<div class="row">

					<div class="col-md-6">

						<div class="form-group">
							<label for="email">Email:</label>
							<input type="email" v-model="user.email" class="form-control" required placeholder="Enter your email" />
						</div>
						
					</div>

					<div class="col-md-6">

						<div class="form-group">
							<label for="password">Password:</label>
							<input type="password" v-model="user.password" class="form-control" required placeholder="Enter your password" />
						</div>
						
					</div>
					
				</div>

				<div class="row">

					<div class="col-md-6">

						<div class="form-group">
							<label for="confirm-password">Confirm Password:</label>
							<input type="password" v-model="user.confirm_password" class="form-control" required placeholder="Confirm your password" />
						</div>
						
					</div>
					
				</div>

				<button type="submit" class="btn btn-info">Save</button>

			</form>

		</div>

		<div class="user-table">
		
			<h1>Users</h1>

			<table class="table table-striped">

				<thead>

					<tr>
						<th>ID</th>
						<th>name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Action</th>
					</tr>

				</thead>

				<tbody>

					<tr v-for="(user, index) in users" :key="user.uuid">
						<td>{{ ++index }}</td>
						<td>{{ user.name }}</td>
						<td>{{ user.username }}</td>
						<td>{{ user.email }}</td>
						<td>
							<button class="btn btn-sm btn-success mb-2"><i class="fa fa-edit"></i></button>
							<button class="btn btn-sm btn-danger mb-2" @click="remove(user)"><i class="fa fa-trash"></i></button>
						</td>
					</tr>

				</tbody>

			</table>

		</div>

	</div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
	name: "Users",
	data() {
		return {
			user: {
				name: '',
				username: '',
				email: '',
				password: '',
				confirm_password: ''
			}
		}
	},
	methods: {
		createUser(e) {
			e.preventDefault()

			let user_info  = {
				name : this.user.name, 
				username : this.user.username, 
				email : this.user.email, 
				password : this.user.password,
				confirm_password : this.user.confirm_password
			}

			// call UserModule action
			this.$store.dispatch('saveUser', user_info)
		},
		remove(user) {
			let user_info  = {
				uuid : user.uuid, 
				name : user.name, 
				username : user.username, 
				email : user.email, 
				is_active : user.is_active
			}

			// calling the function in actions
			this.$store.dispatch('removeUser', user_info)
		}
	},
	mounted() {
		// calling the function in actions
		this.$store.dispatch('getUsers')
	},
	computed: mapGetters([
		'users'
	])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user-form {
	position: relative;
	top: 30px;
}

.user-table {
	position: relative;
	top: 50px;
}

</style>
