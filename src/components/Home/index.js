import React, {useState, useEffect} from "react";
import Pokemon from "../Pokemon";
import api from '../../api';
import "./styles.css";

export default () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  
  async function loadPokemon(url = `${api}pokemon?limit=80&offset=0`){
    const request = await fetch(url);
    const response = await request.json();
    setListPokemon(response.results)
    setNext(response.next)
    setPrevious(response.previous)
  }


  useEffect(() => {

    loadPokemon();

  },[])

  function nextPage(){
    if(next === null) return;
    loadPokemon(next);
    window.scrollTo(0,0);
  };
  function previousPage(){
  if(previous === null)return;
    loadPokemon(previous);
    window.scrollTo(0,0);
  };
  return (
    <div className="Home">
      <div className="pokemon-list">
        {
          listPokemon.map((pokemon, key) => (
            <Pokemon pokemon={pokemon} key={key} />
          ))
        }
      </div>
      <footer>
        <button onClick={previousPage} disabled={previous === null}>Anterior</button>
        <button onClick={nextPage} disabled={next === null}>Próximo</button>
      </footer>
    </div>
  )
}