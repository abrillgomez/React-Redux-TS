import './App.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const getInitialCount = () => {
  return 28
}

const Counter = () => {

  const [count, setCount] = useState(() => getInitialCount())

  return <Button onClick={() => setCount(count+1)}>+ {count}</Button>
}

const Button = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

const App = () => {

  return (
    <>
      Counter App
      <Counter />
    </>
  )
}

export default App
