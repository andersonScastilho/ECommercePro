import { FunctionComponent } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart
} from '../../store/toolkit/cart/cart.slice'
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
  const dispatch = useDispatch()

  const handleRemoveCick = () => {
    dispatch(removeProductFromCart(product.id))
  }
  const handleIcreaseClick = () => {
    dispatch(increaseCartProductQuantity(product.id))
  }
  const handledecreaseProductClick = () => {
    dispatch(decreaseCartProductQuantity(product.id))
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
