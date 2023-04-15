import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQ5W0OuyoeB7Eruogy6FRZRzBOWkMzCfY",
  authDomain: "text-chat-tutorial.firebaseapp.com",
  projectId: "text-chat-tutorial",
  storageBucket: "text-chat-tutorial.appspot.com",
  messagingSenderId: "74501275488",
  appId: "1:74501275488:web:f4fdd79a06c45a62c6a805",
  measurementId: "G-67625HEWY9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();