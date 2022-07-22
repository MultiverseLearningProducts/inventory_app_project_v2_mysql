import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditProduct from './pages/UpdateProduct';
import './index.css';
import ProductPage from './pages/productPage';
import NotFound from './pages/404';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>

      </main>
      <Footer />

    </Router>
  );
}

export default App;
