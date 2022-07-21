import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductS from './pages/Products';
import Product from './pages/Product';
import Edit from './pages/Edit';
import './index.css'



function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductS />} />
        <Route path='/:id' element={<Product />} />
        {/* <Route path='/create-cat/:id' element={<Add />} /> */}
        <Route path='/edit-cat/:id' element={<Edit />} />
      </Routes>
    </Router>

  );
}

export default App;
