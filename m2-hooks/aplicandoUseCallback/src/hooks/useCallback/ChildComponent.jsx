import React from 'react'

export const ChildComponent = React.memo(({ onClick }) => {
  console.log("Renderizado HIJO");

  return <button onClick={onClick}>Increment</button>;
});
