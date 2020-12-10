import icon from './icon/pokeball.svg';
import './App.css';
import {useState,useEffect} from 'react';
import data from './components/data.js'
//1st Data from: https://pokeapi.co/api/v2/pokemon


function App() {
  const URL_1 = "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100"
  const [ pokemons, setPokemons ] = useState ([]);
  useEffect(()=>{
    fetch(URL_1)
    .then(data=>data.json())
    .then(data=>setPokemons(data.results))
    .catch(err =>{
      console.log("There is An Error.")
    })
    return ()=>{
    
    }
  },[])

  return (
    <div className="App">
      <div id="site-header" className="Header-module-firts">
        <header className="Header-module navbar navbar-dark bg-dark"> 
        <a className="Header-module-logo"> 
        <img src={icon} className="App-logo" alt="Pokedex-Order"/>
        </a>
          <nav >
            <a href="https://pokeapi.co/about" className="Header-link">About</a>      
            <a href="https://github.com/LuisGustavo25" className="Header-link">Contact</a>      
            <a href="https://pokeapi.co/docs/v2" className="Header-link">Documentation</a>      
        </nav>
        </header>        
      </div>
    <div className="Container">
      {pokemons.map((pokemon,index)=><data url={pokemon.url} className="Container-pokemon" key={index}>{pokemon.name}</data>)}
    </div>
  
      
      <footer className="App-footer">
       <h5>Made with React</h5>
      </footer>
    </div>
  );
}

export default App;