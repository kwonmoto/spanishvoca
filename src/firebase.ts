/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	getRedirectResult,
	signInWithRedirect,
	onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAZBBoy-izvdCezPWVg1p8ll-PK7m-_1AE',
	authDomain: 'vocabulary-1206f.firebaseapp.com',
	projectId: 'vocabulary-1206f',
	storageBucket: 'vocabulary-1206f.appspot.com',
	messagingSenderId: '894929889295',
	appId: '1:894929889295:web:a7075047ef147885d21b7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

// Custom Hook
export function useAuth() {
	const [currentUser, setCurrentUser] = useState<any>();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}

export function googleSignUp() {
	signInWithPopup(auth, provider)
		.then(result => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			const docRef = doc(getFirestore(), 'Users', user.uid);
			if (docRef)
				setDoc(
					docRef,
					{
						email: user.email,
						lastLogin: serverTimestamp(),
					},
					{ merge: true },
				);
			else
				setDoc(
					docRef,
					{
						name: user.displayName,
						email: user.email,
						lastLogin: serverTimestamp(),
						registrationDate: serverTimestamp(),
					},
					{ merge: true },
				);
		})
		.catch(error => {
			const errorMessage = error.message;
			alert(errorMessage);
		});
}

export async function redirectGoogle() {
	getRedirectResult(auth)
		.then(result => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			const docRef = doc(getFirestore(), 'Users', user.uid);
			setDoc(
				docRef,
				{
					name: user.displayName,
					email: user.email,
					lastLogin: serverTimestamp(),
				},
				{ merge: true },
			);
		})
		.catch(error => {
			const errorMessage = error.message;
			alert(errorMessage);
		});
}

export const signGoogle = async () => {
	signInWithRedirect(auth, provider);
};

export default db;
