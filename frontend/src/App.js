import './App.css';
import NavBar from './components/NavBar';
import Users from './pages/Users';
import User from './pages/User';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <main>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Users  />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/users/:id' element={<User />} />
          </Routes>
          <Footer/>
      </main>
    </Router>
  );
}

export default App;
