import { configureStore } from '@reduxjs/toolkit'
// import contadorReducer from '../reducers/contadorReducer'
import { counterSlice } from '../reducers/contadorSlice'
import { pokemonSlice } from '../reducers/pokemonSlice'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    // contador: contadorReducer
    contador: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
  middleware: [thunk]
})

export default store