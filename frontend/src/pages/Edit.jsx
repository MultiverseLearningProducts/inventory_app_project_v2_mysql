import {useState} from 'react';

export default function Edit({catId}) {
  const selectedCat = {
    adaptability: 5,
    affection_level: 5,
    cat_id: "abys",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    energy_level: 5,
    grooming: 1,
    health_issues: 2,
    id: 1,
    image_url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    life_span: "14 - 15",
    name: "Abyssinian",
    origin: "Egypt",
    temperament: "Active, Energetic, Independent, Intelligent, Gentle",
    weight: "7  -  10",
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
  }
  // let selectedCat;

  const [adaptability, setAdaptability] = useState(selectedCat.adaptability);
  const [affection_level, setAffection_level] = useState(selectedCat.affection_level);
  const [description, setDescription] = useState(selectedCat.description);
  const [energy_level, setEnergy_level] = useState(selectedCat.energy_level);
  const [grooming, setGrooming] = useState(selectedCat.grooming);
  const [health_issues, setHealth_issues] = useState(selectedCat.health_issues);
  const [image_url, setImage_url] = useState(selectedCat.image_url);
  const [life_span, setLife_span] = useState(selectedCat.life_span);
  const [name, setName] = useState(selectedCat.name);
  const [origin, setOrigin] = useState(selectedCat.origin);
  const [temperament, setTemperament] = useState(selectedCat.temperament);
  const [weight, setWeight] = useState(selectedCat.weight);
  const [wikipedia_url, setWikipedia_url] = useState(selectedCat.wikipedia_url);

  const getCat = async (catId) => {
    const res = await fetch(`http://localhost:3000/${catId}`,{
      headers: {
        'SameSite': 'None'
      }
    });
    // const {selectedCat} = await res.json();

    setAdaptability(selectedCat.adaptability);
    setAffection_level(selectedCat.affection_level);
    setDescription(selectedCat.description);
    setEnergy_level(selectedCat.energy_level);
    setGrooming(selectedCat.grooming);
    setHealth_issues(selectedCat.health_issues);
    setImage_url(selectedCat.image_url);
    setLife_span(selectedCat.life_span);
    setName(selectedCat.name);
    setOrigin(selectedCat.origin);
    setTemperament(selectedCat.temperament);
    setWeight(selectedCat.weight);
    setWikipedia_url(selectedCat.wikipedia_url);
  }

  return(
    <div className="edit-container">
      <section className="edit-form">
        <h2>Details:</h2>

        <form >
          Adaptability: <input type={"number"} value={adaptability} onChange={(e) => setAdaptability(e.target.value) } />
          Affection level: <input type={"number"} value={affection_level} onChange={(e) => setAffection_level(e.target.value) } />
          Description: <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value) } />
          Energy level: <input type={"number"} value={energy_level} onChange={(e) => setEnergy_level(e.target.value) } />
          Grooming: <input type={"number"} value={grooming} onChange={(e) => setGrooming(e.target.value) } />
          Health issues: <input type={"number"} value={health_issues} onChange={(e) => setHealth_issues(e.target.value) } />
          Image URL: <input type={"text"} value={image_url} onChange={(e) => setImage_url(e.target.value) } />
          Life span: <input type={"text"} value={life_span} onChange={(e) => setLife_span(e.target.value) } />
          Name: <input type={"text"} value={name} onChange={(e) => setName(e.target.value) } />
          Origin: <input type={"text"} value={origin} onChange={(e) => setOrigin(e.target.value) } />
          Temperament: <input type={"text"} value={temperament} onChange={(e) => setTemperament(e.target.value) } />
          Weight: <input type={"text"} value={weight} onChange={(e) => setWeight(e.target.value) } />
          Wikipedia URL: <input type={"text"} value={wikipedia_url} onChange={(e) => setWikipedia_url(e.target.value) } />
          <button className='form-button'>Update</button>
        </form>
      </section>
    </div>
  )
}