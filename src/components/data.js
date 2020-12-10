import React from 'react';
import {useState,useEffect} from 'react';

export const Data = (props)=> {
    const [ pokemon, setPokemon ] = useState ({});
    useEffect(()=>{
        fetch(props.url)
        .then(data=>data.json())
        .then(data=>setPokemon(data.results))
        .catch(err =>{
            console.log("There is An Error.")
        })

        return()=>{
            
        }
    },[])
return(<image src={pokemon.sprites}></image>);
}

