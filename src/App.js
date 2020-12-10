
import './App.css';
import {useState,useEffect} from 'react';

//Importando todos los elementos
// <img src={logo} className="App-logo" alt="logo" />
//import { datos } from './task.json'
//https://pokeapi.co/api/v2/pokemon
//Clase Johanistica:
//1er: const [ elpo, setElpo ] = useState ("Johan es Un:"); Donde el primero es la variable y el segundo una función
//2do: Primer item la Arrow Function, segundo el Array.

function App() {

  const [ pokemons, setPokemons ] = useState ([]);
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(data=>data.json())
    .then(data=>setPokemons(data.results))
    console.log(pokemons)
    return ()=>{
    
    }
  },[])

  return (
    <div className="App">
      <p>{pokemons.map((pokemon)=><p>{pokemon.name}</p>)}</p>
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
