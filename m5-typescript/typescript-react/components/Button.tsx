import React, {FC} from 'react';

// Dos opciones:

interface Props{
  texto:string;
  onClick: () => void
}

// type Props = {
//   texto:string;
//   onClick: () => void
// }

// Dos opciones:

export const Button:FC<Props>= ({texto, onClick}) => {
  return (
    <button onClick={onClick}>{texto}</button>
  )
}

// export const Button= ({texto, onClick}:{texto: string, onClick:() => void}) => {
//   return (
//     <button onClick={onClick}>{texto}</button>
//   )
// }