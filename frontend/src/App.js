import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductS from './pages/Products';
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductS />} />
      </Routes>
    </Router>
  );
}

export default App;
