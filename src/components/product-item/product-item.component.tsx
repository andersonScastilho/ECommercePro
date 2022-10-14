import { FunctionComponent, useContext } from 'react'
import ProdutoType from '../../types/product.types'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartPlus } from 'react-icons/bs'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: ProdutoType
}
const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)
  const handleAddToCartClick = () => {
    addProductToCart(product)
  }
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startICon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
export default ProductItem
