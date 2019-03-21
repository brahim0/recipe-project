import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';

import Form from './components/Form';
const API_KEY="624b9880d92ab8e83c529c58fb12d62d";


class App extends Component {
  state={
    recipes:recipes
  }
  getRecipes=async(e)=>{
    e.preventDefault();
    console.log(this.state.recipes);
    const recipeName=e.target.elements.recipeName.value;
    console.log(recipeName);
    const api_call= await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`);
    const data=await api_call.json();
    console.log(data.recipes);
    this.setState({
      recipes:data.recipes
    });
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>

        </header>
        <Form recipes={this.getRecipes} />
      <Recipes recipes={this.state.recipes}  />
      
       
      </div>
    );
  }
}

export default App;
