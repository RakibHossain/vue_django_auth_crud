<template>

	<div class="add-more">

		<form @submit="sumbitForm">

			<h1>Dynamic room forms</h1>
			<hr>

			<div class="row">
				<div class="col-xs-2">
					<button type="button" @click="addNewroom" class="btn btn-success mb-2">
						Add +
					</button>
				</div>
				<div class="col-xs-10">Would you like add more rooms ?</div>
			</div>

			<table class="table table-striped">

				<thead>

					<tr>
						<th>#</th>
						<th>Price</th>
						<th>Room</th>
						<th>Action</th>
					</tr>

				</thead>

				<tbody>

					<tr v-for="(room, key, index) in rooms" :key="room">
						<td>{{ ++key }}</td>
						<td>
							<input v-model="room.price" type="number" name="rooms[][price]" class="form-control" placeholder="Price">
						</td>
						<td>
							<input v-model="room.room" type="text" name="rooms[][room]" class="form-control" placeholder="Room">
						</td>
						<td>
							<button type="button" @click="removeroom(index)" class="btn btn-danger mb-2">Rem -</button>
						</td>
					</tr>

				</tbody>

			</table>

			<div class="row">
				<div class="col-xs-2">
					<button type="submit" class="btn btn-primary mb-2">Submit</button>
				</div>
			</div>

		</form>

		<hr>
		<pre>{{ $data }}</pre>

	</div>

</template>

<script>

export default {
	name: 'AddEvent',
	data() {
		return {
			room: {
				price: '',
				room: ''
			},
			rooms: [],
		}
	},
	methods: {
		addNewroom() {
			this.rooms.push(this.room)
		},
		removeroom(index) {
			this.rooms.splice(index, 1)
		},
		sumbitForm(e) {
			e.preventDefault()
			console.log(this.room)
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.add-more {
	position: relative;
	top: 20px;
}

</style>
