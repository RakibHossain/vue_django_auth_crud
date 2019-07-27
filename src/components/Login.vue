<template>

	<div class="container">

		<center>
			<h1>{{ message }}</h1>
		</center>

		<div class="row">

			<div class="offset-md-3 col-md-6">

				<form @submit="login">

					<div class="form-group">
						<label for="username">Username or Email:</label>
						<input type="text" v-model="user.username" class="form-control" placeholder="Enter username or email">
					</div>
					<div class="form-group">
						<label for="password">Password:</label>
						<input type="password" v-model="user.password" class="form-control" placeholder="Enter password">
					</div>

					<button type="submit" class="btn btn-info">Login</button>

				</form>
				
			</div>
			
		</div>
		
	</div>

</template>

<script>

export default {
	name: 'Login',
	data() {
		return {
			message: 'Login',
			user: {
				username : '', 
				password : '' 
			}
		}
	},
	created () {
        // reset login status
        this.$store.dispatch('logout')
    },
	methods: {
		login(e) {
			e.preventDefault()

			let user  = {
				username : this.user.username, 
				password : this.user.password
			}

			// send up to parent
			this.$store.dispatch('login', user)
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
