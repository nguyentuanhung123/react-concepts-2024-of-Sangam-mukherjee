/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ProductItem from "./components/product-item";
import './style.css';

const ProductList = ({ name, city, listOfProducts }) => {
    
    return (
        <div>
            <h3 className="title">ECommer Project</h3>
            {/* <ProductItem /> */}
            <h4>Name is {name}, he/she is belongs to this city {city}</h4>

            {
                listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem={item} key={index}/>
                ))
            }
        </div>
    )
}

export default ProductList;
