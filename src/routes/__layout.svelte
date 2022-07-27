<script>
	import '../app.scss';
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../app.scss';
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	onMount(async () => {
		(await import('../../node_modules/bootstrap/dist/js/bootstrap')).default;
	});

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((state, session) => {
		if (state == 'SIGNED_IN') {
			user.set(session.user);
		} else {
			user.set(false);
			if (browser) {
				goto('/', { replaceState: true });
				window.location.replace(window.origin);
			}
		}
	});
</script>

<navbar />
<slot />
