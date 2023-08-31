import React, { useEffect, useState } from "react";
import { Header } from '../components/header/header';

export default function Detail() {

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    const [pokemonDetail, setPokemonDetail] = useState({});
    const image = "";

    useEffect(() => { 
        async function getDetail() {
          try {
              let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
              var response = await res.json()
              setPokemonDetail(response)
              image = pokemonDetail.name;
              console.log(image)
              console.log('hi')
              return await response;
          } catch (error) {
          }
        }
    getDetail()
    
    }, []);

    return(
        <>

<Header />
<div className="container">
            <div className="card">
            {console.log(pokemonDetail)}

            <h1>Detalle de Pokemon</h1>
            <h2>Nombre: {pokemonDetail.name}</h2>
            <p>ID: {id}</p>

            {console.log(pokemonDetail.sprites)}
            {console.log(pokemonDetail.types)}
            {console.log(pokemonDetail.stats)}    
            {console.log(pokemonDetail.abilities)}         
            <br/> 

            <a className="btn btn-sm btn-dark" href={"/home"}> BACK POKEMON LIST </a>   

        </div>
        </div>
        
        </>
        
    )
}