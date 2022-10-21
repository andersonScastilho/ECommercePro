import CartProductType from '../../../types/cart.types'
import CartActionTypes from './cart.actions-type'

interface InitialState {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: CartProductType[]
}

const initialState: InitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0
}
const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.toogleCart:
      return { ...state, isVisible: !state.isVisible }

    case CartActionTypes.addProductToCart: {
      const product = action.payload

      const productAlreadInCart = state.products.some(
        (item) => item.id === product.id
      )
      if (productAlreadInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }
    default: {
      return { ...state }
    }
  }
}
export default cartReducer
