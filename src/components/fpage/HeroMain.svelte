<script>
	import { handleLogin } from '$lib/supabaseAuth';
	import background from '../../static/background1.png';
	const loginRedirect = async () => {
		try {
			handleLogin();
		} catch {
			alert('Login redirect failed');
		}
	};
</script>

<div class="container col-xxl-10 px-4 py-5">
	<div class="row flex-lg-row-reverse align-items-center g-5">
		<div class="col-12 col-sm-10 col-lg-6">
			<img
				src={background}
				class="d-block mx-lg-auto img-fluid"
				alt="Bootstrap Themes"
				loading="lazy"
				width="700"
				height="500"
			/>
		</div>
		<div class="col-lg-6">
			<h1 class="display-5 fw-bold lh-1">Welcome to Spice Your Resume</h1>
			<h1 class="display-7 lh-1 mb-3">Let us take your resume to the next level!</h1>
			<p class="lead">
				Since 2000, our talented team works hard everyday to provide the best services for our
				clients. We customize our offerings based on specific needs, so get in touch today to
				receive an initial quote.
			</p>
			<div class="d-grid gap-2 d-md-flex justify-content-md-start">
				<button class="btn btn-success btn-lg px-4 me-md-2" on:click|preventDefault={loginRedirect}
					>Get Started</button
				>
			</div>
		</div>
	</div>
</div>
