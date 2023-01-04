import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpeers/test.helper'
import SignUpPage from './sign-up.page'

describe('Sign Up', () => {
  it('should show error when typing to submit whitout filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<SignUpPage />, {})
    const submitButton = getByText('Criar Conta', { selector: 'button' })
    userEvent.click(submitButton)

    await findByText(/O nome é obrigatório./i)
    getByText(/O sobrenome é obrigatório./i)
    getByText(/O email é obrigatório./i)
    getByText(/A senha é obrigatória./i)
    getByText(/A confirmação é obrigatrória./i)
  })
  it('should show error when filling an invalid e-mail', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )
    const submitButton = getByText('Criar Conta', { selector: 'button' })
    const invalidInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.click(submitButton)
    userEvent.type(invalidInput, 'invalid_email')

    await findByText(/Insira um e-mail valido./i)
  })

  it('should show error when password and passwordConfirmation are diferent', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )
    const passwordInput = getByPlaceholderText(/digite sua senha/i)
    const passwordInputConfirmation = getByPlaceholderText(
      /digite novamente sua senha/i
    )

    userEvent.type(passwordInput, '123456')
    userEvent.type(passwordInputConfirmation, '12356789')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/As senhas precisam ser iguais/i)
  })

  it('should show error when password and has less than 6 characters', async () => {
    const { getByText, findByText, getByPlaceholderText } = renderWithRedux(
      <SignUpPage />,
      {}
    )
    const passwordInput = getByPlaceholderText(/digite sua senha/i)

    userEvent.type(passwordInput, '123')

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/A senha precisa ter no mínimo 6 caracteres/i)
  })
})
