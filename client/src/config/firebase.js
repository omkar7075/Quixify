// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjug-y562O0OyVtrggeIwBLzaKkw7kwyc",
  authDomain: "quxify-515e1.firebaseapp.com",
  projectId: "quxify-515e1",
  storageBucket: "quxify-515e1.appspot.com",
  messagingSenderId: "783825713937",
  appId: "1:783825713937:web:9ea514496aab9f6a6aaab0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
