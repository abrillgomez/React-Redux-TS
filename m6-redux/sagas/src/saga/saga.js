import {put, call, takeEvery} from 'redux-saga/effects'
import {failedFetch, loadingPokemons} from '../reducers/pokemonSlice'
import { fetchPokemons } from '../reducers/pokemonSlice'

// Servicio para traer los datos de la API de pokemons
const fetchingPokemons = async(page = 0) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
  const data = resp.json()
  return data
}

// Saga para obtener los datos
function* getPokemons(action){
  const page = action.payload
  try {
    yield put(loadingPokemons())
    // Obtener los datos de la API
    const data = yield call(fetchingPokemons, page)
    // Guardar los datos en la store si todo es exitoso
    yield put(fetchPokemons({pokemons: data.results, page: page}))
  } catch (error) {
    yield put(failedFetch({error: error.message}))
  }
}

// Saga principal para observar la acci´no de getPokemons
function* watchGetPokemons(){
  yield takeEvery('pokemon/fetchingPokemons', getPokemons)
}

export default watchGetPokemons