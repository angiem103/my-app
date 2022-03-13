import React from 'react'
import { useParams } from "react-router-dom"
import './style.css'
import { useNavigate } from "react-router-dom"
function MargaritaCard({margaritas, onDrinkDelete}) {

  const params = useParams();
  const margarita = margaritas[params.id - 1];
  const navigate = useNavigate()

  function handleDelete() {
    fetch(`${process.env.REACT_APP_API_URL}/margaritas/${margarita.id}`, {
      method: "DELETE",
    }) 
    .then(r => r.json())
    .then(()=> {
      onDrinkDelete(margarita)
      navigate("/margaritas")
    })
  };

  return (
    <div className='text'>
      <h3>{margarita?.name}</h3>
      <img className = 'image' src={margarita?.image} alt={margarita?.name}></img>
      <br></br>
      Ingredients:
      <p>{margarita?.ingredients}</p>
      Directions:
      <p>{margarita?.directions}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default MargaritaCard;

