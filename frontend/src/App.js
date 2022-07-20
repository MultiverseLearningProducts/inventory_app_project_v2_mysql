import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import './App.css';
import Nav from "./Components/NavBar/NavBar";
import './index.css';
import './Components/NavBar/NavBar.css';
import ProductPage from './Pages/ProductPage';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Routes>

          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductPage />} />

        </Routes>

      </main>

    </Router>
  );
}

export default App;
