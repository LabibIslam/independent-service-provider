// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxR0ch3h9AY4cYyjUW_IgquQM1pcskdjM",
    authDomain: "uno-photography.firebaseapp.com",
    projectId: "uno-photography",
    storageBucket: "uno-photography.appspot.com",
    messagingSenderId: "108066324585",
    appId: "1:108066324585:web:3d02bdd8d3c394fa45a2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;