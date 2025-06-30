import { useEffect, useState } from "react"
import Card from "../src/Components/Card"
import Cart from "../src/Components/Cart"

const CardsContainer = () => {

  const[wrong,setWrong] = useState('')
  const[productsList,setProductsList] = useState([])

    useEffect(() => {
        try{
            async function callApi(){
                const res = await fetch('https://fakestoreapi.com/products')
                const products = await res.json()
                setProductsList(products)
                console.log(products)
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
        <Card key={product.id} image={product.image} name={product.category.title} price={product.price}/>
      ))}

      {wrong && <p>{wrong}</p>}

      <Cart/>
    </div>
  )
}

export default CardsContainer