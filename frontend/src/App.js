import { useState, useEffect } from 'react';
import DisplayList from './components/DisplayList';
import './index.css'
function App() {
  const [cats, setCats] = useState([]);

  const getData = async () => {
    const response = await fetch('http://localhost:8000/cats');
    const data = await response.json();

    console.log('Data: ', data);
    const { cats } = data;
    setCats(cats);
    console.log('Cats: ', cats);
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className='App'>
      <div className='header'>
        <h1>Inventory App</h1>

      </div>
      <div className='cats'>
      {cats.length > 0 ? <DisplayList displayList ={cats}/> : 'No cats to display'}
      </div>
    </div>
  );
}

export default App;
