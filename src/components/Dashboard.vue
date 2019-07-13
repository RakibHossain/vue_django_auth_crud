<template>

	<div class="container">

		<center>
			<h1>{{ message }}</h1>
		</center>
		
	</div>

</template>

<script>

export default {
	name: 'Dashboard',
	data() {
		return {
			message: 'You are logged in successfully !!!'
		}
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
