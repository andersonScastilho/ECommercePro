import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Styles
import {
  HeaderContainer,
  HeaderItem,
  Headeritems,
  HeaderTitle
} from './header.styles'
import { CartContext } from '../../contexts/cart.context'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { LogoutAction } from '../../store/reducers/user/user.actions'

const Header = () => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const { productsCount, toggleCart } = useContext(CartContext)

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
    dispatch(LogoutAction())
    signOut(auth)
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

        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} /> <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </Headeritems>
    </HeaderContainer>
  )
}
export default Header
