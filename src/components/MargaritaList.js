import React from 'react'
import { Link } from "react-router-dom"

function MargaritaList({margaritas}) {
  const renderMargaritas = margaritas.map((marg) => (
    <li key={marg.id}>
      <Link to={`/margaritas/${marg.id}`}>{marg.name}</Link>
    </li>
  ))

  return <ul>{renderMargaritas}</ul>

}

export default MargaritaList;