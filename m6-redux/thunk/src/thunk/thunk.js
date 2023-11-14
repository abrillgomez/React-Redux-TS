import { failedFetch, fetchPokemons, loadingPokemons } from "../reducers/pokemonSlice"


export const getPokemons = (page = 0) => {
  return async(dispatch) => {
    dispatch(loadingPokemons())
    try{
      // Llamada a la API para obtener los datos
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
      const data = await response.json()
      // Colocar los datos de los pokemons en mi state y hacer el dispatch de fetchPokemons
      dispatch(fetchPokemons({pokemons: data.results, page: page + 1}))
    } catch (error){
      // Caso de que falle ejecutar la accion
      dispatch(failedFetch({error: error.message}))
    }
  }
}