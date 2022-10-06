import axios from 'axios'
import { useEffect, useState } from 'react'

// Utilities
import CategoryType from '../../types/category.types' // Tipo
import env from '../../config/env.config'

// Styles
import './categories.styles.css'

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
    <div className="categories-container">
      <div className="categories-content"></div>
    </div>
  )
}
export default Categories
