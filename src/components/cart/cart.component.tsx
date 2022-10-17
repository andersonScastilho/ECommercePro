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
import CartItem from '../cart-item/cart-item.component'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}
        {productsCount > 0 && (
          <CustomButton startICon={<BsCart />}>Ir para o Checkout</CustomButton>
        )}
        {productsCount === 0 && <p> Seu carrinho esta vazio</p>}
      </CartContent>
    </CartContainer>
  )
}
export default Cart
