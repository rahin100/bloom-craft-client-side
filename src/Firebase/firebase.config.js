// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwEwVsOEcbjI2FT5mkG7JJjWXVwHytmc",
  authDomain: "gardening-react-project.firebaseapp.com",
  projectId: "gardening-react-project",
  storageBucket: "gardening-react-project.appspot.com",
  messagingSenderId: "167802831666",
  appId: "1:167802831666:web:c93ac1d397626dab8d4d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app