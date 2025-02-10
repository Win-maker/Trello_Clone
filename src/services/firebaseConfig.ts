
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkOnnUqNle2l8RYz2kvFmjigfNxp7hw6k",
  authDomain: "trello-clone-f02a8.firebaseapp.com",
  projectId: "trello-clone-f02a8",
  storageBucket: "trello-clone-f02a8.firebasestorage.app",
  messagingSenderId: "60101830840",
  appId: "1:60101830840:web:fc939d2ae63d309bbaac4d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);