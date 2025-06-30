import CardsContainer from "../Pages/CardsContainer"
import ProductContext from "./Contexts/ProductContext"

function App() {

  return (
    <ProductContext>
      <CardsContainer/>
    </ProductContext>
  )
}

export default App
