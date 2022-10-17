import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA1YizIfi-rWMaoyw7QV1hCAjR3Q9aaaLA",
  authDomain: "shopbay-45d0e.firebaseapp.com",
  projectId: "shopbay-45d0e",
  storageBucket: "shopbay-45d0e.appspot.com",
  messagingSenderId: "1060243313501",
  appId: "1:1060243313501:web:a6d27efdd69e1b9f320eb4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
