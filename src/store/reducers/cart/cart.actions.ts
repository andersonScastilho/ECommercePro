import ProdutoType from '../../../types/product.types'
import CartActionTypes from './cart.actions-type'

export const toogleCart = () => ({
  type: CartActionTypes.toogleCart
})

export const addProductToCart = (payload: ProdutoType) => ({
  type: 'cart/addProduct',
  payload
})
