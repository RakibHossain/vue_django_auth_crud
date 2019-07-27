<template>

	<div class="user-form">

		<h1>Update User</h1>

		<form @submit="updateUser">

			<div class="row">

				<div class="col-md-6">

					<div class="form-group">
						<label for="name">Name:</label>
						<input type="text" v-model="edit_user.name" class="form-control" required />
					</div>
					
				</div>

				<div class="col-md-6">

					<div class="form-group">
						<label for="username">Username:</label>
						<input type="text" v-model="edit_user.username" class="form-control" required />
					</div>
					
				</div>
				
			</div>

			<div class="row">

				<div class="col-md-6">

					<div class="form-group">
						<label for="email">Email:</label>
						<input type="email" v-model="edit_user.email" class="form-control" required />
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

</template>

<script>

import { mapGetters } from 'vuex'

export default {
	name: "EditUser",
	data() {
		return {
			user: {
				password: '',
				confirm_password: ''
			}
		}
	},
	methods: {
		updateUser(e) {
			e.preventDefault()

			let user_info  = {
				name: this.edit_user.name, 
				username: this.edit_user.username, 
				email: this.edit_user.email, 
				password: this.user.password,
				confirm_password: this.user.confirm_password
			}

			if (user_info.password != user_info.confirm_password) {
				alert('Please confirm your password again !')
			} else {
				// call UserModule action
				this.$store.dispatch('updateUser', user_info)
			}
		}
	},
	computed: mapGetters([
		'edit_user'
	])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user-form {
	position: relative;
	top: 30px;
}

</style>
