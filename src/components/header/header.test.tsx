import { renderWithRedux } from '../../helpeers/test.helper'
import CartProductType from '../../types/cart.types'
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
  it('should show correct cart products count', () => {
    const products: CartProductType[] = [
      {
        id: '1',
        imageUrl: 'image_url',
        name: 'Lorem Ipsum',
        price: 5,
        quantity: 10
      },
      {
        id: '2',
        imageUrl: 'image_url',
        name: 'Lorem Ipsum2',
        price: 5,
        quantity: 7
      }
    ]
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: {
        cartReducer: {
          products
        }
      } as any
    })
    getByText(17)
  })
})
