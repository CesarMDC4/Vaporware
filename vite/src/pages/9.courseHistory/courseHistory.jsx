import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {getFirestore, doc} from 'firebase/firestore';


  
const firebaseConfig = {
    apiKey: "AIzaSyA-FXHwEXNgs-y5vbjBrC46w8qAB0QaniI",
    authDomain: "vaporware-4b2bc.firebaseapp.com",
    projectId: "vaporware-4b2bc",
    storageBucket: "vaporware-4b2bc.appspot.com",
    messagingSenderId: "861851951828",
    appId: "1:861851951828:web:a5a4161c73b82312ca5141",
    measurementId: "G-6XH0KDCD6J"
};
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

const User =doc(db, 'User/Cesar');

function writeUser(){
    const userData = {
        fName: 'Cesar',
        lName: 'Martin Del Campo',
        email: 'Cesar@csus.edu'

    };
    setDoc(User, userData);
}



  