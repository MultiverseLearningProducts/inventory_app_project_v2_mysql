import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductS from './pages/Products';
import './index.css'
import Product from './pages/Product';



function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductS />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </Router>

  );
}

export default App;
