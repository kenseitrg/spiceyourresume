<script>
	import { supabase } from '$lib/supabaseClient.js';
	export let id = -1;

	const getPost = async () => {
		const { data: blog, error } = await supabase.from('blog').select('*').eq('id', id);
		if (error) throw error;
		if (blog.length === 0) throw 'Blog post not found';
		return blog[0];
	};
</script>

<div class="container">
	<div class="row my-3">
		<div class="col-xxl-10">
			{#await getPost() then post}
				<h1 class="mb-0">{post.title}</h1>
				<div class="mb-2 text-muted">{new Date(post.created_at).toDateString()}</div>
				<p class="mb-2">{post.full_text}</p>
				<div class="d-flex justify-content-center">
					<img src={post.img_url} alt="main" />
				</div>
			{:catch error}
				<p>{JSON.stringify(error)}</p>
			{/await}
		</div>
	</div>
</div>
