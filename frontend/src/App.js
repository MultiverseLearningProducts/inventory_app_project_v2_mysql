import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

import Nav from "./Components/NavBar/NavBar";
import ProductPage from "./pages/productPage";
import ProductsPage from './Pages/ProductsPage';
import EditProduct from './pages/UpdateProduct';
import User from "./pages/User/User";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import Footer from "./components/Footer/Footer";
import CreateProduct from './pages/CreateProduct';
import NotFound from './pages/404';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Routes>

          <Route path='/products' element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
          <Route path='/*' element={<NotFound />} 

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
