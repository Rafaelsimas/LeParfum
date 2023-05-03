import './Product.css'
export default function Product(props){
    const { product, changeQuantity } = props
    const { imageUrl, name, description, quantity, price} = product
    function selectItem(){
      if(product.quantity === 0){
        changeQuantity(product, 1)
      }
    }

    return(
        <li className={quantity > 0 ? 'option selected' : 'option'} onClick={selectItem}>
          <img src={imageUrl} alt="" />
          <h4>{name}</h4>
          <p className="description">
           {description}
          </p>
          <div className="container-qtd">
          <div className="container-price"> <strong>R${price.toFixed(2)}</strong></div>
          <div>
            <buttton className="btn-sub" onClick={() => changeQuantity(product, quantity-1)}>-</buttton>
            <span>{quantity}</span>
            <buttton className="btn-som" onClick={() => changeQuantity(product, product.quantity+1)}>+</buttton>
          </div>
          </div>
        </li>
    )
}