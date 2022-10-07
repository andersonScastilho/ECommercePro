import axios from 'axios'
import { useEffect, useState } from 'react'

// Utilities
import CategoryType from '../../types/category.types' // Tipo
import env from '../../config/env.config'

// Styles
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  const fetchcategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }
  console.log({ categories })
  useEffect(() => {
    fetchcategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}
export default Categories
