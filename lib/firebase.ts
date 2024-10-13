import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAa1r-wzmH0ZsB19TC8Aikel3BvtaFTIuY",
  authDomain: "ticket-app-deb14.firebaseapp.com",
  projectId: "ticket-app-deb14",
  storageBucket: "ticket-app-deb14.appspot.com",
  messagingSenderId: "916054411544",
  appId: "1:916054411544:web:fb5186f4c7840f39d5f66d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)