import React from 'react'

function NewMargarita() {
  return (
    <form>
        <h2>Add A New Recipe</h2>
        <label>
            Name:
        <input type="text" name="name"/>
        <br></br>
            Ingredients:
        <input type="text" name="ingredients"/>
        <br></br>
            Directions:
        <input type="text" name="directions"/>
        <br></br>
            Image Url:
        <input tyep="text" name="image"/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default NewMargarita;