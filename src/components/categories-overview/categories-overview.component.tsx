import { FunctionComponent, useContext, useEffect } from 'react'

import { CategoryContext } from '../../contexts/category.context'
import CategoryOverview from '../category-overview/category-overview.component'
import LoadingComponent from '../loading/loading.component'

import { Container } from './categoires-overview.styles'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])
  if (isLoading) return <LoadingComponent />
  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}
export default CategoriesOverview
