import React, { useState, useEffect } from 'react';
import api from '../../api';
import "./style.css"

export default ({pokemon}) => {

    const [pokeInfo, setPokeInfo] = useState({});
    const [pokeTypes, setPokeTypes] = useState([{type: {name: "aff"}}]);

    async function loadPokemon(){
        const request = await fetch(`${api}pokemon/${pokemon.name}`);
        const response = await request.json();

        setPokeInfo(response);
        setPokeTypes(response.types);
    }

    useEffect(() => {
        loadPokemon();
    }, [pokemon])
        
    return (
        <div className={`pokemon-info ${pokeTypes[0].type.name}`}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo.id}.png`} alt={pokeInfo.name}/>
            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeInfo.id}.svg`} alt={pokeInfo.name}/> */}
            
            <span># {pokeInfo.id}</span>
            <h2>{pokeInfo.name}</h2>
            <div className="types">
            {
                pokeTypes.map((type, key) => (
                    
                    <p key={key} className={type.type.name}>{type.type.name}</p>

                ))
            }
            </div>
        </div>
    )
}