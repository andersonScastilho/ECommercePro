import { collection, getDocs } from 'firebase/firestore'
import React, { createContext, FunctionComponent, useState } from 'react'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firebase.converter'
import CategoryType from '../types/category.types'

interface ICategoryContext {
  categories: CategoryType[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}
interface childrenProps {
  children: React.ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false
})

const CategoryContextProvider: FunctionComponent<childrenProps> = ({
  children
}) => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: CategoryType[] = []
      const querysnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querysnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  )
}
export default CategoryContextProvider
