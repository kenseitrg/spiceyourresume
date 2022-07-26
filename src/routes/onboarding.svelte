<script>
	import { goto } from '$app/navigation';
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';

	let email = $user ? $user.user_metadata.email : '';
	let university = '';
	let year = 2022;
	let position = '';
	let company = '';
	let about = '';

	const submit = async () => {
		const updates = {
			id: $user.id,
			updated_at: new Date(),
			email: email,
			full_name: $user.user_metadata.full_name,
			avatar_url: $user.user_metadata.avatar_url,
			university: university,
			cur_position: position,
			grad_year: year,
			about: about,
			company: company
		};
		const { error } = await supabase.from('profiles').upsert(updates, {
			returning: 'minimal' // Don't return the value after inserting
		});
		if (error) alert(error.message);
		else goto('/profile');
	};
</script>

{#if $user}
	<div class="container py-5 h-100">
		<div class="card">
			<div class="card-body">
				<div class="mt-3 mb-4 text-center">
					<img
						src={$user.user_metadata.avatar_url}
						class="rounded-circle img-fluid"
						style="width: 100px;"
						alt="avatar"
					/>
				</div>
				<h4 class="mb-5 text-center">
					Welcome, {$user.user_metadata.full_name}
				</h4>
				<h5 class="mb-2">Please let us know about yourself:</h5>
				<form on:submit|preventDefault={submit}>
					<div class="row mb-1">
						<div class="form-group col">
							<label for="email">Email address</label>
							<input type="email" class="form-control" id="email" bind:value={email} required />
						</div>
					</div>
					<div class="row mb-1">
						<div class="form-group col">
							<label for="university">University</label>
							<input
								type="text"
								class="form-control"
								id="university"
								bind:value={university}
								placeholder="MIT"
								required
							/>
						</div>
						<div class="form-group col">
							<label for="year">Graduation year</label>
							<input type="number" class="form-control" id="year" bind:value={year} required />
						</div>
					</div>
					<div class="row mb-1">
						<div class="form-group col">
							<label for="position">Current position</label>
							<input
								type="text"
								class="form-control"
								id="position"
								bind:value={position}
								placeholder="CEO"
							/>
						</div>
						<div class="form-group col">
							<label for="company">Company</label>
							<input
								type="text"
								class="form-control"
								id="company"
								bind:value={company}
								placeholder="Acme Ltd."
							/>
						</div>
					</div>
					<div class="row mb-1">
						<div class="form-group col">
							<label for="about">About</label>
							<textarea
								class="form-control"
								id="about"
								rows="3"
								maxlength="255"
								placeholder="Please briefly descrive your professional experience"
								bind:value={about}
							/>
						</div>
					</div>
					<button type="submit" class="btn btn-success">Submit</button>
				</form>
			</div>
		</div>
	</div>
{:else}
	<p>No user</p>
{/if}
