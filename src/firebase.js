// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore();

export default db;
