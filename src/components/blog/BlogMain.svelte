<script>
	import { collection, getDocs } from 'firebase/firestore';
	import { ref, getDownloadURL } from 'firebase/storage';
	import { db, storage } from '../../lib/fbapp';
</script>

<div class="container">
	<div class="row my-3">
		<div class="col-xxl-10">
			{#await getDocs(collection(db, 'Blog')) then docs}
				{#each docs.docs as doc}
					<div
						class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
					>
						<div class="col p-4 d-flex flex-column position-static">
							<h3 class="mb-0">{doc.data().title}</h3>
							<div class="mb-1 text-muted">{doc.data().date.toDate().toDateString()}</div>
							<p class="card-text mb-auto">{doc.data().short_text}</p>
							<a href="blog/page-{doc.id}" class="stretched-link">Continue reading</a>
						</div>
						<div class="col-auto d-none d-lg-block">
							{#await getDownloadURL(ref(storage, doc.data().blog_img)) then url}
								<div class="crop">
									<img src={url} alt="blog thumbnail" height="250" width="250" />
								</div>
							{/await}
						</div>
					</div>
				{/each}
			{:catch error}
				<p>error</p>
			{/await}
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
