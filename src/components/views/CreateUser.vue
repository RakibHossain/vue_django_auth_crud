<template>

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

</template>

<script>

export default {
	name: "CreateUser",
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
				name: this.user.name, 
				username: this.user.username, 
				email: this.user.email, 
				password: this.user.password,
				confirm_password: this.user.confirm_password
			}

			// call UserModule action
			this.$store.dispatch('saveUser', user_info)
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user-form {
	position: relative;
	top: 30px;
}

</style>
