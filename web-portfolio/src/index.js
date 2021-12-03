import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbdvNnUM1ZBRLhU6VMHIW1fCcp36OfsdA",
  authDomain: "my-portfolio-1683b.firebaseapp.com",
  projectId: "my-portfolio-1683b",
  storageBucket: "my-portfolio-1683b.appspot.com",
  messagingSenderId: "937013253149",
  appId: "1:937013253149:web:a423c09e6bb33ddceae2f4",
  measurementId: "G-PFVW1Z8CNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
