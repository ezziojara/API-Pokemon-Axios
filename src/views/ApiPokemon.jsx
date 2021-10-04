import React, { useState } from 'react';
import axios from 'axios';


const ApiPokemon = () => {

    const[pokemones, setPokemones] = useState([]);

    const buscarPokemones = () => {
        
        setPokemones([]);

        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response=>{setPokemones(response.data.results)})

    }

    return (
        <>
            <button onClick={buscarPokemones}>Fetch Pokemon</button>
            <ul>
            {
                pokemones?.map((pokemon, index)=>(
                
                    <h1 key={index}>{pokemon.name}</h1>
                    
                ))
            }
            </ul>
        </>
    );
}

export default ApiPokemon;