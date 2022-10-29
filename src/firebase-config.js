import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAK27kjwZ7d4GaKZrSBEreIJqmg3lEcRQA",
  authDomain: "authen-46704.firebaseapp.com",
  projectId: "authen-46704",
  storageBucket: "authen-46704.appspot.com",
  messagingSenderId: "1058583195632",
  appId: "1:1058583195632:web:bc560b7ab7bb97217e7735",
  measurementId: "G-RG99XJCPFK"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);