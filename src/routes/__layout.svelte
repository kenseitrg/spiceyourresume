<script context="module">
	import Navbar from '../components/Navbar.svelte';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ session }) {
		return {
			stuff: {
				user: session.user || false,
				picture: session.picture || false
			},
			props: {
				user: session.user || false,
				picture: session.picture || false
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import '../app.scss';
	onMount(async () => {
		(await import('../../node_modules/bootstrap/dist/js/bootstrap')).default;
	});
	export let user;
	export let picture;
</script>

<Navbar {user} {picture} />
<slot />
