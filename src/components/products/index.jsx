/* eslint-disable no-unused-vars */
import ProductItem from "./components/product-item";

const dummyProductData = ['Product 1',  'Product 2', 'Product 3', 'Product 4'];
const ProductList = () => {
    return (
        <div>
            <h3>ECommer Project</h3>
            {/* <ProductItem /> */}

            {
                dummyProductData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </div>
    )
}

export default ProductList;
