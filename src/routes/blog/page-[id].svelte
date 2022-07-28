<script context="module">
	import { supabase } from '../../lib/supabaseClient';

	export async function load({ params }) {
		const getPost = async () => {
			const { data: blog, error } = await supabase.from('blog').select('*').eq('id', params.id);
			if (error) throw error;
			if (blog.length === 0) throw 'Blog post not found';
			return blog[0];
		};
		return {
			props: {
				post: await getPost()
			}
		};
	}
</script>

<script>
	import BlogPage from '../../components/blog/BlogPage.svelte';
	export let post = {};
</script>

<BlogPage {post} />
