import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import './App.css';
import Nav from "./Components/Nav";
import './index.css';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Routes>

          <Route path='/product/:id' element={<ProductPage />} />

        </Routes>

      </main>

    </Router>
  );
}

export default App;
