<script context="module">
	import { supabase } from '../lib/supabaseClient';
	export async function load() {
		const getPosts = async () => {
			const { data: blog, error } = await supabase.from('blog').select('*');
			if (error) throw error;
			return blog;
		};
		return {
			props: {
				blog: await getPosts()
			}
		};
	}
</script>

<script>
	import BlogMain from '../components/blog/BlogMain.svelte';
	export let blog;
</script>

<BlogMain {blog} />
