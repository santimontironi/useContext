import { createContext, useState } from "react"

const ProductsContext = createContext()

const ProductContext = ({children}) => {

    const[cartItems,setCartItems] = useState([])

    //funcion para agregar al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems,product])
    }

    return (
        <ProductsContext.Provider value={{cartItems,addToCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductContext