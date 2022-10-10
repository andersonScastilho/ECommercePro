import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCmTGR-OnK2Dcq1U_xUwSUz-xPJUyyuDTo',
  authDomain: 'club-ecoomerce-2.firebaseapp.com',
  projectId: 'club-ecoomerce-2',
  storageBucket: 'club-ecoomerce-2.appspot.com',
  messagingSenderId: '638971033933',
  appId: '1:638971033933:web:72d8368e57e71e7c829f04'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
