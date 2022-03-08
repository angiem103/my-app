import React from 'react'
import { useParams } from "react-router-dom"

function MargaritaCard({margaritas}) {

  console.log(margaritas)
  const params = useParams()
  console.log(params)
  

  return (
    <div className="margarita">
      <h3>{margaritas[params.margID].name}</h3>
      {/* <img src={margarita.image} alt={margarita.name}></img> */}
    </div>
  )
}

export default MargaritaCard;

