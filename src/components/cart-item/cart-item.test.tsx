import { renderWithRedux } from '../../helpeers/test.helper'
import CartProductType from '../../types/cart.types'
import CartItem from './cart-item.component'

describe('Cart Item', () => {
  it('should show correctly cart item', () => {
    const cartItem: CartProductType = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100,
      quantity: 1
    }
    const { getByText, getByLabelText } = renderWithRedux(
      <CartItem product={cartItem} />,
      {}
    )
    getByText('Boné')
    getByText('R$100')
    getByText('1')

    getByLabelText(/increase quantity of Boné/i)
    getByLabelText(/decrease quantity of Boné/i)
    getByLabelText(/remove Boné/i)
  })
})
