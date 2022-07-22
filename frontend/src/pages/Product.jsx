import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./popup.css"

function Product(){
        
    

    const [user, setUser] = useState();

    const params = useParams()
    console.log(params);

    async function getUser(id) {
        const response = await fetch(`http://localhost:8000/cats/${id}`)
        const data = await response.json();
        console.log(data);
        setUser(data);
    }


    useEffect (() => {
        getUser(params.id);
    },[params.id])

    document.body.style ='#bacdd8';


    if(user){
        return(
            <div className='container'>
                 <div className='images'>
                     <img src={user.image_url} alt={user.name} />
                 </div>
                 <div className='cat'>
                     <h1>{user.name}</h1>
                     <p className='desc'>{user.description}</p>
                 </div>
            </div>
         )
        }else{
            <p>Still Loading...</p>
        }

    
}

export default Product;