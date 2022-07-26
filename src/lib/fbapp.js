import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

if (!getApps().length) {
	initializeApp({
		apiKey: 'AIzaSyBOd33dlV7Tszit2BkZ6URWQVMzPKKZ8dQ',
		authDomain: 'spiceyourresume-b9f3d.firebaseapp.com',
		projectId: 'spiceyourresume-b9f3d',
		storageBucket: 'spiceyourresume-b9f3d.appspot.com',
		messagingSenderId: '2241132960',
		appId: '1:2241132960:web:84b2c9102d3d02d2310cc5'
	});
}

export const auth = getAuth();
setPersistence(auth, browserSessionPersistence);

export const db = getFirestore();
export const storage = getStorage();
