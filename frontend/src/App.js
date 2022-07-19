import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';
import ProductPage from './pages/productPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>

          <Route path='/product/:id' element={<ProductPage />} />

        </Routes>

      </main>

    </Router>
  );
}

export default App;
