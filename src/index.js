import './sass/main.scss';

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, connectAuthEmulator, AuthErrorCodes, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxvfIxNosWedrYo8HUPF_MTrKKk60IfvE",
  authDomain: "icecream-bb2ee.firebaseapp.com",
  projectId: "icecream-bb2ee",
  storageBucket: "icecream-bb2ee.appspot.com",
  messagingSenderId: "502980917779",
  appId: "1:502980917779:web:6fb9cfe949a2c90e525de6",
  measurementId: "G-92MYT3D26V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);


const btnLogin = document.querySelector('#btnLogin'); 
const btnSignup = document.querySelector('#btnSignup'); 
const txtEmail = document.querySelector('#user-email');
const txtPassword = document.querySelector('#user-name');
const divLoginError = document.querySelector('.login-error'); 
const lblLoginErrorMessage = document.querySelector('.message-error');
const lblAuthState = document.querySelector('.auth-state');

// connectAuthEmulator(auth, 'http://localhost:1234/')


const loginEmailPassword = async (evt) => {
    evt.preventDefault();

    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        console.log('btnclick');
    }
    catch (error) {
        console.log(error);
        showLoginError(error);
    }
    
}

const showLoginError = (error) => {
    divLoginError.style.display = 'block'

    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblLoginErrorMessage.innerHTML = 'Wrong password. Try again'
    } else {
        lblLoginErrorMessage.innerHTML = `Error: ${error.message}`
    }
}

btnLogin.addEventListener('click', loginEmailPassword)

const createAccount = async(evt) => {
    evt.preventDefault();

    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        console.log('btnclick');
    }
    catch (error) {
        console.log(error);
        showLoginError(error);
    }
}


btnSignup.addEventListener('click', createAccount);

// Detect auth state
// const monitorAuthState = async () => {

//     onAuthStateChanged(auth, user => {
//     if (user) {
//         console.log(user);
//         showApp();
//         showLoginState(user);

//         hideLoginError();
//     } else {
//         showLoginForm();
//         lblAuthState.innerHTML = "You're not logged in.";
//     }
// }) 
// }

// monitorAuthState();


// const logout = async () => {
//     await signOut(auth)
// }

// btnLogout.addEventListener('click', logout);