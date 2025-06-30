import { useContext } from "react"
import {ProductsContext} from "../Contexts/ProductContext"

const Cart = () => {

    const {cartItems, clearCart} = useContext(ProductsContext)

    //se suma el total de los precios
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)

    return (
        <div className="cart">
            {cartItems.lenght === 0 ? (
                <p>No hay productos agregados al carrito.</p>
            ) : (
                <>
                    <p>Precio total a pagar:</p>
                    <p>${total}</p>
                    <button onClick={clearCart}>Limpiar carrito</button>
                </>
                
            )}
        </div>
    )
}

export default Cart