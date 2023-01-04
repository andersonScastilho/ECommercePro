import { renderWithRedux } from '../../helpeers/test.helper'
import CategoryType from '../../types/category.types'
import CategoryOverview from './category-overview.component'

describe('Category Overview', () => {
  it('should show correctly category and its products', () => {
    const category: CategoryType = {
      displayName: 'Lorem Ipsum',
      id: '1',
      imageUrl: 'image_url',
      name: 'lorem-ipsum',
      products: [
        { id: '1', imageUrl: 'image_url', name: 'Lorem-1', price: 100 },
        { id: '2', imageUrl: 'image_url', name: 'Lorem-2', price: 200 },
        { id: '3', imageUrl: 'image_url', name: 'Lorem-3', price: 300 },
        { id: '4', imageUrl: 'image_url', name: 'Lorem-4', price: 400 },
        { id: '5', imageUrl: 'image_url', name: 'Lorem-5', price: 500 }
      ]
    }
    const { getByText, queryByText } = renderWithRedux(
      <CategoryOverview category={category} />,
      {}
    )
    getByText(/Lorem Ipsum/i)

    getByText(/Lorem-1/i)
    getByText('R$100')

    getByText(/Lorem-2/i)
    getByText('R$200')

    getByText(/Lorem-3/i)
    getByText('R$300')

    getByText(/Lorem-4/i)
    getByText('R$400')

    expect(queryByText(/lorem-5/i)).toBeNull()
  })
})
