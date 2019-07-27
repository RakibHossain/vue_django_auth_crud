<template>

	<div class="container">

		<EditUser v-if="edit_user != ''"></EditUser>
		<CreateUser v-else></CreateUser>

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
							<button class="btn btn-sm btn-success mb-2" @click="edit(user)"><i class="fa fa-edit"></i></button>
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
import CreateUser from './CreateUser'
import EditUser from './EditUser'

export default {
	name: "Users",
	components: {
		CreateUser,
		EditUser
	},
	methods: {
		edit(user) {
			let user_info  = {
				uuid : user.uuid, 
				name : user.name, 
				username : user.username, 
				email : user.email, 
				is_active : user.is_active
			}

			// calling the function in actions
			this.$store.dispatch('editUser', user_info)
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
		'users', 'edit_user'
	])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user-table {
	position: relative;
	top: 50px;
}

</style>
