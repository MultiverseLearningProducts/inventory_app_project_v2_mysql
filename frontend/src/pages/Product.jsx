import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./popup.css"

function Product(){
    const catObj = {
    adaptability: 5,
    affection_level: 5,
    cat_id: "abys",
    createdAt: "2022-07-20T17:33:40.000Z",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    energy_level: 5,
    grooming: 1,
    health_issues: 2,
    id: 1,
    image_height: 1445,
    image_id: "0XYvRd7oD",
    image_url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    image_width: 1204,
    life_span: "14 - 15",
    name: "Abyssinian",
    origin: "Egypt",
    temperament: "Active, Energetic, Independent, Intelligent, Gentle",
    updatedAt: "2022-07-20T17:33:40.000Z",
    weight: "7  -  10",
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    }

    const [user, setUser] = useState();

    const params = useParams()
    console.log(params);

    async function getUser(id) {
        const response = await fetch(`http://localhost:8000/cats/${id}`)
        const data = await response.json();
        console.log(data);
        setUser(data);
    }

    useEffect(() =>{
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
        return(
            <div>Loading</div>
        )
    }

    
}

export default Product;