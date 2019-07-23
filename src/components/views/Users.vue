<template>

	<div class="container">

		<div class="user-form">

			<h1>Create User</h1>

			<form>

				<div class="row">

					<div class="col-md-6">

						<div class="form-group">
							<label for="name">Name:</label>
							<input type="text" class="form-control" required="" />
						</div>
						
					</div>

					<div class="col-md-6">

						<div class="form-group">
							<label for="username">Username:</label>
							<input type="text" class="form-control" required="" />
						</div>
						
					</div>
					
				</div>

				<div class="row">

					<div class="col-md-6">

						<div class="form-group">
							<label for="email">Email:</label>
							<input type="email" class="form-control" required="" />
						</div>
						
					</div>

					<div class="col-md-6">

						<div class="form-group">
							<label for="password">Password:</label>
							<input type="password" class="form-control" required="" />
						</div>
						
					</div>
					
				</div>

				<button type="submit" class="btn btn-info">Save</button>

			</form>

		</div>

		<div class="user-table">
		
			<h1>Users</h1>

			<table class="table table-striped">

				<thead>

					<tr>
						<th>ID</th>
						<th>name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Action</th>
					</tr>

				</thead>

				<tbody>

					<tr>
						<td>1</td>
						<td>Test</td>
						<td>testusername</td>
						<td>test@mail.com</td>
						<td>
							<button class="btn btn-sm btn-success mb-2"><i class="fa fa-edit"></i></button>
							<button class="btn btn-sm btn-danger mb-2"><i class="fa fa-trash"></i></button>
						</td>
					</tr>

				</tbody>

			</table>

		</div>

	</div>

</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user-form {
	position: relative;
	top: 30px;
}

.user-table {
	position: relative;
	top: 50px;
}

</style>
