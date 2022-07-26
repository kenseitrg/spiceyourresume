<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ stuff }) {
		return {
			props: {
				user: stuff.user || false,
				picture: stuff.picture || false
			}
		};
	}
</script>

<script>
	import { auth, db } from '$lib/fbapp';
	import { doc, getDoc } from 'firebase/firestore';
	import { signInWithCustomToken } from 'firebase/auth';

	export let user;
	export let picture;
	const getUserInfo = async () => {
		const fbuser = await signInWithCustomToken(auth, user.fbtoken);
		if (fbuser.user) {
			const usrInfo = await getDoc(doc(db, 'Users', fbuser.user.uid));
			return usrInfo.data();
		} else {
			return null;
		}
	};
</script>

{#await getUserInfo() then doc}
	<div class="container py-5 h-100">
		<div class="card row">
			<div class="card-body">
				<div class="mt-3 mb-4 text-center">
					<img
						src={picture.picture}
						class="rounded-circle img-fluid"
						style="width: 100px;"
						alt="avatar"
					/>
				</div>
				<h4 class="mb-3 text-center">
					Welcome, {doc.first_name}
					{doc.last_name}
				</h4>
				<p class="lead mb-5 text-center">{doc.about}</p>
				<table class="table">
					<tbody>
						<tr>
							<th scope="row">University</th>
							<td>{doc.university}</td>
						</tr>
						<tr>
							<th scope="row">Graduation Year</th>
							<td>{doc.year}</td>
						</tr>
						<tr>
							<th scope="row">Current position</th>
							<td>{doc.position}</td>
						</tr>
						<tr>
							<th scope="row">Company</th>
							<td>{doc.company}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="row text-center mb-3">
				<div class="col">
					<a href="/onboarding" class="btn btn-success">Edit profile</a>
				</div>
				<div class="col">
					<a href="/api/logout" class="btn btn-light">Sign Out</a>
				</div>
			</div>
		</div>
	</div>
{:catch e}
	<p>{JSON.stringify(e)}</p>
{/await}
