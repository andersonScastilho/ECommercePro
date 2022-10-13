import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'
import { useContext } from 'react'
// Styles
import {
  HeaderContainer,
  HeaderItem,
  Headeritems,
  HeaderTitle
} from './header.styles'
import { UserContext } from '../../contexts/user.context'

const Header = () => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()
  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <HeaderContainer>
      <HeaderTitle>Club Clothing</HeaderTitle>
      <Headeritems>
        <HeaderItem>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem>
          <BsCart3 size={25} />
        </HeaderItem>
      </Headeritems>
    </HeaderContainer>
  )
}
export default Header
