<script>
	import { user } from '$lib/sessionStore';
	import { handleLogin } from '$lib/supabaseAuth';

	const loginRedirect = async () => {
		try {
			handleLogin();
		} catch {
			alert('Login redirect failed');
		}
	};
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">
			<img src="/Logo.webp" alt="logo" />
			Spice Your Resume
		</a>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="/">Build Your Resume</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/">Build Your Cover Letter</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/">Build Your Portfolio</a>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="/"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Career Growth Products
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="/">Career Preparation Sessions</a></li>
						<li><a class="dropdown-item" href="/">Career Webinars</a></li>
						<li><a class="dropdown-item" href="/">Linkedin Profile Rewamp</a></li>
					</ul>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="/"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Functional Training
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="/">Sales</a></li>
						<li><a class="dropdown-item" href="/">Digital Marketing</a></li>
						<li><a class="dropdown-item" href="/">Supply Chain and Operations</a></li>
						<li><a class="dropdown-item" href="/">Product Management</a></li>
						<li><a class="dropdown-item" href="/">Human Resources</a></li>
						<li><a class="dropdown-item" href="/">Data Science</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/blog">Blog</a>
				</li>
			</ul>
			<div class="d-flex">
				{#if $user}
					<div class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
						<div class="nav-item">
							<a href="/profile">
								<img
									src={$user.user_metadata.avatar_url}
									class="rounded-circle img-fluid"
									style="width: 50px;"
									alt="avatar"
								/>
							</a>
						</div>
					</div>
				{:else}
					<button class="btn btn-outline-success" on:click|preventDefault={loginRedirect}
						>Get Started</button
					>
				{/if}
			</div>
		</div>
	</div>
</nav>
