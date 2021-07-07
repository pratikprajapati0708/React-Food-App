import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from "axios"
import { setCacheNameDetails } from 'workbox-core';


function App() {

  const [search,setsearch] = useState("chicken");
  const[recipes,setRecipes] = useState([]);

  const APP_ID= "0bcfd46d" ;
  const APP_KEY= "4b4ca221378076ed24faa1e5e1061f70" ;

  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = async() => {
    const result =await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    setRecipes(result.data.hits);
  }
  const onInputChange = (e) => {
   setsearch(e.target.value);
  }
  return (
    <div className="App">
     {/* <h1>Food Recipe App</h1> */}
     <Header search={search} onInputChange={onInputChange} />
     <div className="container"> <Recipes recipes={recipes} /> </div>
    </div>
  );
}

export default App;

