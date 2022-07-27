<script>
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';
	import { handleLogout } from '$lib/supabaseAuth';
	import { browser } from '$app/env';

	const getUserInfo = async () => {
		const { data: profiles, error } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', $user.id);
		if (error) throw error;
		if (profiles?.length === 0) throw 'Current user not found';
		return profiles[0];
	};

	const logoutRedirect = async () => {
		try {
			await handleLogout();
		} catch (error) {
			alert(error.message);
		}
	};
</script>

{#await getUserInfo() then profile}
	<div class="container py-5 h-100">
		<div class="card row">
			<div class="card-body">
				<div class="mt-3 mb-4 text-center">
					<img
						src={$user.user_metadata.avatar_url}
						class="rounded-circle img-fluid"
						style="width: 100px;"
						alt="avatar"
					/>
				</div>
				<h4 class="mb-3 text-center">
					Welcome, {profile.full_name}
				</h4>
				<p class="lead mb-5 text-center">{profile.about}</p>
				<table class="table">
					<tbody>
						<tr>
							<th scope="row">University</th>
							<td>{profile.university}</td>
						</tr>
						<tr>
							<th scope="row">Graduation Year</th>
							<td>{profile.grad_year}</td>
						</tr>
						<tr>
							<th scope="row">Current position</th>
							<td>{profile.cur_position}</td>
						</tr>
						<tr>
							<th scope="row">Company</th>
							<td>{profile.company}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="row text-center mb-3">
				<div class="col">
					<a href="/onboarding" class="btn btn-success">Edit profile</a>
				</div>
				<div class="col">
					<button class="btn btn-light" on:click|preventDefault={logoutRedirect}>Sign Out</button>
				</div>
			</div>
		</div>
	</div>
{:catch e}
	<p>{JSON.stringify(e)}</p>
{/await}
