/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// @ts-nocheck
import React from 'react'

export const ChildComponent = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Increment</button>;
});
