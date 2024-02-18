import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0TDkYzyO8-HZqv6sYYhzmNwyu6A3HP9E",
  authDomain: "coderhouse-entregafinal-pk.firebaseapp.com",
  projectId: "coderhouse-entregafinal-pk",
  storageBucket: "coderhouse-entregafinal-pk.appspot.com",
  messagingSenderId: "1079982532631",
  appId: "1:1079982532631:web:4b7422d6fc15b58f631452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
