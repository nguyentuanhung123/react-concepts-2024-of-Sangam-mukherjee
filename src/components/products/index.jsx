/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ProductItem from "./components/product-item";
import './style.css';

const ProductList = ({ name, city, listOfProducts }) => {

    const flag = true;

    // const renderTextBlock = (getFlag) => {
    //     return getFlag ? (
    //         <h4>Name is {name}, he/she is belongs to this city {city}</h4>
    //     ) : (
    //         <h4>Hello World</h4>
    //     )
    // }


    // const renderTextBlock = flag ? (
    //     <h4>Name is {name}, he/she is belongs to this city {city}</h4>
    // ) : (
    //     <h4>Hello World</h4>
    // )

    let renderTextBlock = null;

    if(flag) {
        renderTextBlock = 
            <h4>Name is {name}, he/she is belongs to this city {city}</h4>
    } else {
        renderTextBlock = 
            <h4>Hello World</h4>
    }
    
    return (
        <div>
            <h3 className="title">ECommer Project</h3>
            {/* <ProductItem /> */}
            {
                // renderTextBlock(flag)
                renderTextBlock
            }
            {
                listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem={item} key={index}/>
                ))
            }
        </div>
    )
}

export default ProductList;
