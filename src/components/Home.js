import React from 'react'
import './style.css'

function Home() {
  return (
    <div>
        <h1 className='header'>Welcome to Margarita Alley</h1>
        <h3 className='quote'> “If life gives you limes, make margaritas.” — Jimmy Buffett"</h3>
        <p className='web-description'>
          If you are in need of a Margarita you've come to the right place! Margarita Alley has amazing margarita recipes for you to try at home. Add your favorite margarita recipe by clicking on <em>"Add A Margarita"</em> at the top of the website. Enjoy!
        </p>
        <p className='web-description' style={{fontSize: "17px"}}>
          <em>Margarita Fun Fact:</em> Margarita means daisy in spanish. The daisy is an old prohibition drink that has a base spirit, sugar, and a sour. The cocktail later inspired the sidecar, which is basically a margarita with cognac and lemon. Some believe that the margarita is just a spin on a tequila daisy.
        </p>

    </div>
  );
};

export default Home