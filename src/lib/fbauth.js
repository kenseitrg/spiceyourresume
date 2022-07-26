import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import * as credential from '../lib/service-account.json';

const app = initializeApp({ credential: cert(credential) });

export async function createFirebaseToken(uuid) {
	try {
		return await getAuth(app).createCustomToken(uuid);
	} catch (e) {
		console.log(e);
		return null;
	}
}
