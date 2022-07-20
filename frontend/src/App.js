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
      <h1>Inventory App</h1>
      {cats.length > 0 ? <DisplayList displayList ={cats}/> : 'No cats to display'}

    </div>
  );
}

export default App;
