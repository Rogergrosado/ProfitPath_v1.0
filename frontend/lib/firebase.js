// /frontend/lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCq-KrFAzviAI3AAnkAX7N-SQMPattoxg",
  authDomain: "profitpath-fa9b6.firebaseapp.com",
  projectId: "profitpath-fa9b6",
  storageBucket: "profitpath-fa9b6.appspot.com",
  messagingSenderId: "486507702021",
  appId: "1:486507702021:web:ba81e1db9a4251e3d8796c",
  measurementId: "G-ZYZCRGH71K", // optional, used for analytics only
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };

