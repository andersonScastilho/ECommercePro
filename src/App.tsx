import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

// Pages
import HomePage from './page/home/home.page'
import LoginPage from './page/login/login.page'
import PaymentConfirmationPage from './page/payment/payment-confirmation.component'
import SignUpPage from './page/sign-up/sign-up.page'

// Utilities
import { auth, db } from './config/firebase.config'
import { UserConverter } from './converters/firebase.converter'

// Components
import Cart from './components/cart/cart.component'
import LoadingComponent from './components/loading/loading.component'
import AuthenticationGuard from './guards/authentication.guards'
import CategoryDetailsPage from './page/category-details/category-details.page'
import CheckoutPage from './page/checkout/checkout.page'
import ExplorePage from './page/explore/explore.page'
import { LoginAction, LogoutAction } from './store/reducers/user/user.actions'
import { useAppSelector } from './hooks/redux.hooks'

const App: FunctionComponent = () => {
  const [isInitialize, setInitialize] = useState(true)

  const dispatch = useDispatch()
  const { isAuthenticated } = useAppSelector(
    (rooteReducer) => rooteReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigninOut = isAuthenticated && !user

      if (isSigninOut) {
        dispatch(LogoutAction())

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

        dispatch(LoginAction(userFromFirestore))

        return setInitialize(false)
      }
      setInitialize(false)
    })
  }, [dispatch])
  if (isInitialize) return <LoadingComponent />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorer" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
