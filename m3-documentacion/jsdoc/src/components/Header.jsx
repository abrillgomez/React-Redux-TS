import React from "react";

/**
 * El componente del header reutilizable
 * @function
 * @param {object} props - Las props del componente
 * @param {string} props.title - Título del encabezado
 * @param {string} [props.subtitle] - Subtítulo opcional del encabezado
 * @returns {JSX.Element} - Retorna el componente del encabezado
 */

export const Header = ({title, subtitle}) => {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );
};
