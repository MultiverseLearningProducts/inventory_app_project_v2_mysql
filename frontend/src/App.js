import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch('http://localhost:5000/api/products');
    const data = await response.json();

    console.log('Data: ', data);
    const { products } = data;
    setProducts(products);
    console.log('Products: ', products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <h1>Inventory App</h1>
      {products.length > 0
        ? products.map((item) => <p key={item.id}>{item.title}</p>)
        : 'No products to display'}
    </div>
  );
}

export default App;
