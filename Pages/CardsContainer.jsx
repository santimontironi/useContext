import { useEffect, useState } from "react"
import Card from "../src/Components/Card"
import Cart from "../src/Components/Cart"

const CardsContainer = () => {

  const[wrong,setWrong] = useState('')
  const[productsList,setProductsList] = useState([])

    useEffect(() => {
        try{
            async function callApi(){
                const res = await fetch('https://api.escuelajs.co/api/v1/products')
                const products = await res.json()
                setProductsList(products)
            }
            callApi()
        }
        catch(error){
            setWrong(error)
        }
        
    },[])

  return (
    <div className="cardContainer">
      {productsList.map((product) => (
        <Card key={product.id} image={product.category.image} name={product.category.title} price={product.price}/>
      ))}

      {wrong && <p>{wrong}</p>}

      <Cart/>
    </div>
  )
}

export default CardsContainer