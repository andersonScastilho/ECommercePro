import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpeers/test.helper'
import LoginPage from './login.page'

import * as firebaseAuth from 'firebase/auth'
import { AuthErrorCodes } from 'firebase/auth'

jest.mock('firebase/auth')

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
  it('should show an error if email is not found', async () => {
    const mockFirebaseAuth = firebaseAuth as any
    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.USER_DELETED })
    )
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )
    const emailInput = getByPlaceholderText(/digite seu e-mail/i)
    userEvent.type(emailInput, 'loremIpsum@gmail.com')

    const passwordInput = getByPlaceholderText(/digite sua senha/i)
    userEvent.type(passwordInput, '12345678')

    const submitButton = getByText('Entrar')
    userEvent.click(submitButton)

    await findByText(/Este e-mail não esta cadastrado./i)
  })
  it('should show an error if password is not valid', async () => {
    const mockFirebaseAuth = firebaseAuth as any
    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({ code: AuthErrorCodes.INVALID_PASSWORD })
    )
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )
    const emailInput = getByPlaceholderText(/digite seu e-mail/i)
    userEvent.type(emailInput, 'loremIpsum@gmail.com')

    const passwordInput = getByPlaceholderText(/digite sua senha/i)
    userEvent.type(passwordInput, '1234')

    const submitButton = getByText('Entrar')
    userEvent.click(submitButton)

    await findByText(/Senha Invalida/i)
  })
})
