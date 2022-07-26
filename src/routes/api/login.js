const authURL = 'https://www.linkedin.com/oauth/v2/authorization';
const clientId = import.meta.env.VITE_CLIENT_ID;
const respType = 'code';
const redirectURI = 'http://localhost:3000/api/callback';
const scope = 'r_liteprofile%20r_emailaddress';
const state = 'random_string';

export async function get() {
	return {
		status: 302,
		headers: {
			location: `${authURL}?response_type=${respType}&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}&scope=${scope}`
		}
	};
}
