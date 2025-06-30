import { createContext } from "react"

const ProductsContext = createContext()

const ProductContext = () => {
  return (
    <ProductsContext.Provider>
         <div>ProductContext</div>
    </ProductsContext.Provider>
  )
}

export default ProductContext