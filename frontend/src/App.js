import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditProduct from './pages/UpdateProduct';
import './index.css';
import ProductPage from './pages/productPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>

          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />

        </Routes>

      </main>

    </Router>
  );
}

export default App;
