import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/cart.component'
import LoadingComponent from './components/loading/loading.component'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
import { UserConverter } from './converters/firebase.converter'
import CategoryDetailsPage from './page/category-details/category-details.page'
import CheckoutPage from './page/checkout/checkout.page'
import ExplorePage from './page/explore/explore.page'

// Pages
import HomePage from './page/home/home.page'
import LoginPage from './page/login/login.page'
import SignUpPage from './page/sign-up/sign-up.page'

const App: FunctionComponent = () => {
  const [isInitialize, setInitialize] = useState(true)

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user
    if (isSigninOut) {
      logoutUser()
      return setInitialize(false)
    }
    const isSignIn = !isAuthenticated && user
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(UserConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore)
      return setInitialize(false)
    }
    setInitialize(false)
  })

  if (isInitialize) return <LoadingComponent />

  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorer" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
