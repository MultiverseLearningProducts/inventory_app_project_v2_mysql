import './App.css';
import  HomePage  from './pages/HomePage';
import Users from './pages/Users';
import User from './pages/User';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<Users  />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/users/:id' element={<User />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
