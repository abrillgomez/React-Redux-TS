import { configureStore } from '@reduxjs/toolkit'
// import contadorReducer from '../reducers/contadorReducer'
import { counterSlice } from '../reducers/contadorSlice'

const store = configureStore({
  reducer: {
    // contador: contadorReducer
    contador: counterSlice.reducer
  }
})

export default store