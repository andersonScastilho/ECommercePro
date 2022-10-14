import React, { useState, createContext, FunctionComponent } from 'react'
import CartProductType from '../types/cart.types'

interface ICartContext {
  isVisible: boolean
  products: CartProductType[]
  toggleCart: () => void
}
const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})
interface childrenProps {
  children: React.ReactNode
}

const CartContextProvider: FunctionComponent<childrenProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const [products] = useState<CartProductType[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }
  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider
