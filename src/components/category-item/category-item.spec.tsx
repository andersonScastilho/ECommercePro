import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CategoryType from '../../types/category.types'
import CategoryItem from './category-item.component'

describe('Category Item', () => {
  it('Should render category correctly', () => {
    const category: CategoryType = {
      id: '1',
      displayName: 'Lorem Ipsum',
      imageUrl: 'image_url',
      name: 'Lorem Ipsum',
      products: []
    }
    const { getByText } = render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    )

    getByText('Lorem Ipsum')
    getByText('Explorar')
  })
})
