import React, { Fragment } from 'react'

function Membre ({ nom, age, children }) {
  return (
    <Fragment>
      <h2>Je suis {nom} : {age} ans</h2>
      { children ? <p>{children}</p> : null}
    </Fragment>
  )
}

export default Membre
