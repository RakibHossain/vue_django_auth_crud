<template>

	<div class="container">

		<div class="form-inline">
			<label for="name" class="mb-2 mr-sm-2">What's your name ? </label>
			<input type="text" @input="changed" v-model="name" class="form-control mb-2 mr-sm-2" placeholder="enter your name" />
			<button @click="pressed" class="btn btn-info mb-2">Increment Counter</button>
		</div>

		<DisplayEvent></DisplayEvent>

		<div class="toggle">
			<p v-if="seen">Message Can Be Seen !</p>
			<p><button class="btn btn-danger mb-2" v-on:click="seen = !seen">Toggle</button></p>
		</div>

		<AddEvent></AddEvent>

	</div>

</template>

<script>

import AddEvent from './AddEvent.vue'
import DisplayEvent from './DisplayEvent.vue'

export default {
	name: 'Events',
	components: {
		DisplayEvent,
		AddEvent
	},
	data() {
		return {
			name: '',
			seen: true
		}
	},
	methods: {
		changed(event) {
			this.$store.dispatch('change', event.target.value)
		},
		pressed() {
			this.$store.dispatch('increment', 1)
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-inline {
	position: relative;
	top: 20px;
}

.toggle {
	position: relative;
	top: 20px;
}

</style>
