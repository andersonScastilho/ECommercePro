import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'

// Pages
import HomePage from './page/home/home.page'
import LoginPage from './page/login/login.page'
import SignUpPage from './page/sign-up/sign-up.page'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user
    if (isSigninOut) {
      return logoutUser()
    }
    const isSignIn = !isAuthenticated && user
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
  })
  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
