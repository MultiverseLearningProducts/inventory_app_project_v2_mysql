import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

import ProductPage from "./pages/productPage";
import User from "./pages/User/User";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
