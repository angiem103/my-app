import React from 'react'
import MargaritaCard from './MargaritaCard'

function MargaritaList({margaritas}) {
  return (
    <div>
      {margaritas.map(margarita => <MargaritaCard margarita={margarita} key={margarita.id}/>)}
    </div>
  )
}

export default MargaritaList;