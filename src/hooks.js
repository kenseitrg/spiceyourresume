import cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	if ('user' in cookies) {
		event.locals.user = JSON.parse(cookies.user);
	} else {
		event.locals.user = null;
	}
	if ('picture' in cookies) {
		event.locals.picture = JSON.parse(cookies.picture);
	} else {
		event.locals.picture = null;
	}
	const response = await resolve(event);

	response.headers.append(
		'set-cookie',
		`user=${JSON.stringify(event.locals.user) || ''}; Path=/; HttpOnly`
	);
	response.headers.append(
		'set-cookie',
		`picture=${JSON.stringify(event.locals.picture) || ''}; Path=/; HttpOnly`
	);
	return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(event) {
	return {
		user: event.locals.user,
		picture: event.locals.picture
	};
}
