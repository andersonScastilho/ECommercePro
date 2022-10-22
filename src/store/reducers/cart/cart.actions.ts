import ProdutoType from '../../../types/product.types'
import CartActionTypes from './cart.actions-type'

export const toogleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const addProductToCart = (payload: ProdutoType) => ({
  type: 'cart/addProduct',
  payload
})

export const removeProductFromCart = (payload: string) => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})
export const increaseCartProductQuantity = (payload: string) => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})
export const decreaseCartProductQuantity = (payload: string) => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})
export const clearCartProducts = () => ({
  type: CartActionTypes.clearCartProducts
})
