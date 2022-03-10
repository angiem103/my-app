import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function MargaritaList({margaritas}) {

  const renderMargaritas = margaritas.map((marg) => (
    <li key={marg.id} className='link'>
      <Link to={`/margaritas/${marg.id}`}>{marg.name}</Link>
      <br></br>
      <img src={marg.image} className='image'/>
      <br></br>
    </li>
   )
  )


return <ul>{renderMargaritas}</ul>

}

export default MargaritaList;