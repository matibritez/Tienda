import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaQbHRHcC0QCMbuiEg_mm00Mz0QezkarU",
  authDomain: "tienda-celulares.firebaseapp.com",
  projectId: "tienda-celulares",
  storageBucket: "tienda-celulares.appspot.com",
  messagingSenderId: "756315018825",
  appId: "1:756315018825:web:e008273f237eac5ea31198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}

