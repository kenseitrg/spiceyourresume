<script>
	import profile_img from '../../static/profile-help.webp';
	import cv_img from '../../static/resume-writing.webp';
</script>

<div class="container col-xxl-10 px-4 py-5">
	<h1 class="display-5 fw-bold lh-1 text-center">Our Products</h1>
	<div class="row row-cols-1 row-cols-md-2 my-3">
		<div class="col">
			<div class="card rounded-3 shadow-sm">
				<img src={cv_img} alt="resume writing" class="card-img-top" height="500" />
				<h4 class="card-title">Resume Writing</h4>
				<p class="card-text lead">1 hr - ₹599</p>
			</div>
		</div>
		<div class="col">
			<div class="card rounded-3 shadow-sm">
				<img src={profile_img} alt="profile help" class="card-img-top" height="500" />
				<h4 class="card-title">Resume Writing + LinkedIn Profile Revamp</h4>
				<p class="card-text lead">1 hr - ₹1,199</p>
			</div>
		</div>
	</div>
</div>
