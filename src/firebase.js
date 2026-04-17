import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyEnAFLki0-hVvZkUvwfXjmMpxfwIk4Oc",
  authDomain: "marianaprovabancodados.firebaseapp.com",
  projectId: "marianaprovabancodados",
  storageBucket: "marianaprovabancodados.appspot.com",
  messagingSenderId: "716005295110",
  appId: "1:716005295110:web:7f5b499d5a4c1f1f2eef87"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);