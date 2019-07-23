<template>

	<div class="image">

		<h1>Upload File</h1>
		<div class="row">

			<div class="col-md-6">

				<div class="form-group custom-file">
					<input type="file" class="custom-file-input" id="customFile" multiple @change="uploadFile" />
					<label class="custom-file-label" for="customFile">select an image</label>
				</div>

			</div>
			
		</div>

		<hr>
		<div v-if="images">

			<div class="row">

				<div class="col-md-4" v-for="(image, index) in images" :key="image">

					<img :src="image" class="img-fluid img-thumbnail rounded" alt="image" />
					<br><br>
					<button class="btn btn-danger mb-2" @click="removeFile(index)">X</button>

				</div>

			</div>

		</div>

	</div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
	name: 'UploadImage',
	methods: { 
		uploadFile(e) { 
			var files = e.target.files || e.dataTransfer.files
			// console.log(files)
			this.$store.dispatch('uploadFile', files)
		}, 
		removeFile(index) {
			this.$store.dispatch('removeFile', index)
		}
	},
	computed: mapGetters([
		'images'
	])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
