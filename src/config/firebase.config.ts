import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpi4m7e1zGi2ibW8g5pUZOVvL9I5WFGcY",
  authDomain: "ecommercepro-fa4e4.firebaseapp.com",
  projectId: "ecommercepro-fa4e4",
  storageBucket: "ecommercepro-fa4e4.appspot.com",
  messagingSenderId: "1005292232988",
  appId: "1:1005292232988:web:577d5880a836c678a21ad9"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
