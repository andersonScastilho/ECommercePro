import { FunctionComponent } from 'react'
import ProdutoType from '../../types/product.types'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

interface ProductItemProps {
  product: ProdutoType
}
const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}></ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
export default ProductItem
