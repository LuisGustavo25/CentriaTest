import icon from './icon/pokeball.svg';
import './App.css';
import {useState,useEffect} from 'react';
//1st Data from: https://pokeapi.co/api/v2/pokemon


function App() {

  const [ pokemons, setPokemons ] = useState ([]);
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/generation/1")
    .then(data=>data.json() )
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
            <a href="" className="Header-link">About</a>      
            <a href="" className="Header-link">Contact</a>      
            <a href="" className="Header-link">Documentatión</a>      
        </nav>
        </header>
        
      </div>

      {/*<p>{pokemons.map((pokemon)=><p>{pokemon}</p>)}</p>*/}
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
