import React, { Component } from 'react'
import './App.css'
import Membre from './Membre'

const famille ={
  membre1: {
    nom: 'Sophia',
    age: 30
  },
  membre2: {
    nom: 'Abdellah',
    age: 32
  }
}
class App extends Component {
  state = {
    famille
  }


  render () {

    const listeMembre = Object.keys(famille)
      .map(
        membre => (
          <Membre nom={famille[membre].nom} age={famille[membre].age} />
        )
      )

    return (
      <div className='App'>
        <h1>Bonjour tout le monde!</h1>
        {listeMembre}
      </div>
    )
  }
}

export default App
