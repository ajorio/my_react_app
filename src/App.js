import React, { Component, Fragment } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'
import './components/Button.css'

const famille = {
  membre1: {
    nom: 'Sophia',
    age: 30
  },
  membre2: {
    nom: 'Abdellah',
    age: 32
  },
  membre3: {
    nom: 'Yanis',
    age: 2
  }
}
class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = (pas, id) => {
    const { famille } = { ...this.state }
    famille[id].age += pas
    this.setState(famille)
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  handleChange = (event, id) => {
    const { famille } = { ...this.state }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState(famille)
  }

  cacherNom = (id) => {
    const { famille } = { ...this.state }
    famille[id].nom = 'X'
    this.setState(famille)
  }

  render() {
    const { famille, isShow } = this.state
    let description = null
    if (isShow) {
      description = (
        <Fragment>
          <strong>Je suis un enfant</strong>
          <br />
        </Fragment>
      )
    }

    const listeMembre = Object.keys(famille)
      .map(
        membre => (
          <Membre key={membre} nom={famille[membre].nom} age={famille[membre].age}
            cacherNom={() => this.cacherNom(membre)}
            handleChange={event => this.handleChange(event, membre)}
            description={description} handleShowDescription={this.handleShowDescription}
            handleClick={() => this.handleClick(2, membre)}/>
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
