import { FunctionComponent } from 'react'
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
import CartItem from '../cart-item/cart-item.component'
import { useAppSelector } from '../../hooks/redux.hooks'
import { useDispatch } from 'react-redux'
import { toogleCart } from '../../store/reducers/cart/cart.actions'
import {
  selectProductsCount,
  selectProductsTotalPrice
} from '../../store/reducers/cart/cart.selectors'

const Cart: FunctionComponent = () => {
  const navigate = useNavigate()

  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsCount = useAppSelector(selectProductsCount)

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
