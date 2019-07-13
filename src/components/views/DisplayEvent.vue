<template>

	<div class="display">

		<p>I am {{ $store.getters.name }}</p>
		<p>Button pressed: {{ $store.getters.counter }} times</p>

	</div>

</template>

<script>

export default {
	name: 'DisplayEvent',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.display {
	position: relative;
	top: 20px;
}

</style>
