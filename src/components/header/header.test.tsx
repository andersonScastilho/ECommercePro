import { renderWithRedux } from '../../helpeers/test.helper'
import Header from './header.components'

describe('Header', () => {
  it('should show signout button if use is not authenticated', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: true } } as any
    })

    getByText('Sair')
  })
  it('Should show sign in and sign up button if user is not authenticated', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: false } } as any
    })

    getByText(/Login/i)
    getByText(/Criar Conta/i)
  })
})
