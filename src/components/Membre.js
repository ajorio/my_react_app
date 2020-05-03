import React from 'react'
import Button from './Button'

function Membre ({ nom, age, cacherNom, handleChange, description
                  , handleShowDescription, handleClick, children }) {

  let petit = null
  if (age < 10) {
    petit = (
      <fragment>
        {description}
        <br/>
        <button onClick={handleShowDescription}>
          {
            description ? 'Cacher' : 'Montrer'
          }
        </button>
        <br/>
      </fragment>
    )
  }
  return (
    <fragment>
      <h2>Je suis {nom} : {age} ans</h2>
      <input type='text' value={nom} onChange={handleChange} />
      <button onClick={cacherNom}>X</button>
      <Button vieillir={handleClick} name='Vieillir de 2 ans' />
      { children ? <p>{children}</p> : null}
      {petit}
    </fragment>
  )
}

export default Membre
