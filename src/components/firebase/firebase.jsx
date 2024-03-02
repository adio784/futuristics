// Import the functions you need from the SDKs you need
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApKFsMJ3lhx589j0BcUQrARTgnSgykPiM",
  authDomain: "futuristics-aea3c.firebaseapp.com",
  projectId: "futuristics-aea3c",
  storageBucket: "futuristics-aea3c.appspot.com",
  messagingSenderId: "959088036170",
  appId: "1:959088036170:web:faff3518ac2309a30999b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db, onAuthStateChanged }