import Menu from "../../Components/Menu/Menu"
import Product from "../../Components/Product/Product";
import './PageProducts.css'
export default function PageProducts(props) {
    const { allCategories, changeQuantity} = props
  return (
    <>
      <h3>{allCategories.title}</h3>
      <ul id="option-list">
        {allCategories.products.map(product => (
            <Product product={product} changeQuantity={changeQuantity} />
        ))}
      </ul>
    </>
  );
}
