import { useContext } from "react"
import {ProductsContext} from "../Contexts/ProductContext"

const Cart = () => {

    const {cartItems} = useContext(ProductsContext)

    return (
        <div className="cart">
            {cartItems.lenght === 0 ? (
                <p>No hay productos agregados al carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item,index) => (
                        <li key={index}>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart