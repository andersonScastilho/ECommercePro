import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.components'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

// Styles
import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginInputContainer,
  LoginSubtitle
} from './login.page.styles'
import { auth } from '../../config/firebase.config'

interface LoginForm {
  email: string
  password: string
}
const LoginPage = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<LoginForm>()
  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(userCredentials)
    } catch (error) {
      console.log({ error })
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'userNotFound' })
      }
      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'invalidPassword' })
      }
    }
  }

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
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>E-mail é obrigatório</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>E-mail invalido.</InputErrorMessage>
            )}
            {errors?.email?.type === 'userNotFound' && (
              <InputErrorMessage>
                Este e-mail não esta cadastrado.
              </InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
            {errors?.password?.type === 'invalidPassword' && (
              <InputErrorMessage>Senha Invalida</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            startICon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}
export default LoginPage
