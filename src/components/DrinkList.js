import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function DrinkList({ margaritas }) {

  const linkStyle = {
    color: 'black',
    fontSize: '25px',
    textDecorationThickness: '2px',
  };

  const renderMargaritas = margaritas.map((marg) => (
  
    <div key={marg.id}>
      <li>
      <Link to={`/margaritas/${marg.id}`} style={linkStyle}>{marg.name}</Link>
      </li>
      <br></br>
    </div>
   
   )
  );

return <ul className='margaritas'>{renderMargaritas}</ul>;

};

export default DrinkList;