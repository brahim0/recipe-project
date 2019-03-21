import React from 'react';


const Form = props=>(
   
   <form onSubmit={props.recipes}  style={{ marginBottom:"2rem" }}>
   <input className="form__input" type="text" name="recipeName"/>
   <button className="form__button" type="submit" >Search</button>
   </form>
)

export default Form;