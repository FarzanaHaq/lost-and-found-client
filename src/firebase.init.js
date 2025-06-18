import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_DKeYcC9G_eb2PQw8jysPn4iqM3JRXfo",
  authDomain: "simple-firebase-aa7ab.firebaseapp.com",
  projectId: "simple-firebase-aa7ab",
  storageBucket: "simple-firebase-aa7ab.firebasestorage.app",
  messagingSenderId: "239404857757",
  appId: "1:239404857757:web:4ac3900140eb626176d774",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
