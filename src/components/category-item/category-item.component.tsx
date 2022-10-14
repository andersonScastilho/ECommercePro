import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
// Utilities
import CategoryType from '../../types/category.types'

// Styles
import { CategoryContainer, CategoryName } from './category.styles'

interface CategoryItemProps {
  category: CategoryType
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }
  return (
    <CategoryContainer backgroundimage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryContainer>
  )
}
export default CategoryItem
