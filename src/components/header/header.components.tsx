import { BsCart3 } from 'react-icons/bs'

// Styles
import {
  HeaderContainer,
  HeaderItem,
  Headeritems,
  HeaderTitle
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Club Clothing</HeaderTitle>
      <Headeritems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
        </HeaderItem>
      </Headeritems>
    </HeaderContainer>
  )
}
export default Header
