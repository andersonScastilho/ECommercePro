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
  })
})
