import { FunctionComponent } from 'react'
import ProdutoType from '../../types/product.types'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartPlus } from 'react-icons/bs'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../store/reducers/cart/cart.actions'

interface ProductItemProps {
  product: ProdutoType
}
const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
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
