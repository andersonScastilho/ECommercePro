import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../contexts/cart.context'
import CartProductType from '../../types/cart.types'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'

interface CartItemProps {
  product: CartProductType
}
const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeItemCart, increaseProductQuantity, decreaseProductQuantity } =
    useContext(CartContext)
  const handleRemoveCick = () => {
    removeItemCart(product.id)
  }
  const handleIcreaseClick = () => {
    increaseProductQuantity(product.id)
  }
  const handledecreaseProductClick = () => {
    decreaseProductQuantity(product.id)
  }
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handledecreaseProductClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIcreaseClick} />
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton onClick={handleRemoveCick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}
export default CartItem
