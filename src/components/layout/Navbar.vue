<template>

	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

		<!-- Brand/logo -->
		<router-link to="/" class="navbar-brand">Vue JS</router-link>

		<!-- Links -->
		<ul class="navbar-nav" v-if="$store.getters.isLoggedIn">
			<li class="nav-item">
				<router-link to="/event" class="nav-link">Events</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/todo" class="nav-link">Todos</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/login" class="nav-link">Logout</router-link>
			</li>
		</ul>
		
	</nav>
	
</template>

<script>

export default {
	name: "Navbar",
	methods: {
		logout() {
			this.$store.dispatch('logout')
		}
	}
}
	
</script>
