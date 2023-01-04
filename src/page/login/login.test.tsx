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
})
