import { FunctionComponent, useContext } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { BsCart } from 'react-icons/bs'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart}></CartEscapeArea>
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        <CartTotal>Total: R$9999</CartTotal>
        <CustomButton startICon={<BsCart />}>Ir para o Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}
export default Cart
