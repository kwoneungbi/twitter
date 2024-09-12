import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr2esCVsoEnC5C4xou99A-GH0aIr9Ydfg",
  authDomain: "twiter-468e1.firebaseapp.com",
  projectId: "twiter-468e1",
  storageBucket: "twiter-468e1.appspot.com",
  messagingSenderId: "617912943168",
  appId: "1:617912943168:web:57d3490a0379d5f6db15a5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
