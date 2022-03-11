import React from 'react'
import { useParams } from "react-router-dom"
import './style.css'

function MargaritaCard({margaritas}) {

  console.log(margaritas)
  const params = useParams()
  const margarita = margaritas[params.id - 1]

  return (
    <div className='text'>
      <h3>{margarita.name}</h3>
      <img className = 'image' src={margarita.image} alt={margarita.name}></img>
      <br></br>
      Ingredients:
      <p>{margarita.ingredients}</p>
      Directions:
      <p>{margarita.directions}</p>
    </div>
  )
}

export default MargaritaCard;

