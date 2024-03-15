import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfKQNpqMVw5o3benOSKbC9zfSlaz-thoE",
  authDomain: "coletacerta-707cc.firebaseapp.com",
  projectId: "coletacerta-707cc",
  storageBucket: "coletacerta-707cc.appspot.com",
  messagingSenderId: "5030532915",
  appId: "1:5030532915:web:ffe570be72bb0a749d5046",
  measurementId: "G-FE3TML5PCE"
};

// Initialize Firebase
const databaseApp = initializeApp(firebaseConfig);

export default databaseApp;