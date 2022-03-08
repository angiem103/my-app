import React from 'react'

function MargaritaCard({margarita}) {
  return (
    <div className="margarita">
      <h3>{margarita.name}</h3>
      <img src={margarita.image} alt={margarita.name}></img>
    </div>
  )
}

export default MargaritaCard;

