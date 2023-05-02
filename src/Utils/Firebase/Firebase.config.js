// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLl-VtcOz1jaiWq_AFXxnoyQCOXGPJPU",
  authDomain: "larosa-resturant.firebaseapp.com",
  projectId: "larosa-resturant",
  storageBucket: "larosa-resturant.appspot.com",
  messagingSenderId: "1065467346527",
  appId: "1:1065467346527:web:7566b572a0410ef863a5ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;