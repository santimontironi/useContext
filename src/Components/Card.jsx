const Card = ({image,name,price}) => {

  return (
    <div className="card">
        <img className="card-img" src={image} alt="imagen" />
        <p className="product-name">{name}</p>
        <div className="price-content">
        <p className="price">${price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card