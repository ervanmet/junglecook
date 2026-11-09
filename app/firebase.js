import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADQD_LpjtW-Yw0832QFcyYw0TY9RaRJ4Q",
  authDomain: "notes-app-faa03.firebaseapp.com",
  projectId: "notes-app-faa03",
  storageBucket: "notes-app-faa03.firebasestorage.app",
  messagingSenderId: "643169281002",
  appId: "1:643169281002:web:a0a70fae9aec0971138893",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
