// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8uY8-EasAATjnWEEt7AmoWfMAqY4QG1U",
  authDomain: "paj-automation-hub.firebaseapp.com",
  projectId: "paj-automation-hub",
  storageBucket: "paj-automation-hub.firebasestorage.app",
  messagingSenderId: "501894301810",
  appId: "1:501894301810:web:d1e5f7638f6596471e5aeb",
  measurementId: "G-SLZYBQRZLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
