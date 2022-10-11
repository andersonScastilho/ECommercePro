import ProdutoType from './product.types'

interface CategoryType {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: ProdutoType[]
}
export default CategoryType
