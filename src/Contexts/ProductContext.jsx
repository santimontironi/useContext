import { createContext, useState } from "react"

export const ProductsContext = createContext()

const ProductContext = ({children}) => {

    const[cartItems,setCartItems] = useState([])

    //funcion para agregar al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems,product])
    }

    //funcion para limpiar carrito
    const clearCart = () => {
        setCartItems([])
    }

    return (
        <ProductsContext.Provider value={{cartItems,addToCart, clearCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductContext