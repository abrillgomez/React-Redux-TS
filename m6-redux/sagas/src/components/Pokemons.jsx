import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingPokemons } from "../reducers/pokemonSlice";
import { useState } from "react";

export const Pokemons = () => {

  const [localPage, setLocalPage] = useState(0)

  const {
    isLoading,
    pokemons = [],
    error,
  } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingPokemons(localPage));
  }, [localPage, dispatch]);

  return (
    <div>
      <h1>Pokemons</h1>
      {error && <p>Algo ha salido mal</p>}
      {isLoading && <p>Cargando...</p>}
      <div>
        {pokemons.map((pokemon) => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))}
      </div>
      <button onClick={() => setLocalPage(localPage + 1)}>Next Page</button>
    </div>
  );
};
