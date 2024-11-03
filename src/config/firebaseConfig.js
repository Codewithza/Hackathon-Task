// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqtNHhVzj95d-M9JwX0bTPRXx3Ehpc6hg",
  authDomain: "social-media-app-492be.firebaseapp.com",
  projectId: "social-media-app-492be",
  storageBucket: "social-media-app-492be.appspot.com",
  messagingSenderId: "67667670900",
  appId: "1:67667670900:web:8d933df63364e7df4d5e21",
  measurementId: "G-LC9DLB15WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);
export { auth, db, storage };