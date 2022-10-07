import Header from '../../components/header/header.components'
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
          <LoginSubtitle>Entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer>email</LoginInputContainer>
          <LoginInputContainer>senha</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
export default LoginPage
