import React, { useEffect, useState } from "react";
import PokemonItem from "./Componentes/PokemonItem";
import PokemonService from "./Service/Pokemon";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const getPokemons = async () => {
    const listaPokemons = await PokemonService.get(nextPage);
    listaPokemons.results.forEach(async (pokemon) => {
      const data = await PokemonService.getByName(pokemon.name);
      setPokemons((currentList) => [...currentList, data]);
    });
    setNextPage(listaPokemons.next);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="app-contaner">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {pokemons.map((pokemon, index) => (
            <PokemonItem key={index} pokemon={pokemon} />
          ))}
        </div>
        <button className="load-more" onClick={() => getPokemons()}>
          ver mais
        </button>
      </div>
    </div>
  );
};

export default App;
