<div class="content">
	<!-- Nav pills -->
	<ul class="nav nav-pills" role="tablist">
		<li class="nav-item">
			<a class="nav-link active" data-toggle="pill" href="#login">Login</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" data-toggle="pill" href="#regis">Register</a>
		</li>
	</ul>

	<!-- Tab panes -->
	<div class="tab-content">
		<div id="login" class="container tab-pane active">
			<form>
				<div class="form-group">
					<label for="exampleFormControlInput1">Email address</label>
					<input
						type="email"
						class="form-control is-valid"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>We'll never share your email with anyone else.</small
					>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input
						type="password"
						class="form-control is-invalid"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>Password incorrect.</small
					>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
		<div id="regis" class="container tab-pane fade">
			<form>
				<div class="form-group">
					<label for="InputName">Full Name</label>
					<input
						type="text"
						class="form-control is-valid"
						id="InputName"
						placeholder="Full Name"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>We'll never share your email with anyone else.</small
					>
				</div>
				<div class="form-group">
					<label for="InputUsername">Username</label>
					<input
						type="text"
						class="form-control is-valid"
						id="InputUsername"
						placeholder="Username"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>We'll never share your email with anyone else.</small
					>
				</div>
				<div class="form-group">
					<label for="exampleFormControlInput2">Email address</label>
					<input
						type="email"
						class="form-control is-valid"
						id="exampleFormControlInput2"
						placeholder="name@example.com"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>We'll never share your email with anyone else.</small
					>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword2">Password</label>
					<input
						type="password"
						class="form-control is-invalid"
						id="exampleInputPassword2"
						placeholder="Password"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>Password incorrect.</small
					>
				</div>
				<div class="form-group">
					<label for="exampleInputPasswordVer">Verify Password</label>
					<input
						type="password"
						class="form-control is-invalid"
						id="exampleInputPasswordVer"
						placeholder="Password"
					/>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	</div>
</div>

<style>
	.content {
		width: 450px;
		height: auto;
		margin: 0 auto;
		padding: 30px;
	}
	.nav-pills {
		width: 450px;
	}
	.nav-item {
		width: 50%;
	}
	.nav-pills .nav-link {
		font-weight: bold;
		padding-top: 13px;
		text-align: center;
		background: #343436;
		color: #fff;
		border-radius: 30px;
		height: 100px;
	}
	.nav-pills .nav-link.active {
		background: #fff;
		color: #000;
	}
	.tab-content {
		position: absolute;
		width: 450px;
		height: auto;
		margin-top: -50px;
		background: #fff;
		color: #000;
		border-radius: 30px;
		z-index: 1000;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
		padding: 30px;
		margin-bottom: 50px;
	}
	.tab-content button {
		border-radius: 15px;
		width: 100px;
		margin: 0 auto;
		float: right;
	}
</style>
