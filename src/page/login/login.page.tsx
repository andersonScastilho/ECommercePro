import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.components'

// Styles
import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginInputContainer,
  LoginSubtitle
} from './login.page.styles'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com sua conta</LoginHeadline>
          <CustomButton startICon={<BsGoogle size={18} />}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>Entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer>email</LoginInputContainer>
          <LoginInputContainer>senha</LoginInputContainer>
          <CustomButton startICon={<FiLogIn size={18} />}> Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
export default LoginPage
