import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmwj3fKuxm_aRAQ6wWmpn1AD29Af5nH9w",
  authDomain: "task-382ef.firebaseapp.com",
  projectId: "task-382ef",
  storageBucket: "task-382ef.appspot.com",
  messagingSenderId: "720860013065",
  appId: "1:720860013065:web:83e41b85ae0e26c3290ed8"
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app)

//npm i react-firebase-hooks firebase