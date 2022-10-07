import { FunctionComponent } from 'react'

// Utilities
import CategoryType from '../../types/category.types'

// Styles
import { CategoryContainer, CategoryName } from './category.styles'

interface CategoryItemProps {
  category: CategoryType
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryContainer backgroundimage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryContainer>
  )
}
export default CategoryItem
