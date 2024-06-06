// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD7mDaDB2-jgpQRsBNMHTYUIu9xM41uDo",
  authDomain: "shopping-6cd5f.firebaseapp.com",
  projectId: "shopping-6cd5f",
  storageBucket: "shopping-6cd5f.appspot.com",
  messagingSenderId: "1032446361450",
  appId: "1:1032446361450:web:451096160eba11d7c32f13",
  measurementId: "G-FRCGXD3X0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
