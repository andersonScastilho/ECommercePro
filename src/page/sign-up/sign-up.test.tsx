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
})