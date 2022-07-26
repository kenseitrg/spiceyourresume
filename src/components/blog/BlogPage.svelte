<script>
	import { getDoc, doc } from 'firebase/firestore';
	import { ref, getDownloadURL } from 'firebase/storage';
	import { db, storage } from '../../lib/fbapp';
	export let id = '';
</script>

<div class="container">
	<div class="row my-3">
		<div class="col-xxl-10">
			{#await getDoc(doc(db, 'Blog', id)) then doc}
				{#if doc.data()}
					<h1 class="mb-0">{doc.data().title}</h1>
					<div class="mb-2 text-muted">{doc.data().date.toDate().toDateString()}</div>
					<p class="mb-2">{doc.data().full_text}</p>
					{#await getDownloadURL(ref(storage, doc.data().blog_img)) then url}
						<div class="d-flex justify-content-center">
							<img src={url} alt="main" />
						</div>
					{/await}
				{/if}
			{/await}
		</div>
	</div>
</div>
