import { FunctionComponent } from 'react'

// Utilities
import CategoryType from '../../types/category.types'

// Styles
import './category-item.styles.css'

interface CategoryItemProps {
  category: CategoryType
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `${category.imageUrl}` }}>
      <div className="category-name-conainer">
        <p>{category.displayName}</p>
      </div>
    </div>
  )
}
export default CategoryItem
