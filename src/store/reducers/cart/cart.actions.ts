import ProductType from '../../../types/product.types'
import CartActionTypes from './cart.actions-type'

interface ToogleCartAction {
  type: typeof CartActionTypes.toggleCart
}
export const toggleCart = (): ToogleCartAction => ({
  type: CartActionTypes.toggleCart
})

interface AddProductToCartAction {
  type: typeof CartActionTypes.addProductToCart
  payload: ProductType
}

export const addProductToCart = (
  payload: ProductType
): AddProductToCartAction => ({
  type: 'cart/addProduct',
  payload
})

interface RemoveProductFromCartAction {
  type: typeof CartActionTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

interface IncreaseCartProductQuantityAction {
  type: typeof CartActionTypes.increaseCartProductQuantity
  payload: string
}
export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantityAction => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

interface DecreaseCartProductQuantityAction {
  type: typeof CartActionTypes.decreaseCartProductQuantity
  payload: string
}

export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantityAction => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})
interface ClearCartProductsAction {
  type: typeof CartActionTypes.clearCartProducts
}
export const clearCartProducts = (): ClearCartProductsAction => ({
  type: CartActionTypes.clearCartProducts
})

export type CartActions =
  | ToogleCartAction
  | AddProductToCartAction
  | IncreaseCartProductQuantityAction
  | DecreaseCartProductQuantityAction
  | ClearCartProductsAction
  | RemoveProductFromCartAction
