// /frontend/app/test/get-token.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// ✅ Fixed Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBCq-KrFAzviAI3AAnkAX7N-SQMPattoxg",
  authDomain: "profitpath-fa9b6.firebaseapp.com",
  projectId: "profitpath-fa9b6",
  storageBucket: "profitpath-fa9b6.appspot.com",
  messagingSenderId: "486507702021",
  appId: "1:486507702021:web:ba81e1db9a4251e3d8796c",
  measurementId: "G-ZYZCRGH71K"
};

// 👤 Replace with a real Firebase user you've created
const email = "your-test-user@example.com";
const password = "yourPassword123";

async function getToken() {
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    console.log("✅ Firebase ID Token:\n");
    console.log(token);
  } catch (error) {
    console.error("❌ Error fetching token:", error.message);
  }
}

getToken();
