/* eslint-disable react/prop-types */
import styles from './product-item.module.css';

function ButtonComponent() {
    console.log(styles);
    return <button className={styles.buttonStyle}>Click</button>
}

function ProductItem({ singleProductItem }) {
    return(
        <div style={{ padding: '20px', border: '2px solid red', marginBottom: '12px' }}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem;