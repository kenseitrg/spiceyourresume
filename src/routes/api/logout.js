import { auth } from '../../lib/fbapp';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(req) {
	req.locals.user = null;
	req.locals.picture = null;
	await auth.signOut();
	return {
		status: 302,
		headers: {
			Location: '/'
		}
	};
}
