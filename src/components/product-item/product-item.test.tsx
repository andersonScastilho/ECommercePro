import { renderWithRedux } from '../../helpeers/test.helper'
import ProductType from '../../types/product.types'
import ProductItem from './product-item.component'

describe('Product Item', () => {
  it('should show correclty product', () => {
    const product: ProductType = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100
    }
    const { getByText } = renderWithRedux(<ProductItem product={product} />, {})
    getByText(/boné/i)
    getByText('R$100')
    getByText(/adicionar ao carrinho/i)
  })
})
