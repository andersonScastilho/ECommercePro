import React, { useState, createContext, FunctionComponent } from 'react'
import CartProductType from '../types/cart.types'
import ProdutoType from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  products: CartProductType[]
  toggleCart: () => void
  addProductToCart: (product: ProdutoType) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})
interface childrenProps {
  children: React.ReactNode
}

const CartContextProvider: FunctionComponent<childrenProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const [products, setProducts] = useState<CartProductType[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: ProdutoType) => {
    const productAlreadInCart = products.some((item) => item.id === product.id)
    if (productAlreadInCart) {
      return setProducts((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    setProducts((prveState) => [...prveState, { ...product, quantity: 1 }])
  }
  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider
