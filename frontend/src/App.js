import { useState, useEffect } from 'react';
import DisplayList from './components/DisplayList';
import Products from './pages/Products';
//import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Inventory App</h1>
      <Products />
    </div>
  );
}

export default App;
