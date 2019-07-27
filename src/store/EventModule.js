const EventModule = {
	state: {
		name: '',
		count: 0,
		images: []
	},
	mutations: {
		CHANGE(state, name) {
			state.name = name
		},
		INCREMENT(state, step) {
			state.count += step
		},
		UPLOAD_FILE(state, file) {
			var reader = new FileReader()
			reader.onload = (e) => {
				state.images.push(e.target.result)
			}
			reader.readAsDataURL(file)
		},
		REMOVE_FILE(state, index) {
			state.images.splice(index, 1)
		}
	},
	actions: {
		change(context, name) {
			context.commit('CHANGE', name)
		},
		increment(context, step) {
			context.commit('INCREMENT', step)
		},
		uploadFile(context, files) {
			if (!files.length) 
			{
				return;
			} 
			else 
			{
				for(var i = 0; i < files.length; i++) 
				{ 
					let file = files[i]
					context.commit('UPLOAD_FILE', file)
				}
			}
		},
		removeFile(context, index) {
			context.commit('REMOVE_FILE', index)
		}
	},
	getters: {
		name(state) {
			return state.name
		},
		counter(state) {
			return state.count
		},
		images(state) {
			return state.images
		}
	}
}

export default EventModule
