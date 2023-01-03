import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpeers/test.helper'
import CartProductType from '../../types/cart.types'
import Cart from './cart.component'

describe('Cart', () => {
  it('should show correclty cart products', () => {
    const products: CartProductType[] = [
      { id: '1', imageUrl: 'image_url', name: 'Boné', price: 100, quantity: 2 }
    ]
    const { getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products
        }
      } as any
    })
    getByText(/boné/i)
    getByText('R$100')
    getByText(2)
    getByText('Total: R$200')
    getByText(/ir para o checkout/i)
  })
  it('should not show checkout button and should show an emptu message if cart is empty', () => {
    const { getByText, queryByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: { products: [] }
      } as any
    })
    getByText(/seu carrinho esta vazio/i)
    expect(queryByText(/ir para o checkout/i)).toBeNull()
  })
  it('should increase product quantity on increase click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'Boné',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })
    const increaseButton = getByLabelText(/increase quantity of boné/i)
    userEvent.click(increaseButton)
    getByText('3')
  })
})
