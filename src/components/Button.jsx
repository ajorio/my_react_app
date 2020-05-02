import React from 'react'

function Button ({ vieillir, name }) {
  return (
    <button onClick={vieillir}>{name}</button>
  )
}

export default Button
