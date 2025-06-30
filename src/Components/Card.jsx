import { useContext } from "react"
import {ProductsContext} from "../Contexts/ProductContext"

const Card = ({image,name,price}) => {

    const {addToCart} = useContext(ProductsContext)

    const handleToCart = () => {
        const product = {image,name,price}
        addToCart(product)
    }

    return (
        <div className="card">
            <img className="card-img" src={image} alt="imagen" />
            <p className="product-name">{name}</p>
            <div className="price-content">
            <p className="price">${price}</p>
                <button onClick={handleToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card