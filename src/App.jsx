/* eslint-disable no-unused-vars */
import './App.css';
import ClassBasedComponent from './components/class-based-component';
import FunctionalComponent from './components/functional-conponent';
import ProductList from './components/products';

const dummyProductData = ['Product 1',  'Product 2', 'Product 3', 'Product 4'];

const App = () => {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      <ClassBasedComponent />
      {/* <FunctionalComponent /> */}

      {/* <ProductList listOfProducts={dummyProductData} name="Hung" city="Ha Noi"/> */}
    </div>
  )
}

export default App
