<script>
	export let blog = [];
</script>

<div class="container">
	<div class="row my-3">
		<div class="col-xxl-10">
			{#each blog as bpost}
				<div
					class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
				>
					<div class="col p-4 d-flex flex-column position-static">
						<h3 class="mb-0">Title</h3>
						<div class="mb-1 text-muted">{new Date(bpost.created_at).toDateString()}</div>
						<p class="card-text mb-auto">{bpost.short_text}</p>
						<a href="blog/page-{bpost.id}" class="stretched-link">Continue reading</a>
					</div>
					<div class="col-auto d-none d-lg-block">
						<div class="crop">
							<img src={bpost.img_url} alt="blog thumbnail" height="250" width="250" />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.crop {
		object-fit: cover;
		object-position: center;
		height: 250px;
		width: 250px;
	}
</style>
