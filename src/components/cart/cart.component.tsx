import { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { useAppSelector } from '../../hooks/redux.hooks'
import { useDispatch } from 'react-redux'
import { toogleCart } from '../../store/reducers/cart/cart.actions'

const Cart: FunctionComponent = () => {
  const navigate = useNavigate()

  const { productsTotalPrice, productsCount } = useContext(CartContext)

  const { isVisible, products } = useAppSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  const handleCheckoutClick = () => {
    navigate('/checkout')
    dispatch(toogleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toogleCart())
  }
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}
        {productsCount > 0 && (
          <CustomButton startICon={<BsCart />} onClick={handleCheckoutClick}>
            Ir para o Checkout
          </CustomButton>
        )}
        {productsCount === 0 && <p> Seu carrinho esta vazio</p>}
      </CartContent>
    </CartContainer>
  )
}
export default Cart
