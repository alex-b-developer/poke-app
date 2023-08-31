import { useState } from "react";
import ContainerCard from "../card/card";
import React, { useEffect } from "react";

export default function PokeList(){

const [pokemonData, setPokemonData] = useState([]);

useEffect(() => { 

    async function getPokemon() {
      try {
          let res = await fetch("https://pokeapi.co/api/v2/pokemon/");
          var response = await res.json()
          setPokemonData(response.results)
          return await response.results;
      } catch (error) {
      }
    }
  getPokemon()

}, []);
  
   const results = pokemonData.map((element, i) =>
   <>
        {console.log(i)}
        <ContainerCard key={i} pokemon={element}/>
        </>
    );

    return(
        <div className="row">
            {results}
        </div>
    )
}