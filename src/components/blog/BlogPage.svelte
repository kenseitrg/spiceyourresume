<script>
	export let post = {};
</script>

<div class="container">
	<div class="row my-3">
		<div class="col-xxl-10">
			<h1 class="mb-0">{post.title}</h1>
			<div class="mb-2 text-muted">{new Date(post.created_at).toDateString()}</div>
			<p class="mb-2">{post.full_text}</p>
			<div class="d-flex justify-content-center">
				<img src={post.img_url} alt="main" />
			</div>
		</div>
	</div>
</div>
