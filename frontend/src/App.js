import { useState, useEffect } from 'react';
import './App.css';
import  HomePage  from './pages/HomePage';
import Card from './components/Card';
import Users from './pages/Users';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path='/' element={<Users />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
