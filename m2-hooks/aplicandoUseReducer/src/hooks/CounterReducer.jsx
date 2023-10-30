import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    default:
      return state;
  }
}

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
    </div>
  );
};
