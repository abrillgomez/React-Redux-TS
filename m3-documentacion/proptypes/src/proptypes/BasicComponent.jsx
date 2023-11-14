// @ts-nocheck
import Proptypes from 'prop-types'

export default function ComponentBasic({text, number, data, array}) {
  return (
    <div>
      {text}
      {number}
      {data} {/* Este se muestra por consola */}
      {JSON.stringify(array)}
    </div>
  )
}

ComponentBasic.propTypes = {
  text: Proptypes.string,
  number: Proptypes.number,
  data: Proptypes.bool,
  array: Proptypes.array
}