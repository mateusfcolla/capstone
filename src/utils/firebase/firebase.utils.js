import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBlk4Ruht5dgXjx9CS8TAnLYEhSh7UAghI",
    authDomain: "capstone-clothing-db-cdede.firebaseapp.com",
    projectId: "capstone-clothing-db-cdede",
    storageBucket: "capstone-clothing-db-cdede.appspot.com",
    messagingSenderId: "831584811791",
    appId: "1:831584811791:web:3a0481d81bf4f1e81f5c7a"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);