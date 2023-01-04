import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpeers/test.helper'
import LoginPage from './login.page'

describe('Login', () => {
  it('should show error when trying to submit whitout filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {})

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/E-mail é obrigatório/i)
    getByText(/A senha é obrigatória/i)
  })
  it('should show error is email is invalid', async () => {
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )
    const emailInput = getByPlaceholderText(/Digite seu e-mail/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)
    await findByText(/E-mail invalido./i)
  })
})
