import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Styles
import {
  HeaderContainer,
  HeaderItem,
  Headeritems,
  HeaderTitle
} from './header.styles'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/toolkit/user/user.slice'
import { toggleCart } from '../../store/toolkit/cart/cart.slice'
import { useAppSelector } from '../../hooks/redux.hooks'
import { selectProductsCount } from '../../store/reducers/cart/cart.selectors'

const Header = () => {
  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const productsCount = useAppSelector(selectProductsCount)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explorer')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }
  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>Club Clothing</HeaderTitle>
      <Headeritems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
        )}

        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} /> <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </Headeritems>
    </HeaderContainer>
  )
}
export default Header
