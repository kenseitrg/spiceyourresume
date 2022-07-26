<script>
	import { page } from '$app/stores';
	import BlogPage from '../../components/blog/BlogPage.svelte';
</script>

<BlogPage id={$page.params.id} />
