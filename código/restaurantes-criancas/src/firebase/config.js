// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO9Ky7YQ56s3BjaaZB8FUpK1hs8xlXxU8",
  authDomain: "restaurantescriancas.firebaseapp.com",
  projectId: "restaurantescriancas",
  storageBucket: "restaurantescriancas.appspot.com",
  messagingSenderId: "541760871002",
  appId: "1:541760871002:web:aa2dfc205c16dae1f51663",
  measurementId: "G-6SFYW47SCY",
};

// Initialize Firebase and firestore(db)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
