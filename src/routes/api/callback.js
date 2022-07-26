import { signInWithCustomToken, getAdditionalUserInfo } from 'firebase/auth';
import { createFirebaseToken } from '../../lib/fbauth';
import { auth } from '../../lib/fbapp';

const tokenURL = 'https://www.linkedin.com/oauth/v2/accessToken';
const redirectURI = 'http://localhost:3000/api/callback';
const clientId = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;
const userURL = 'https://api.linkedin.com/v2/me';
const emailURL =
	'https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
	const code = event.url.searchParams.get('code');
	const response = await getAccessToken(code);
	if (!response) {
		return {
			headers: { Location: '/' },
			status: 302
		};
	}
	const accessToken = response.access_token;
	const user = await getUser(accessToken);
	const picture = await getUserPicture(accessToken);
	const email = await getEmailLinkedin(accessToken);
	event.locals.user = user;
	event.locals.user.user.email = email;
	event.locals.picture = picture;
	const fbtoken = await createFirebaseToken(event.locals.user.user.id);
	event.locals.user.fbtoken = fbtoken;
	const fbuser = await signInWithCustomToken(auth, fbtoken);
	event.locals.user.fbuser = fbuser;
	const userInfo = getAdditionalUserInfo(fbuser);
	if (userInfo?.isNewUser) {
		return {
			status: 302,
			headers: {
				location: '/onboarding'
			}
		};
	}

	return {
		status: 302,
		headers: {
			location: '/profile'
		}
	};
}

async function getAccessToken(code) {
	const url = `${tokenURL}?grant_type=authorization_code&code=${code}&redirect_uri=${redirectURI}&client_id=${clientId}&client_secret=${secret}`;
	const request = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});
	const response = await request.json();
	if (response.error) {
		return null;
	}
	return response;
}

async function getUser(accessToken) {
	const request = await fetch(`${userURL}`, {
		headers: { Authorization: `Bearer ${accessToken}` }
	});
	const response = await request.json();
	if (response.id) {
		return { user: { ...response } };
	}
	return { user: false };
}

async function getUserPicture(accessToken) {
	const request = await fetch(
		`${userURL}?projection=(id,profilePicture(displayImage~:playableStreams))`,
		{
			headers: { Authorization: `Bearer ${accessToken}` }
		}
	);
	const response = await request.json();
	if (response.id) {
		return {
			picture: response.profilePicture['displayImage~'].elements[0].identifiers[0].identifier
		};
	}
	return { picture: false };
}

async function getEmailLinkedin(access_token) {
	const request = await fetch(emailURL, {
		headers: { Authorization: `Bearer ${access_token}` }
	});
	const response = await request.json();
	return response.elements[0]['handle~'].emailAddress;
}
