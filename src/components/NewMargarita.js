import React from 'react'
import './style.css'; 

function NewMargarita() {
  return (

<div  className='form-box'>
  <form>
    <label>Add a Margarita</label>
    <input className='form-input' type="text" name="name" placeholder="Name"/>
    <input className='form-input' type="text" name="img" placeholder="Image URL"/>
    <input type="submit" value="Submit" className='submit'/>
  </form>
</div>
  )
}

export default NewMargarita;