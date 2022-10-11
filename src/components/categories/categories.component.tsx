import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
// Utilities
import CategoryType from '../../types/category.types' // Tipo

// Components
import CategoryItem from '../category-item/category-item.component'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { db } from '../../config/firebase.config'

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  const fetchcategories = async () => {
    try {
      const categoriesFromFirestore: CategoryType[] = []
      const querysnapshot = await getDocs(collection(db, 'categories'))
      querysnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    }
  }
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
